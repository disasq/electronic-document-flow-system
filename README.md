# Development of an Electronic Document Flow System

Diploma project at Astana IT University.

## Topic
Development of an Electronic Document Flow System — a web application for managing the lifecycle of internal organizational documents.

## Problem and evidence
Documents exchanged through paper, email and messengers can be difficult to track: users may lose the current version, approval status, deadlines and responsibility. Dias Saqyp reports that he conducted ten conversations with users in Astana on 12–19 October 2026. Five closely match the internal-document scope; their anonymised observations, limitations and links to requirements are in [the relevance analysis](docs/02_relevance.md) and [evidence log](management/evidence_log.csv). These accounts are interviewer-reported, not measured prevalence or evidence of a signed pilot agreement.

## Goal
Design, implement and evaluate a prototype that supports document registration, routing, approval and retrieval with transparent status and access control. Final requirements and scope will be refined after pilot-process and supervisor review.

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
| Қазыбай Әли Сәтбекұлы | SE-2424 | 240917@astanait.edu.kz | Proposal and architecture review; backend/API/database planning |
| Сақып Диас Мұратұлы | SE-2417 | 241895@astanait.edu.kz | Conducted the ten reported interviews; literature, system comparison, prototype and evaluation planning |

Supervisor: **Хаймульдин Асқар Ғазизұлы**.

Technology selection, requirements, evaluation, repository maintenance and supervisor-review preparation are shared responsibilities.

## First pre-defense milestone
Deadline: **24 October 2026** (Asia/Almaty).

Planned outputs: an interview-grounded problem statement, proposal and scope, at least 12 references including 8 scientific sources, comparison of 3–5 systems using 6–10 criteria, technology decision, acceptance criteria, architecture with editable diagrams, key-scenario prototype, evaluation plan and traceable participant contributions.

