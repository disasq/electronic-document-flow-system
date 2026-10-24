# Project management and risks

## Responsibilities and review
The following future allocation remains a proposal for team confirmation. Qazybai Ali is assigned workflow and backend design, server policy, database consistency and integration tests. Dias Saqyp reports that he personally conducted the ten Astana interviews; he is assigned UX, prototype refinement, comparisons and usability study preparation. Both students should review the literature, requirements and architecture. These role descriptions alone do not prove who drafted each artifact. Each student must use their own identifiable account and review the other's substantial changes. Supervisor Хаймульдин Асқар Ғазизұлы reviews scope, requirements, architecture and evaluation at agreed checkpoints.

GitHub records separate accounts in the repository history, and `Al1GaTorr` submitted approvals on PRs #4–#6 before their merges; none of those reviews has written or inline comments. Students should explain their own actual work, and subsequent substantive PRs need review before merge. No backdated history or invented reviews form part of the submission.

## Milestones
| Date | Deliverable | Owner and dependency | Exit condition |
| 12–19 October 2026 | User conversations | Dias (user-reported) | Ten summaries supplied; five selected for the internal scope |
| 22 October 2026 | Analysis, diagrams and prototype package | Preparation branch | Package committed; model checks executed |
| 23 October 2026 | Initial package merged as PR #1 | Repository history | Merge recorded; GitHub shows no submitted peer review |
| 23 October 2026 | Audit corrections merged as PR #2 | Repository history | Merge recorded; GitHub shows no submitted peer review |
| 24 October 2026 | Evaluation materials and presentation merged as PR #3 | Repository history | Merge recorded; GitHub shows no submitted peer review |
| 24 October 2026 | Repository cleanup merged as PR #4 | GitHub records | `Al1GaTorr` submitted an approval before merge; no written review comments or resulting review revisions are recorded |
| 24 October 2026 | First pre-defense readiness package merged as PR #5 | GitHub records | `Al1GaTorr` approved at 08:26:04 UTC before merge at 08:26:13 UTC; CI passed; no written review comments or resulting review revisions are recorded |
| 24 October 2026 | Status and report update merged as PR #6 | GitHub records | `Al1GaTorr` approved before merge; no written review comments or resulting revisions are recorded |
| 24 October 2026 | EDFS-1 through EDFS-11 marked Done in YouTrack | Dias, after first-stage acceptance check | Each task shows Done; actual feedback summary is recorded in EDFS-11 |
| 24 October 2026 | Supervisor review and submission | Dias, reporting on behalf of the team | Dias reports that the supervisor reviewed GitHub and YouTrack and allowed form submission; Microsoft Forms confirmed receipt |
| 24 October 2026 | Submitted source snapshot | Both | `prob-period-1` and `pre-defense-1` identify commit `712361181c6aa873a35ea70daf4d091fc9bd8390`; limitations are disclosed |
| After first pre-defense | Authenticated vertical slice | Ali, approved baseline | End-to-end backend test of creation through approval |
| Later agreed checkpoint | Usability and load evaluation | Dias and Ali | Raw anonymised results and reproducible conditions |

The past rows state what the available evidence supports. Dias reported the supervisor's review and clearance; no specific corrections were relayed. Maintain the same repository through later submissions. Links and actual remote state are recorded in [the status record](../management/online_status.md).

## Risk register
| Risk | Likelihood and impact | Owner | Mitigation and trigger |
| Interview summaries do not establish one pilot policy | High and high | Dias | Validate selected document types and stage order with a pilot organisation; retain anonymised source/consent records privately |
| Scope exceeds a two-person project | High and high | Ali | Keep the current one-reviewer prototype explicit; decide sequential route scope with supervisor; defer OCR and signatures |
| Existing tools already satisfy the need | Medium and high | Both | Run configuration spike and discuss revised contribution |
| Wrong-version or duplicate decision | Medium and high | Ali | Immutable review version, row locks, revision tokens and concurrent tests |
| Unsafe binary upload or access leak | Medium and high | Ali | Quarantine, policy checks and negative endpoint matrix before real data |
| Browser prototype mistaken for production | Medium and high | Both | Visible demo notice and explicit implementation status |
| Detailed supervisor decisions unavailable | Medium and medium | Both | Record any later technical comments and resulting scope decisions at the next checkpoint |
| Lost records after storage failure | Medium and high | Ali | Matched DB and object backup, restore rehearsal and hash checks |
| Git history does not fully demonstrate individual work or review-driven revisions | High and high | Both | Trace actual student commits and PRs #4–#6 approvals; explain unreviewed PRs #1–#3, obtain real comments and address them on later substantive work |

## Git and YouTrack workflow
Use the YouTrack project linked in the README as the single backlog. Each task needs an actual student assignee, priority, expected artifact, acceptance criteria and due date. The [task-to-artifact map](../management/task_artifact_map.csv) is a dated snapshot for traceability, not a second task list. EDFS-3 and EDFS-10 ownership was reconciled with their descriptions; all eleven first-stage tasks are marked Done. The supervisor clearance reported by Dias and the form receipt are recorded in EDFS-11.

Use task IDs in branch names such as EDFS-12-approval-policy and in commit or PR descriptions. Add the resulting commit or PR link back to the task. For future work, submit coherent changes through PRs and review them before merge; the main history contains three unreviewed merges followed by reviewed PRs #4–#6. Documentation and diagrams require review too. The repository includes PR and issue templates, a CI workflow and an ignore file. Do not commit passwords, API keys, real participant notes or runtime data.

The repository is public, while live YouTrack tasks require an authorized account; the submitted form includes board and task screenshots. PRs #1, #2 and #3 were merged without submitted reviews; do not retroactively call them reviewed. PRs #4–#6 have submitted approvals before merge, but no review comments or review-driven revisions. The university requires another student to review each substantive PR before merge. Review any further substantive changes before merging them. Both submission tags identify the reviewed source commit and should remain stable. Later stages use `pre-defense-2` and `final-pre-defense`.
