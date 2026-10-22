-- Proposed PostgreSQL design. This is not an applied migration.
CREATE TABLE app_user (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username varchar(150) NOT NULL UNIQUE,
    role varchar(20) NOT NULL CHECK (role IN ('employee','reviewer','admin')),
    is_active boolean NOT NULL DEFAULT true
);
CREATE TABLE document (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    owner_id bigint NOT NULL REFERENCES app_user(id),
    title varchar(120) NOT NULL CHECK (length(trim(title)) > 0),
    document_type varchar(20) NOT NULL CHECK (document_type IN ('Memo','Request','Policy')),
    status varchar(30) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','in_review','changes_requested','approved','archived')),
    due_date date,
    revision integer NOT NULL DEFAULT 1 CHECK (revision > 0),
    current_version_id bigint,
    created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE document_version (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    document_id bigint NOT NULL REFERENCES document(id),
    version_number integer NOT NULL CHECK (version_number > 0),
    storage_key text NOT NULL UNIQUE,
    sha256 char(64) NOT NULL CHECK (sha256 ~ '^[0-9a-f]{64}$'),
    content_type varchar(100) NOT NULL CHECK (content_type IN ('application/pdf','application/vnd.openxmlformats-officedocument.wordprocessingml.document')),
    size_bytes bigint NOT NULL CHECK (size_bytes > 0 AND size_bytes <= 20971520),
    created_by bigint NOT NULL REFERENCES app_user(id),
    created_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE(document_id,version_number),
    UNIQUE(id,document_id)
);
ALTER TABLE document ADD CONSTRAINT current_version_belongs_to_document
    FOREIGN KEY (current_version_id,id) REFERENCES document_version(id,document_id)
    DEFERRABLE INITIALLY DEFERRED;
CREATE TABLE review_cycle (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    document_id bigint NOT NULL REFERENCES document(id),
    version_id bigint NOT NULL,
    reviewer_id bigint NOT NULL REFERENCES app_user(id),
    submitted_at timestamptz NOT NULL DEFAULT now(),
    decision varchar(20) CHECK (decision IN ('approve','return')),
    decision_comment text,
    decided_at timestamptz,
    FOREIGN KEY(version_id,document_id) REFERENCES document_version(id,document_id),
    CHECK ((decision IS NULL AND decided_at IS NULL) OR (decision IS NOT NULL AND decided_at IS NOT NULL)),
    CHECK (decision IS DISTINCT FROM 'return' OR length(trim(coalesce(decision_comment,''))) > 0)
);
CREATE UNIQUE INDEX one_pending_review ON review_cycle(document_id) WHERE decision IS NULL;
CREATE TABLE audit_event (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    actor_id bigint NOT NULL REFERENCES app_user(id),
    document_id bigint NOT NULL REFERENCES document(id),
    version_id bigint NOT NULL,
    review_id bigint REFERENCES review_cycle(id),
    action varchar(30) NOT NULL,
    safe_context jsonb NOT NULL DEFAULT '{}',
    created_at timestamptz NOT NULL DEFAULT now(),
    FOREIGN KEY(version_id,document_id) REFERENCES document_version(id,document_id)
);
CREATE TABLE notification_outbox (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    event_id bigint NOT NULL REFERENCES audit_event(id),
    recipient_id bigint NOT NULL REFERENCES app_user(id),
    channel varchar(20) NOT NULL CHECK (channel IN ('in_app','email')),
    state varchar(20) NOT NULL DEFAULT 'pending',
    attempt_count integer NOT NULL DEFAULT 0,
    next_attempt_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE(event_id,recipient_id,channel)
);
-- Service transaction rules still required: active identity, ownership,
-- reviewer is not author, transition guards, If-Match, row locking, audit/outbox.
-- Use a restricted production DB role. It must have no UPDATE/DELETE permission
-- on audit_event or document_version. Rehearse this policy in integration tests.