All eleven YouTrack tasks are marked **Done**. Dias reports that the supervisor reviewed GitHub and YouTrack and allowed the team to submit the form on 24 October 2026; no specific corrections were relayed. The submitted source snapshot is commit `712361181c6aa873a35ea70daf4d091fc9bd8390`, tagged [`prob-period-1`](https://github.com/disasq/electronic-document-flow-system/releases/tag/prob-period-1) for the form and [`pre-defense-1`](https://github.com/disasq/electronic-document-flow-system/releases/tag/pre-defense-1) for the university brief. PRs #1–#3 had no submitted peer reviews. [PR #4](https://github.com/disasq/electronic-document-flow-system/pull/4), [PR #5](https://github.com/disasq/electronic-document-flow-system/pull/5) and [PR #6](https://github.com/disasq/electronic-document-flow-system/pull/6) received `Al1GaTorr` approvals before merge, without written review comments or documented review-driven revisions. User evaluation belongs to the later stage.

## Repository organization
- `docs/` — proposal, user evidence, reviews, requirements, architecture, evaluation plan and report.
- `diagrams/` — editable draw.io sources with SVG and PNG exports.
- `prototype/` — runnable browser demonstration using synthetic text documents.
- `tests/` — executable prototype model checks.
- `config/` — proposed database schema and example configuration.
- `management/` — [task and evidence records](management/README.md), speaking guide, and explicitly unfilled supervisor/submission forms; live task status belongs in YouTrack.
- `evidence/` — source register, prototype captures, YouTrack status capture and actual verification record.

`frontend/` and `backend/` will be added when there is meaningful application code; neither is claimed to exist now.

## Contribution workflow
Use individual accounts, task-linked branches and commits, and pull requests with peer review. Record actual contributions through commits, PRs and YouTrack issues. Do not fabricate authorship or mark unfinished work as complete.

This repository is public. Do not commit credentials, real confidential documents or identifiable interview data; use synthetic/anonymized examples.

## Project tracking
[YouTrack project EDFS](https://saqypdias.youtrack.cloud/projects/EDFS) · [Task list](https://saqypdias.youtrack.cloud/issues/EDFS)

The first pre-defense plan is tracked in EDFS-1 through EDFS-11. Use the relevant issue ID in branch names, commit messages and pull requests. Actual assignees and state are maintained in YouTrack; [the current status](management/online_status.md) records the latest verified snapshot. Live YouTrack tasks require an authorized account; the submitted form includes a PDF of the board and task evidence.


## Current analysis and prototype

The initial preparation package was merged through [PR #1](https://github.com/disasq/electronic-document-flow-system/pull/1) on 23 October 2026. The correction package followed through [PR #2](https://github.com/disasq/electronic-document-flow-system/pull/2) on 23 October. [PR #3](https://github.com/disasq/electronic-document-flow-system/pull/3), with the portable presentation, evaluation templates and prototype fix, was merged on 24 October. GitHub lists no submitted peer review for those three PRs. [PR #4](https://github.com/disasq/electronic-document-flow-system/pull/4) streamlined the repository and required diagrams. [PR #5](https://github.com/disasq/electronic-document-flow-system/pull/5) reconciled the literature, requirements, prototype, report and task evidence. `Al1GaTorr` approved each before merge; neither approval has written or inline comments, so no review-driven revision is claimed. The current literature register has 32 sources including 12 scientific publications; the package also compares five system families on eight criteria, records three key technology decisions, specifies 15 functional and eight non-functional requirements, and includes editable diagrams and a browser prototype. See [the report](docs/EDFS_Report.docx) and [readiness checklist](docs/11_supervision_readiness.md).

The target implementation is a modular Django application, PostgreSQL and private file storage using HTTP/JSON. The current demonstration is plain HTML/CSS/JavaScript and browser storage, with one reviewer per submission. Several interviews describe sequential review stages; the next implementation scope needs a documented decision. Authentication, server authorization, binary file scanning, shared persistence and production recovery remain planned.

### Run the prototype

Open `prototype/index.html` in a modern browser, or serve the repository locally:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/prototype/`. The prototype needs no package installation. Use only synthetic data. Demo personas simulate employee, reviewer and administrator rules; they are not real login accounts. Browser storage is local to the current browser and origin.

The repository copy is the portable demonstration for reviewers.

### Run meaningful model checks

With Node.js 20 or later:

```sh
npm test
```

The 15 checks cover forbidden access, frozen versions, returned revisions, stale commands, duplicate decisions and archive rules. They test the prototype model, not production backend security or database concurrency. See [actual verification and limitations](evidence/verification.md).

### Artifact map

| Location | Contents |
| --- | --- |
| `docs/01_proposal.md` and `02_relevance.md` | Proposal, scope, interview evidence and explicit limits |
| `docs/03_literature.md`, `docs/research/` and `12_references.md` | Critical scientific analysis, source search record and references |
| `docs/04_existing_systems.md` and `05_technology.md` | Product and technology comparisons |
| `docs/06_requirements.md` and `requirements.json` | Acceptance criteria and traceability |
| `docs/07_architecture.md`, `diagrams/`, `config/schema.sql` | Proposed architecture, editable .drawio files and SVG/PNG exports |
| `prototype/`, `tests/` | Interactive demonstration and executable model tests |
| `docs/09_verification.md`, `docs/evaluation/` | Baseline, protocol, test matrix, empty result templates and later testing plan |
| `management/` | Interview evidence, task-to-artifact map, current status, defense script and pending review/submission records |
| `evidence/source_register.json` | Checked source metadata, access scope and use |

A portable 12-slide first pre-defense deck is in [`docs/EDFS_Predefense_1_2026-10-24.pptx`](docs/EDFS_Predefense_1_2026-10-24.pptx). The defense script is in `management/defense_script.md`.

### Next stage

The selected pilot's document types and approval route still need validation for implementation. PRs #1–#3 remain historically unreviewed; later approvals do not retroactively review them. Future substantive changes should receive another student's review before merge. The source tags identify the submitted commit and should stay stable. The authoritative first-stage tasks are EDFS-1 through EDFS-11 in YouTrack; the repository retains a [task-to-artifact map](management/task_artifact_map.csv), not a second local backlog.
