# Actual verification on 22 October 2026

## Executed prototype checks

Command: `node --test tests/model.test.cjs`. Result: 15 tests, 15 passed, zero failed. Raw output is retained in `model-test-results.txt`. These tests execute a browser prototype model in Node.js. They do not test server authentication, database transactions or production authorization.

## Browser walkthrough

Checked in Chrome against the portable prototype served locally.

| Scenario | Observed result |
| --- | --- |
| Create synthetic text request | New DOC-004, Draft, version 1 and created event |
| Submit to assigned reviewer | In review, current version 1, author editing controls absent |
| Request changes without a reason | Rejected with “Explain the requested changes” |
| Return with a reason | Changes requested and reason preserved in history |
| Resubmit without a revised version | Rejected with “Save a revised version before resubmitting” |
| Save new version and resubmit | Version 2 created and submitted |
| Approve assigned frozen version | Approved version 2; all six events visible |
| Open prior version | Version 1 retained its original synthetic content |
| Search as unrelated employee | No matching document returned |
| Archive as administrator | Archived version 2 in list and exported history |
| Export activity JSON | Actual browser download contains create, submit, return, save, submit, approve and archive with matching versions |
| Mobile layout at 390 by 844 | Page client width 390 and document scroll width 390; document table scrolls inside its container |
| Keyboard focus sample | Tab from New document reached labelled Search documents input |

`browser-activity-export.json` is the actual exported synthetic history. `prototype-overview.png`, `prototype-approved.png`, `prototype-archived.png` and `prototype-mobile.png` record the observed interfaces. The exported event names are `created`, `submit`, `return`, `save`, `submit`, `approve`, `archive`.

The browser automation download-event wait timed out after the file downloaded. The result was subsequently verified from the actual download and the visible Archived row. This did not indicate an application failure.

## Documents and presentation

The report was rendered to 23 pages and every page was inspected for layout. Title style border residue was removed and pagination adjusted to avoid nearly empty continuation pages. The live presentation has 17 editable slides with source notes and was rendered and visually inspected. The three required architecture diagrams have editable .drawio sources and readable SVG and PNG exports. A lifecycle diagram is additional.

## Coverage limits

This delivery does not implement production login, server permissions, binary uploads or malware scanning, shared persistence, notifications, load handling, multi-user atomic decisions, recovery or user outcome measurement. The full keyboard journey and a complete accessibility audit have not been run. These remain planned tests in the report. No interviews or supervisor feedback are claimed.

## Repeatability

Use the README instructions to serve the prototype and run the 15 model checks. Reset demo data returns the original fictional records. Then follow `management/defense_script.md` or the two walkthroughs in `docs/08_prototype.md`. The examples and all browser evidence contain synthetic documents only.

The final YouTrack task overview is retained as `youtrack-tasks.png`. EDFS-10 contains the PR and successful Actions links; its state is In progress. EDFS-1 and EDFS-11 are prioritized Critical, with actual user evidence and supervisor review still outstanding.
