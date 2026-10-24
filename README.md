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

Supervisor: **Хаймульдин Асқар**.

Technology selection, requirements, evaluation, repository maintenance and supervisor-review preparation are shared responsibilities.

## First pre-defense milestone
Deadline: **24 October 2026** (Asia/Almaty).

Planned outputs: validated problem, proposal and scope, at least 12 references including 8 scientific sources, comparison of 3–5 systems using 6–10 criteria, technology decision, acceptance criteria, architecture with editable diagrams, key-scenario prototype, evaluation plan and verifiable participant contributions.

Create the `pre-defense-1` tag only on the reviewed version actually submitted. Interview summaries are recorded. PRs #1, #2 and #3 were merged without submitted peer reviews, so the team must record a genuine review on a subsequent substantive PR before its merge. Supervisor feedback and the submission tag remain pending. User evaluation is planned for a later stage.

## Repository organization
- `docs/` — proposal, user evidence, reviews, requirements, architecture, evaluation plan and report.
- `diagrams/` — editable draw.io sources with SVG and PNG exports.
- `prototype/` — runnable browser demonstration using synthetic text documents.
- `tests/` — executable prototype model checks.
- `config/` — proposed database schema and example configuration.
- `management/` — [task and evidence records](management/README.md), speaking guide, and explicitly unfilled supervisor/submission forms; live task status belongs in YouTrack.
- `evidence/` — source register, prototype captures and actual verification record.

`frontend/` and `backend/` will be added when there is meaningful application code; neither is claimed to exist now.

## Contribution workflow
Use individual accounts, task-linked branches and commits, and pull requests with peer review. Record actual contributions through commits, PRs and YouTrack issues. Do not fabricate authorship or mark unfinished work as complete.

This repository is public. Do not commit credentials, real confidential documents or identifiable interview data; use synthetic/anonymized examples.

## Project tracking
[YouTrack project EDFS](https://saqypdias.youtrack.cloud/projects/EDFS) · [Task list](https://saqypdias.youtrack.cloud/issues/EDFS)

The first pre-defense plan is tracked in EDFS-1 through EDFS-11. Use the relevant issue ID in branch names, commit messages and pull requests. Actual assignees and state are maintained in YouTrack; any mismatch with prose in an issue is listed in [the current status](management/online_status.md). EDFS-11 remains open for real supervisor review. Prepared artifacts do not certify supervisor approval.


## Current analysis and prototype

The initial preparation package was merged through [PR #1](https://github.com/disasq/electronic-document-flow-system/pull/1) on 23 October 2026. The correction package followed through [PR #2](https://github.com/disasq/electronic-document-flow-system/pull/2) on 23 October. [PR #3](https://github.com/disasq/electronic-document-flow-system/pull/3), with the portable presentation, evaluation templates and prototype fix, was merged on 24 October. GitHub lists no submitted peer review for these three PRs, so the merges do not establish the required peer approval. The package includes 30 sources with 10 scientific publications, five system families compared on eight criteria, three technology decisions, 15 functional and eight non-functional requirements, editable diagrams and a browser prototype. See [the report](docs/EDFS_Report.docx) and [readiness checklist](docs/11_supervision_readiness.md).

The target implementation is a modular Django application, PostgreSQL and private file storage using HTTP/JSON. The current demonstration is plain HTML/CSS/JavaScript and browser storage, with one reviewer per submission. Several interviews describe sequential review stages; the next implementation scope needs a documented decision. Authentication, server authorization, binary file scanning, shared persistence and production recovery remain planned.

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
| `docs/01_proposal.md` and `02_relevance.md` | Proposal, scope, interview evidence and explicit limits |
| `docs/03_literature.md` and `12_references.md` | Critical scientific analysis and references |
| `docs/04_existing_systems.md` and `05_technology.md` | Product and technology comparisons |
| `docs/06_requirements.md` and `requirements.json` | Acceptance criteria and traceability |
| `docs/07_architecture.md`, `diagrams/`, `config/schema.sql` | Proposed architecture, editable .drawio files and SVG/PNG exports |
| `prototype/`, `tests/` | Interactive demonstration and executable model tests |
| `docs/09_verification.md`, `docs/evaluation/` | Baseline, protocol, test matrix, empty result templates and later testing plan |
| `management/` | Interview evidence, task-to-artifact map, current status, defense script and pending review/submission records |
| `evidence/source_register.json` | Checked source metadata, access scope and use |

A portable 12-slide first pre-defense draft is in [`docs/EDFS_Predefense_1_2026-10-24.pptx`](docs/EDFS_Predefense_1_2026-10-24.pptx). It was prepared with assistant help from the documented evidence and still needs student and supervisor review. A separate 17-slide presentation exists as a private Codex/Spaces artifact (Page ID `page_86b64ace5e188191af352311d45ab359`); its contents and committee access could not be verified from this account. The defense script is in `management/defense_script.md`.

### Remaining evidence before submission

Confirm the selected pilot's document types and route, record substantive feedback from Askar Khaimuldin and resulting revisions, and obtain a real peer review by the other student on a subsequent substantive PR **before merging it**. A review added after the merge cannot satisfy the university's review-before-merge rule for PRs #1, #2 or #3. Verify committee access to the portable presentation and review its final content. Use actual student accounts for subsequent work. The `pre-defense-1` submission tag must point to the genuinely reviewed submission commit. No tag or approval is claimed by the current package.

This preparation used an assistant. Assistant commits are labelled as such and do not establish individual student contributions. Existing repository history remains intact. The authoritative first-stage tasks are EDFS-1 through EDFS-11 in YouTrack; the repository retains a [task-to-artifact map](management/task_artifact_map.csv), not a second local backlog.
