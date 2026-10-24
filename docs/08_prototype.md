# UX and prototype

## Prototype purpose and coverage
The interactive prototype in prototype/index.html can run without a build step. It contains only synthetic data. Demo personas are Alex Morgan, employee; Jordan Lee, reviewer; Taylor Reed, another employee; and Casey Park, administrator. These are fictional users and do not represent interviews or team contributions. The persona picker simulates role boundaries and is deliberately not an authentication mechanism.

Implemented interactions include creation of a text document, metadata search, state filters, version snapshots, frozen review content, return with a reason, mandatory revision before resubmission, version-aware approval, archive and authorised activity export. A text download illustrates export. Browser storage retains the demonstration between reloads on the same origin. The route has **one reviewer**; it cannot represent the multi-stage approvals reported in I01/I04/I07/I10 [see the evidence analysis](02_relevance.md).

### Screen and requirement map

| Screen or state | Demonstrated interaction | Requirement link | Stage-one boundary |
|---|---|---|---|
| Workspace list and filters | Status counts, search by title/ID/type, filtered documents and an empty result | FR02, FR09 | Counts and filtering follow the selected demo persona; no server policy |
| Create dialog | Title, type, optional deadline, text body, required-field feedback and draft creation | FR03 | Binary PDF/DOCX selection and validation are a later implementation task (FR04) |
| Document detail | Current version, owner, reviewer, deadline, next action, editable or locked content, older snapshots | FR05, FR06, FR08 | Text versions in browser storage only |
| Review decision | Reviewer approval or return with a required reason, then author revision and resubmission | FR06–FR08, FR10 | Exactly one reviewer; no sequential route (CR01) |
| Archive and exports | Administrator archives an approved document, activity JSON and text download | FR10, FR11, FR15 | No shared retention service or protected audit database |
| Direct ID access | Open a known ID under different personas; unavailable and forbidden IDs show the same denial text | FR02 | The denial is simulated in the browser, not production authorization |

The proposed production sign-in screen would ask for organisational credentials and provide invalid-credential and logout states (FR01). The proposed upload step would select a PDF/DOCX file, show file name and validation state, and prevent download until server-side checks pass (FR04). These are specified interaction requirements, **not implemented screens or working uploads** in this browser prototype. A first-stage walkthrough must not present the persona picker as a login or the text editor as binary upload.

## Scenario A author and reviewer
1. Select Alex Morgan and create a document with a title, type, deadline and text.
2. Save a new version if needed and inspect the original version snapshot.
3. Assign Jordan Lee and submit. Editing controls disappear while the review is pending.
4. Switch to Jordan Lee, open the submitted document and request changes with a reason. A blank reason must fail.
5. Switch to Alex Morgan. Revise the content, save a new version and resubmit. Resubmission without a new version must fail.
6. Switch to Jordan Lee and approve the frozen version. Inspect the complete activity trail.

## Scenario B isolation and archive
1. Switch to Taylor Reed. Alex's private draft must not appear in search or the list.
2. Enter `DOC-001` in **Open document by ID**. The message must say “Document not available for this demo persona.” An unknown ID gets the same message, without revealing whether a hidden record exists. This is a simulated denial, not a server security result.
3. Search for a nonexistent title and check the empty state, then clear the search.
4. Switch to Casey Park and open an approved record. Archive it and verify read-only content.
5. Export the activity JSON and download the current text. Confirm the event version matches the approved version.

## State and feedback walkthrough

| State to show | Action | Expected visible result |
|---|---|---|
| Draft | Alex opens `DOC-001` | Next-action panel offers version save or reviewer assignment and submission. |
| Review pending | Alex submits to Jordan | Submitted version is named in the next-action panel; editing disappears. |
| Invalid return | Jordan presses **Request changes** without a comment | Inline error requires a reason; no new decision appears. |
| Returned | Jordan provides a reason | Alex sees the returned status and an instruction to save a revised version. |
| Invalid resubmission | Alex resubmits before saving | Inline error requires a new version. |
| Approved or archived | Jordan approves, then Casey archives | Content is read-only, versions and history remain inspectable. |
| No results or denied ID | Search an impossible title or use Taylor with `DOC-001` | A clear empty or unavailable message appears. |

## Interaction design
The document list shows status, version and deadline without opening each record. The detail dialog displays the current author and assigned reviewer, a visible next-action panel, version history and activity in one place. Returned documents remain visibly distinct from drafts. Required form labels, focus outlines, native dialogs and responsive layouts support a keyboard walkthrough and smaller screens. The direct-ID control lets reviewers see the same generic unavailable response for a hidden and an unknown record.

## Limits of this prototype
There is no real login, server authorization, durable shared database, binary upload validation, malware scanner, role administration, notification worker or backup. The browser owner can modify local storage and the apparent audit trail. The revision guard illustrates a stale update rule in one state model; it does not provide transactional isolation across browsers. If another tab changes demo data, this tab blocks writes until reloaded; simultaneous storage writes are still not a production concurrency guarantee. Do not use real or confidential documents.

The screenshots and executed verification record in evidence/ describe what was actually inspected. Production requirements remain planned where the requirements table says so. The next implementation increment should reproduce the same scenarios with server-authenticated identities and PostgreSQL transactions.

No team-member or representative-user feedback on this revision is recorded. A future observation should record the participant, date, tasks, exact problems seen and changes made. A blank feedback template cannot substitute for that evidence.
