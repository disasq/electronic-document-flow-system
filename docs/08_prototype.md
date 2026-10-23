# UX and prototype

## Prototype purpose and coverage
The interactive prototype in prototype/index.html can run without a build step. It contains only synthetic data. Demo personas are Alex Morgan, employee; Jordan Lee, reviewer; Taylor Reed, another employee; and Casey Park, administrator. These are fictional users and do not represent interviews or team contributions. The persona picker simulates role boundaries and is deliberately not an authentication mechanism.

Implemented interactions include creation of a text document, metadata search, state filters, version snapshots, frozen review content, return with a reason, mandatory revision before resubmission, version-aware approval, archive and authorised activity export. A text download illustrates export. Browser storage retains the demonstration between reloads on the same origin. The route has **one reviewer**; it cannot represent the multi-stage approvals reported in I01/I04/I07/I10 [see the evidence analysis](02_relevance.md).

## Scenario A author and reviewer
1. Select Alex Morgan and create a document with a title, type, deadline and text.
2. Save a new version if needed and inspect the original version snapshot.
3. Assign Jordan Lee and submit. Editing controls disappear while the review is pending.
4. Switch to Jordan Lee, open the submitted document and request changes with a reason. A blank reason must fail.
5. Switch to Alex Morgan. Revise the content, save a new version and resubmit. Resubmission without a new version must fail.
6. Switch to Jordan Lee and approve the frozen version. Inspect the complete activity trail.

## Scenario B isolation and archive
1. Switch to Taylor Reed. Alex's private draft must not appear in search or the list.
2. Switch to Casey Park and open an approved record. Archive it and verify read-only content.
3. Export the activity JSON and download the current text. Confirm the event version matches the approved version.

## Interaction design
The document list shows status, version and deadline without opening each record. The detail dialog displays the current author and assigned reviewer, a visible next action, version history and activity in one place. Returned documents remain visibly distinct from drafts. Required form labels, focus outlines, native dialogs and responsive layouts support a keyboard walkthrough and smaller screens.

## Limits of this prototype
There is no real login, server authorization, durable shared database, binary upload validation, malware scanner, role administration, notification worker or backup. The browser owner can modify local storage and the apparent audit trail. The revision guard illustrates a stale update rule in one state model; it does not provide transactional isolation across browsers. If another tab changes demo data, this tab blocks writes until reloaded; simultaneous storage writes are still not a production concurrency guarantee. Do not use real or confidential documents.

The screenshots and executed verification record in evidence/ describe what was actually inspected. Production requirements remain planned where the requirements table says so. The next implementation increment should reproduce the same scenarios with server-authenticated identities and PostgreSQL transactions.
