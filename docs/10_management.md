# Project management and risks

## Responsibilities and review
The following allocation is a proposal for team confirmation. Qazybai Ali owns workflow and backend design, server policy, database consistency and integration tests. Saqyp Dias owns user discovery coordination, UX, prototype refinement, comparisons and usability study preparation. Both students review the literature, requirements and architecture. Each student must use their own identifiable account and review the other's substantial changes. Askar Khaimuldin reviews scope, requirements, architecture and evaluation at agreed checkpoints.

The package was prepared with assistance. Prepared files and any assistant commits do not establish progressive individual student contributions. Actual student review, edits, pull requests and supervisor feedback must be recorded from this point forward. No backdated history or invented reviews form part of the submission.

## Milestones
| Date | Deliverable | Owner and dependency | Exit condition |
| 19 October 2026 | Initial analysis, diagrams and prototype package | Both, assisted preparation | Internal consistency and executable prototype checks |
| 20 October 2026 | User discovery and client scope | Dias with Ali | 3–5 discussions or substantive client agreement recorded |
| 21 October 2026 | Requirements and architecture revision | Ali with Dias review | Every Must has evidence or explicit agreed assumption |
| 22 October 2026 | Supervisor checkpoint and build versus configure review | Both and supervisor | Real comments logged with decisions and revisions |
| 23 October 2026 | Repository, tasks and rehearsal | Both | Trace task to branch and PR, check access, rehearse demo |
| 24 October 2026 | First pre-defense | Both | Tag reviewed submission, disclose open limitations |
| After first pre-defense | Authenticated vertical slice | Ali, approved baseline | End-to-end backend test of creation through approval |
| Later agreed checkpoint | Usability and load evaluation | Dias and Ali | Raw anonymised results and reproducible conditions |

The future dates are proposed scheduling targets rather than promises from the supervisor. Repository history begins with actual preparation. Maintain the same repository through later submissions. Links and actual remote state are recorded in management/online_status.md.

## Risk register
| Risk | Likelihood and impact | Owner | Mitigation and trigger |
| No accessible user representatives | High and high | Dias | Recruit across all roles immediately; disclose gap if unavailable by 21 October |
| Scope exceeds a two-person project | Medium and high | Ali | Freeze one reviewer route; defer OCR, signatures and parallel routes |
| Existing tools already satisfy the need | Medium and high | Both | Run configuration spike and discuss revised contribution |
| Wrong-version or duplicate decision | Medium and high | Ali | Immutable review version, row locks, revision tokens and concurrent tests |
| Unsafe binary upload or access leak | Medium and high | Ali | Quarantine, policy checks and negative endpoint matrix before real data |
| Browser prototype mistaken for production | Medium and high | Both | Visible demo notice and explicit implementation status |
| Missing supervisor review | High and high | Both | Schedule substantive review with this package and log actual comments |
| Lost records after storage failure | Medium and high | Ali | Matched DB and object backup, restore rehearsal and hash checks |
| Git history does not show individual work | High and high | Both | Own accounts, real task branches and reciprocal PR reviews from now |

## Git and YouTrack workflow
Use the YouTrack project linked in the README. Each task needs an actual assignee, priority, expected artifact, acceptance criteria and due date. The prepared backlog contains these fields. Only mark a task Done when its acceptance criteria have been reviewed. Unknown account mappings remain explicit rather than assigning work to a fictional identity.

Use task IDs in branch names such as EDFS-12-approval-policy and in commit or PR descriptions. Add the resulting commit or PR link back to the task. Keep main as the reviewed baseline and submit coherent changes through PRs. Documentation and diagrams require review too. The repository includes PR and issue templates, a CI workflow and an ignore file. Do not commit passwords, API keys, real participant notes or runtime data.

Before submission, grant the committee and supervisor appropriate access, confirm the repository and YouTrack links, merge reviewed work and create pre-defense-1 at the actual reviewed commit. Do not move submitted tags. Later stages use pre-defense-2 and final-pre-defense. Do not tag an unreviewed package as approved merely because the date has arrived.
