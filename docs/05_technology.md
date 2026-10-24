# Technology comparison and decisions

## Decision method
The proposed production design is a modular Django web application using PostgreSQL and HTTP requests with JSON where asynchronous browser actions are needed. The delivered browser prototype deliberately uses plain HTML, CSS and JavaScript with local browser storage. It explores interaction and transition rules and does not implement the proposed backend.

The three scored decisions below meet the first pre-defense brief: server platform, data storage and component interaction, with three alternatives each. They are driven by FR01–FR15 and NFR01–NFR08 in [the requirements](06_requirements.md). The later deployment also needs an interface, binary storage and hosting choice; those options and their current decision status are recorded after the three ADRs. All decisions are provisional until the pilot's infrastructure and the team's implementation skills are known.

Scores below are preliminary design judgements on a scale from 1, weak fit, to 5, strong fit. They are not performance measurements, objective product rankings or evidence that both students approved the stack. Weighted totals equal the sum of score multiplied by criterion weight. Team familiarity has not been demonstrated, so learning effort is provisional. Revisit after a small implementation spike and supervisor review.

## Server platform decision ADR 001
Requirements driving this decision are authenticated sessions, role and object checks, transactional updates, simple administration and a two-person scope. Django provides integrated authentication and security facilities [S16]. FastAPI provides validation and dependencies but needs choices for persistence and administration [S17]. NestJS provides structured modules and authorization patterns [S18]. None automatically enforces our document ownership policy.

| Criterion and weight | Django | FastAPI | NestJS |
|---|---:|---:|---:|
| Integrated authentication and security 30 percent | 5 | 3 | 4 |
| Delivery effort for this scope 30 percent | 5 | 4 | 3 |
| Transactional workflow implementation 20 percent | 4 | 4 | 4 |
| Estimated learning effort 20 percent | 4 | 4 | 3 |
| Weighted total out of 5 | 4.60 | 3.70 | 3.50 |

Decision: Django, provisionally using the documented 5.2 LTS line with an updated patch selected at implementation. Use server templates initially and small browser scripts. Consequence: fewer separately deployed components, with explicit application-level object checks. Reconsider if the team demonstrates substantially stronger TypeScript capability or an API integration dominates the requirements. Package versions and patch support must be checked and pinned before implementation.

## Data storage decision ADR 002
PostgreSQL supports explicit row locks and text search [S19, S20]. SQLite simplifies a small local deployment but has a different write-concurrency profile [S21]. MongoDB supports transactions [S22], so it is not excluded for lacking them; its document model offers less benefit for our relational version and review model.

| Criterion and weight | PostgreSQL | SQLite | MongoDB |
|---|---:|---:|---:|
| Relational integrity fit 40 percent | 5 | 5 | 3 |
| Concurrent approval control 30 percent | 5 | 2 | 4 |
| Search fit 20 percent | 5 | 3 | 4 |
| Operational simplicity 10 percent | 3 | 5 | 3 |
| Weighted total out of 5 | 4.80 | 3.70 | 3.50 |

Decision: PostgreSQL with document, version, review and audit tables. Use a private object store for binary content and keep hashes and storage keys in the database. An upload remains quarantined until validation succeeds. Database transactions alone do not atomically commit an object-store write, so staged upload and cleanup are necessary. PostgreSQL 17 is the design baseline, pending environment confirmation and a supported patch choice.

## Component interaction decision ADR 003
The browser needs immediate confirmation of a small number of commands. HTTP request and response semantics are adequate [S23]. gRPC is a reasonable typed service-to-service alternative but adds client and transport tooling for this scope. RabbitMQ is appropriate for asynchronous messaging but introduces acknowledgements, retries and duplicate handling [S24].

| Criterion and weight | HTTP and JSON | gRPC | RabbitMQ messages |
|---|---:|---:|---:|
| Fit for browser commands 40 percent | 5 | 3 | 2 |
| Implementation simplicity 30 percent | 5 | 2 | 2 |
| Inspection and debugging 20 percent | 4 | 3 | 3 |
| Future distribution 10 percent | 4 | 5 | 5 |
| Weighted total out of 5 | 4.70 | 2.90 | 2.50 |

