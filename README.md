# Development of an Electronic Document Flow System

Diploma project at Astana IT University.

## Topic
Development of an Electronic Document Flow System — a web application for managing the lifecycle of internal organizational documents.

## Problem to validate
Documents exchanged through paper, email and messengers can be difficult to track: users may lose the current version, approval status, deadlines and responsibility. These are initial hypotheses, to be validated through interviews with 3–5 potential users; no interview results are claimed yet.

## Goal
Design, implement and evaluate a prototype that supports document registration, routing, approval and retrieval with transparent status and access control. Final requirements and scope will be refined after user research and supervisor review.

## Preliminary scope
- Authentication and roles: administrator, document author and reviewer/approver.
- Document creation/registration, metadata, attachments and version history.
- A defined approval route with submit, approve, reject and return-for-revision actions.
- Task lists, deadlines, status tracking and notifications.
- Search/filtering, an archive and an audit trail.
- A web interface, backend API, database, tests and deployment documentation.

Initially outside scope: legally binding digital signatures, government/bank integrations, enterprise-scale migration and a general-purpose workflow designer. Any extension requires an explicit scope decision.

## Team
| Participant | Group | Email | Initial focus |
| --- | --- | --- | --- |
| Қазыбай Әли Сәтбекұлы | SE-2424 | 240917@astanait.edu.kz | Interviews, proposal, architecture; backend/API/database planning |
| Сақып Диас Мұратұлы | SE-2417 | 241895@astanait.edu.kz | Literature, system comparison, prototype; frontend and evaluation planning |

Supervisor: **Хаймульдин Асқар**.

Technology selection, requirements, evaluation, repository maintenance and supervisor-review preparation are shared responsibilities.

## First pre-defense milestone
Deadline: **24 October 2026** (Asia/Almaty).

Planned outputs: validated problem, proposal and scope, at least 12 references including 8 scientific sources, comparison of 3–5 systems using 6–10 criteria, technology decision, acceptance criteria, architecture with editable diagrams, key-scenario prototype, evaluation plan and verifiable participant contributions.

Create the `pre-defense-1` tag only after the deliverables have been reviewed and actual supervisor feedback has been recorded. Interviews, evaluation and supervisor review are pending; this README does not certify their completion.

## Planned repository organization
- `docs/research/` — anonymized interview evidence and literature review.
- `docs/requirements/` — scope, requirements and acceptance criteria.
- `docs/architecture/` — architecture decisions and editable diagram sources.
- `docs/evaluation/` — evaluation protocol and later real results.
- `prototype/` — key-scenario prototype.
- `frontend/`, `backend/`, `tests/` — implementation after technology selection.

These directories are planned and will be added with their first meaningful artifacts.

## Contribution workflow
Use individual accounts, task-linked branches and commits, and pull requests with peer review. Record actual contributions through commits, PRs and YouTrack issues. Do not fabricate authorship or mark unfinished work as complete.

This repository is public. Do not commit credentials, real confidential documents or identifiable interview data; use synthetic/anonymized examples.

## Project tracking
[YouTrack project EDFS](https://saqypdias.youtrack.cloud/projects/EDFS) · [Task list](https://saqypdias.youtrack.cloud/projects/EDFS/issues)

The first pre-defense plan is tracked in EDFS-1 through EDFS-11. Use the relevant issue ID in branch names, commit messages and pull requests. Ali Qazybai now has an active YouTrack account. Actual assignments and state are maintained in YouTrack. EDFS-11 remains open for real supervisor review; prepared artifacts do not certify interviews or approval.


## Prepared analysis and prototype on 22 October 2026

The proposed baseline is available in the preparation branch and its pull request until peer review and merge. It includes 25 sources with 8 scientific publications, 4 existing systems compared on 8 criteria, 3 technology decisions with 3 alternatives each, 15 functional and 8 non-functional requirements, and a browser prototype. See [the report](docs/EDFS_Report.docx) and the [readiness checklist](docs/11_supervision_readiness.md).

The target implementation is a modular Django application, PostgreSQL and private file storage using HTTP/JSON. The current demonstration is plain HTML/CSS/JavaScript and browser storage. Authentication, server authorization, binary file scanning, shared persistence and production recovery remain planned.

### Run the prototype

Open `prototype/index.html` in a modern browser, or serve the repository locally:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/prototype/`. The prototype needs no package installation. Use only synthetic data. Demo personas simulate employee, reviewer and administrator rules; they are not real login accounts. Browser storage is local to the current browser and origin.

[Hosted prototype](https://edfs-diploma-ali-dias-2026.ruby-ant-2224.chatgpt.site) is owner-private. It must not be assumed accessible to the committee. The repository copy runs independently and is the portable demonstration.

### Run meaningful model checks

With Node.js 20 or later:

```sh
npm test
```

The 15 checks cover forbidden access, frozen versions, returned revisions, stale commands, duplicate decisions and archive rules. They test the prototype model, not production backend security or database concurrency. See [actual verification and limitations](evidence/verification.md).

### Artifact map

| Location | Contents |
| --- | --- |
| `docs/01_proposal.md` and `02_relevance.md` | Proposal, scope, assumptions and real-discussion protocol |
| `docs/03_literature.md` and `12_references.md` | Critical scientific analysis and references |
| `docs/04_existing_systems.md` and `05_technology.md` | Product and technology comparisons |
| `docs/06_requirements.md` and `requirements.json` | Acceptance criteria and traceability |
| `docs/07_architecture.md`, `diagrams/`, `config/schema.sql` | Proposed architecture, editable .drawio files and SVG/PNG exports |
| `prototype/`, `tests/` | Interactive demonstration and executable model tests |
| `docs/09_verification.md` | Baseline, metrics, conditions and later testing plan |
| `management/` | Working plan, evidence forms, risk/review materials and defense script |
| `evidence/source_register.json` | Checked source metadata, access scope and use |

The 17-slide presentation is saved as a live artifact in the owner’s Codex/Spaces library, Page ID `page_86b64ace5e188191af352311d45ab359`. Open it from the delivered presentation in Codex. No public sharing link or committee access is claimed. The defense script in `management/defense_script.md` is also available in this repository.

### Remaining evidence before submission

Conduct the real 3–5 discussions or obtain the client agreement, record substantive feedback from Askar Khaimuldin and resulting revisions, and have the other student review this PR. Use actual student accounts for subsequent work. The `pre-defense-1` submission tag must point to the genuinely reviewed commit. No tag or approval is invented by this preparation.

This preparation used an assistant. Assistant commits are labelled as such and do not establish individual student contributions. Existing repository history remains intact. The local `PLAN-` items in `management/backlog.csv` are a suggested extended work plan, not duplicate remote YouTrack issues. The authoritative first-stage tasks are EDFS-1 through EDFS-11.
