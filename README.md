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

The first pre-defense plan is tracked in EDFS-1 through EDFS-11. Use the relevant issue ID in branch names, commit messages and pull requests. Ali’s YouTrack invitation is deferred; his intended ownership is documented in EDFS-1, EDFS-2 and EDFS-7 until his account is added. All tasks are initially To do.
