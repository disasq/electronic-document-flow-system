# Requirements specification

## Baseline and priorities
Version 0.3 incorporates the Astana conversations reported by Dias Saqyp on 12–19 October 2026 [I01–I10](02_relevance.md). For the first pre-defense, this is an **initial, testable specification**, not a claim that a pilot organisation or supervisor has approved it. Must requirements define the mandatory later implementation for the **single-reviewer demonstration slice**; Should requirements may be deferred with a recorded decision. Prototype coverage is stated explicitly. Neither client-side role simulation nor passing local model tests proves server security. The observed multi-stage routes are not covered by FR06–FR08 and require an explicit scope decision below.

The first-stage deliverable is the requirement definition and acceptance method: 15 functional requirements and 8 quality requirements, with priorities, tests and component ownership. Successful implementation, security, usability and operational targets require the later backend and study described in [the verification plan](09_verification.md). The single-reviewer route is a **limited demonstration scenario** only. It must not be presented as completing the interviewed organisations' legal, technical or executive approval chains.

## Functional requirements
| ID and priority | Requirement | Acceptance criterion | Test and component | Current coverage |
|---|---|---|---|---|
| FR01 Must | Authenticate and terminate a session | Given valid credentials, create a session. Invalid credentials reveal no account detail. Logout invalidates the session. | T01 Identity | Planned backend |
| FR02 Must | Enforce document access | An unrelated employee cannot list, read, download, search or export another document. An assigned reviewer sees it after submission. Administrator can inspect records. | T02 Policy | Prototype simulation |
| FR03 Must | Create an internal document | An employee saves a title of 1–120 characters, type, content and optional deadline. Blank title or content fails without a record. | T03 Documents | Prototype text |
| FR04 Must | Upload a validated binary version | Accept PDF or DOCX up to 20 MiB only after extension, content, size and malware checks. Invalid or unscanned files cannot be downloaded. | T04 Storage | Planned backend |
| FR05 Must | Keep version snapshots | Saving a revision creates the next version and preserves older content. Only the owner can edit Draft or Changes requested. | T05 Documents | Prototype text |
| FR06 Must, limited slice | Submit a frozen version | The owner assigns a different active reviewer and creates one pending review tied to the current version. Submitted content is locked. This one-stage acceptance does not mean an observed multi-stage route is complete. | T06 Workflow | Prototype |
| FR07 Must, limited slice | Decide an assigned review | Only the assigned reviewer can approve or return an In review document. Return requires a nonblank reason. Duplicate decisions fail. A complete organisational approval may require additional stages. | T07 Workflow | Prototype |
| FR08 Must | Revise and resubmit | Returned content remains in history. The owner must save a new version before resubmission. A new decision references that version. | T08 Workflow | Prototype |
| FR09 Must | Search within access scope | Case-insensitive title, ID and type search plus status filter returns only visible documents. Search does not disclose hidden counts. | T09 Search and Policy | Prototype |
| FR10 Must | Record and inspect activity | Each successful mutation records actor, time, document, version and action. Return records its reason. Protected export matches visible history. | T10 Audit | Prototype simulation |
| FR11 Must | Archive an approved record | Only administrator can archive Approved. Archived content and decisions are read-only. No hard delete exists in the initial scope. | T11 Records | Prototype |
| FR12 Must | Reject stale updates | A stale revision token receives 409 in the backend, with no mutation or extra event. A decision cannot refer to a changed version. | T12 Workflow and DB | Model simulation |
| FR13 Should | Notify the next participant | Successful submission or decision creates an in-app event. Planned delivery retries are deduplicated. Notification failure cannot lose the decision. | T13 Outbox | Planned backend |
| FR14 Must | Administer accounts and roles | Administrator can activate or deactivate users and assign approved roles. Deactivated users lose sessions and cannot receive new reviews. | T14 Identity | Planned backend |
| FR15 Should | Export a document and its context | An authorised user downloads a current binary version or text prototype and exports history including version and decision identity. | T15 Documents and Audit | Prototype text and JSON |

## Evidence trace and scope decision

| Evidence | Requirements informed | Status of inference |
|---|---|---|
| I01, I07: older specifications used after cross-channel changes | FR05, FR06, FR08, FR10, FR12 | Version binding is a justified design direction; incident frequency is unmeasured. |
| I01, I03, I10: manual status checks or missing prior decision history | FR09, FR10, FR13 | Status and history visibility need representative task testing; speed gain is unmeasured. |
| I04, I07, I10: bypassed legal/technical review or multi-stage route | Candidate CR01, FR06–FR08 | The current single-reviewer model is insufficient for these full workflows. |
| I04: draft with internal comments sent externally | Candidate CR02, FR05, FR11 | External delivery remains outside scope; a release rule needs policy review. |
| S04, S07 and the project's security design | FR01, FR02, FR14, NFR01 | Engineering requirements; no claim that interviewees specified the exact roles or security mechanism. |

| Candidate | Proposed acceptance criterion | Decision and test status |
|---|---|---|
| CR01 Sequential required reviewers | For a document type configured with two ordered stages, stage 2 cannot decide before stage 1, and the document cannot be marked finally approved until both approved the same frozen version. A return requires a new version and restarts the required route according to agreed policy. | Supported as a need by I01/I04/I07/I10; **not implemented** and not in the current MVP commitment. Confirm route and priority with pilot users and supervisor; then specify tests. |
| CR02 Release check for outgoing documents | A draft or returned version cannot be marked ready for external release; any release action records who released which approved version. | Motivated by I04; **not implemented**. External sending and signatures remain excluded until scope approval. |