Decision: synchronous HTTP for commands and queries within a modular monolith. A database outbox records planned notifications in the same transaction as a decision. A periodic worker retries delivery with a unique event key. RabbitMQ remains a later option if throughput or external integrations justify it. Failure of email must not roll back an already committed approval. In-app state is the source of truth.

## Supporting implementation choices
These comparisons make the proposed architecture implementable without treating the browser prototype as a deployed system. They use qualitative trade-offs rather than new numerical scores: deployment policy, available services and team experience have not been verified with a pilot organisation.

| Choice | Alternatives considered | Provisional decision and reason | Condition that changes the decision |
|---|---|---|---|
| Browser interface | Django-rendered templates with small JavaScript modules; React single-page application; Vue single-page application | Django templates keep session handling and forms in the same deployment for the limited author/reviewer/admin journeys (FR01–FR03, FR06–FR11). Small scripts can update status without a separate frontend build or API client. React and Vue offer reusable interactive components but add a separately maintained client state and build pipeline for this scope. | A validated pilot workflow needs complex live interaction, or a demonstrated team skill advantage makes a component frontend cheaper to deliver and test. |
| Binary files | Private local filesystem; private object storage with an S3-compatible API; database binary columns | Private object storage is the target in [the architecture](07_architecture.md). It separates file bytes from transactional metadata and permits explicit object keys, hashes and backup manifests (FR04–FR05, NFR04, NFR07). Local disk is simpler on one server but makes restore and scaling depend on that host. Database binaries would couple large transfers and database backup size. In every option, the application authorises downloads and validates files before publication. | The pilot cannot provide an approved private object store; then use a private, backed-up filesystem and verify the same access and restore tests. |
| Hosting | One controlled virtual machine with Docker Compose; a managed application/database/object-storage service; Kubernetes | A single controlled VM with Compose is the initial deployment hypothesis for a small department, with database and file backups kept separately from the VM. It has fewer moving parts than Kubernetes; managed services can reduce operations but may conflict with data-location, procurement or access rules. No deployment has been performed. | The pilot's IT/security policy, restore drill or availability target cannot be met on one VM; choose an approved managed or clustered environment after a measured trial. |

The interface comparison is consistent with Django's [template support](https://docs.djangoproject.com/en/5.2/intro/overview/), [React's component model](https://react.dev/learn) and [Vue's application modes](https://vuejs.org/guide/introduction). The file comparison uses Django's [storage abstraction](https://docs.djangoproject.com/en/5.2/ref/files/storage/) and [S3's documented object versioning](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html) as reference capabilities; S3 versioning does **not** replace the application's immutable `DocumentVersion` records. Docker documents [single-server Compose deployment](https://docs.docker.com/compose/how-tos/production/). Product availability and legal suitability for the eventual pilot are still unverified.

## Decision checks before implementation

| Check | Evidence required | Status at first pre-defense |
|---|---|---|
| Requirements fit and security | Demonstrate object-level access denial, frozen-version decisions, file quarantine and restore against FR02, FR04, FR06–FR08, NFR01–NFR04 and NFR07. | Designed; server checks and restore drill pending. |
| Maintainability and testing | Implement a small vertical slice and run an API test, a browser journey and a fresh-checkout setup. | Browser prototype exists; backend slice pending. |
| Team skills and delivery effort | Each student records the stack areas they can maintain and the time spent on a short spike. | Not measured; learning-effort scores above are estimates. |
| Licences, hosting and data policy | Check licences of the exact selected packages and services, pilot infrastructure permissions, data location, backup ownership and cost. | Not checked for a selected pilot; no production licence or hosting approval is claimed. |
| Team review | Record each student's actual review or requested changes in the task-linked pull request before merge. | Must be evidenced by GitHub; this document alone is not review evidence. |
