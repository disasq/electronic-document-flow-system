# Project management and risks

## Responsibilities and review
The following future allocation remains a proposal for team confirmation. Qazybai Ali is assigned workflow and backend design, server policy, database consistency and integration tests. Dias Saqyp reports that he personally conducted the ten Astana interviews; he is assigned UX, prototype refinement, comparisons and usability study preparation. Both students should review the literature, requirements and architecture. These role descriptions do not prove who authored the assistant-prepared package. Each student must use their own identifiable account and review the other's substantial changes. Askar Khaimuldin reviews scope, requirements, architecture and evaluation at agreed checkpoints.

The package was prepared with assistance. Prepared files and any assistant commits do not establish progressive individual student contributions. Actual student review, edits, pull requests and supervisor feedback must be recorded from this point forward. No backdated history or invented reviews form part of the submission.

## Milestones
| Date | Deliverable | Owner and dependency | Exit condition |
| 12–19 October 2026 | User conversations | Dias (user-reported) | Ten summaries supplied; five selected for the internal scope |
| 22 October 2026 | Analysis, diagrams and prototype package | Assistant-prepared branch | Package committed; model tests executed; student review still needed |
| 23 October 2026 | Initial package merged as PR #1 | Repository history | Merge recorded; GitHub shows no submitted peer review |
| 23–24 October 2026 | Audit corrections, route decision and review | Both students, supervisor for scope | Current PR reviewed, access checked and open risks stated; real feedback recorded if obtained |
| 24 October 2026 | First pre-defense | Both | Tag reviewed submission, disclose open limitations |
| After first pre-defense | Authenticated vertical slice | Ali, approved baseline | End-to-end backend test of creation through approval |
| Later agreed checkpoint | Usability and load evaluation | Dias and Ali | Raw anonymised results and reproducible conditions |

The past rows state what the available evidence supports; the 23–24 October review is a target, not a claimed completed meeting. Maintain the same repository through later submissions. Links and actual remote state are recorded in management/online_status.md. Several original YouTrack deadlines have passed while their tasks remain open; replan with the owners rather than silently changing historical dates.

## Risk register
| Risk | Likelihood and impact | Owner | Mitigation and trigger |
| Interview summaries do not establish one pilot policy | High and high | Dias | Validate selected document types and stage order with a pilot organisation; retain anonymised source/consent records privately |
| Scope exceeds a two-person project | High and high | Ali | Keep the current one-reviewer prototype explicit; decide sequential route scope with supervisor; defer OCR and signatures |
| Existing tools already satisfy the need | Medium and high | Both | Run configuration spike and discuss revised contribution |
| Wrong-version or duplicate decision | Medium and high | Ali | Immutable review version, row locks, revision tokens and concurrent tests |
| Unsafe binary upload or access leak | Medium and high | Ali | Quarantine, policy checks and negative endpoint matrix before real data |
| Browser prototype mistaken for production | Medium and high | Both | Visible demo notice and explicit implementation status |
| Missing supervisor review | High and high | Both | Schedule substantive review with this package and log actual comments |
| Lost records after storage failure | Medium and high | Ali | Matched DB and object backup, restore rehearsal and hash checks |
| Git history does not show individual work | High and high | Both | Own accounts, real task branches and reciprocal PR reviews from now |

## Git and YouTrack workflow
Use the YouTrack project linked in the README. Each task needs an actual student assignee, priority, expected artifact, acceptance criteria and due date. The prepared backlog contains planned fields; the live issue is authoritative. Reconcile the observed assignee/description conflicts listed in management/online_status.md with the actual work. Only mark a task Done when its acceptance criteria have been reviewed.

Use task IDs in branch names such as EDFS-12-approval-policy and in commit or PR descriptions. Add the resulting commit or PR link back to the task. Keep main as the reviewed baseline and submit coherent changes through PRs. Documentation and diagrams require review too. The repository includes PR and issue templates, a CI workflow and an ignore file. Do not commit passwords, API keys, real participant notes or runtime data.

Before submission, confirm committee and supervisor access to the repository, presentation and YouTrack as applicable, obtain genuine review of the current PR, merge reviewed work and create pre-defense-1 at the actual reviewed submission commit. PR #1 has already been merged without a recorded review; do not retroactively call it reviewed. Do not move submitted tags. Later stages use pre-defense-2 and final-pre-defense. Do not tag an unreviewed package as approved merely because the date has arrived.