The five selected interviews were across different organisations, not a single pilot. Their reports justify investigation but cannot set one organisation's approval policy. **Release decision:** if the chosen pilot requires sequential sign-off, CR01 must become a Must requirement before claiming that the later system supports that process. The alternative is an explicitly documented, genuinely single-stage pilot process agreed with its users and supervisor. Record the route, CR01/CR02 decision, owner and date before claiming a validated implementation baseline. The absence of that decision does not prevent review of this first-stage specification, but it prevents a claim of validated pilot scope.

## Non functional requirements
| ID and priority | Quality | Acceptance criterion | Tests |
|---|---|---|---|
| NFR01 Must | Server enforced security | For each protected backend endpoint, unauthenticated requests fail and unrelated users fail. Test tampered IDs and exports. HTTPS and secure cookies required for deployment. | T02,T16 |
| NFR02 Must | Atomic decisions | Across 20 simultaneous attempts to decide one pending review, exactly one decision and corresponding audit event commit. Other requests return a conflict. | T12,T17 |
| NFR03 Must | Response time | With 30 concurrent sessions and 10000 metadata records on 2 vCPU and 4 GiB RAM, 95th percentile metadata search and command latency is at most 2 seconds after warm-up. File transfer excluded. | T18 |
| NFR04 Must | Recoverability | Daily encrypted backup with a 24-hour recovery point target and a 4-hour recovery time target. Restore database and file objects in a rehearsal and verify hashes and references. | T19 |
| NFR05 Must | Usability and accessibility | At least 90 percent of the defined critical tasks succeed without moderator intervention in the exploratory study. Core controls support keyboard access, labelled fields and visible focus at 390 and 1366 pixel widths. | T20,T21 |
| NFR06 Must | Audit protection | Application users cannot edit or delete audit events through any API. Restrict database permissions and verify mutation rejection. Browser demo history is mutable by its local owner. | T10,T16 |
| NFR07 Must | Input and file safety | Escape user-controlled text, check CSRF for session mutations and quarantine all uploaded binaries until validated. Reject scripts, oversized files and misleading types. | T04,T16 |
| NFR08 Should | Maintainability and deployment | A clean checkout with documented configuration can start and run automated tests. CI checks forbidden transitions and protected-object scenarios. No credentials or real participant data are tracked. | T22 |

## Business rules and permissions
An employee can create documents and read their own records. The owner can edit and submit only Draft or Changes requested. A reviewer can read assigned submitted records and decide only a pending review. Administrator can manage accounts, inspect records and archive Approved, but cannot approve on behalf of the reviewer. No role may edit approved or archived content in place. All backend checks must use authenticated identity, never a client-provided role field.

The matrix states the intended backend policy for FR02, FR05–FR11, FR14 and FR15. `Yes` still depends on the document state and guards below; `No` means the action is denied without a successful mutation or success audit event. A rejected attempt may still be logged separately for security monitoring. A reviewer is considered *assigned* only for the relevant submitted review. The browser prototype illustrates this policy with a persona picker; it does not enforce it against a real authenticated user.

| Action | Owner employee | Assigned reviewer | Unrelated employee | Administrator | Anonymous |
|---|---|---|---|---|---|
| Create an internal draft | Yes | No | Yes, own draft | No | No |
| List, search, read or download a document | Yes | Yes, assigned document | No | Yes | No |
| Inspect or export its decision history | Yes | Yes, assigned document | No | Yes | No |
| Edit Draft or Changes requested | Yes | No | No | No | No |
| Submit or resubmit a version | Yes | No | No | No | No |
| Approve or return a pending review | No | Yes | No | No | No |
| Archive an Approved document | No | No | No | Yes | No |
| Manage users and roles | No | No | No | Yes | No |

The `unrelated employee` column permits creation of that employee's **own** draft; it never grants access to someone else's document. A user who holds more than one role is evaluated against the action and document relationship, not merely the role name. The assigned reviewer cannot approve their own document under FR06. Hidden documents and their counts must not leak through lists, search, direct IDs or exports (FR02, FR09).

| Current state | Command and authorised actor | Next state | Guard |
|---|---|---|---|
| Draft | Save by owner | Draft | Valid content, new version |
| Draft | Submit by owner | In review | Active different reviewer, frozen version |
| In review | Return by assigned reviewer | Changes requested | Reason required |
| Changes requested | Save by owner | Changes requested | New immutable version |
| Changes requested | Resubmit by owner | In review | Version newer than returned review |
| In review | Approve by assigned reviewer | Approved | Pending review and matching version |
| Approved | Archive by administrator | Archived | Read-only content preserved |
| Any other pair | Any actor | No change | Reject command and do not emit success event |

A review cycle is a distinct record with an immutable version ID, reviewer, submission time, decision and decision time. The database permits at most one pending review per document. A return starts a new cycle only after revision. Dates are stored in UTC and presented in the department timezone, provisionally Asia/Almaty. Retention duration and delegation on reviewer absence remain open policy questions.

## Deadlines and notifications
FR03's optional deadline is document metadata shown in the list and detail view. It does not change document state, block approval or create an automatic escalation. The prototype shows the entered date; the later backend must validate and store it consistently with the agreed department timezone. Reminder cadence, delegation and overdue escalation require a separate policy decision with the pilot; none is claimed as implemented.

FR13 is a **Should** requirement for a later implementation: submission or decision would create an in-app event for the next participant, with deduplicated delivery retries. The browser prototype's visible status and history are not a notification service, and no email worker is delivered. Users can still find pending work through FR09 and the task list if FR13 is deferred. An approved decision remains committed even if a notification delivery fails.
