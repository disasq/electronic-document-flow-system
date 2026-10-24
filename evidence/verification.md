# Actual verification on 22–23 October 2026

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

The report was rendered to 25 pages on 23 October after the interview, literature and comparison corrections. The changed pages were visually inspected for layout. The live presentation has 17 editable slides with source notes and was rendered and visually inspected in the earlier preparation. Six architecture diagrams were checked in that package. On 24 October, the optional state, ER and sequence diagrams were removed to keep the required set: context, UML use case and draft UML component. Each retained diagram has an editable `.drawio` source and readable SVG and PNG exports. XML validity, image visibility and link resolution were checked; exact rendering by the diagram.net application was not checked.

## Coverage limits

This delivery does not implement production login, server permissions, binary uploads or malware scanning, shared persistence, notifications, load handling, multi-user atomic decisions, recovery or user outcome measurement. The full keyboard journey and a complete accessibility audit have not been run. These remain planned tests in the report. Dias Saqyp reports ten completed interviews; the original private notes, participant consent records and independent process evidence were not inspected. No supervisor feedback is claimed.

## Repeatability

Use the README instructions to serve the prototype and run the 15 model checks. Reset demo data returns the original fictional records. Then follow `management/defense_script.md` or the two walkthroughs in `docs/08_prototype.md`. The examples and all browser evidence contain synthetic documents only.

The earlier YouTrack task overview is retained as `youtrack-tasks.png`. EDFS-10 contains the initial PR and successful Actions links; its state is In progress. EDFS-1 is Critical and now assigned to Dias, with the reported interview evidence recorded but peer review outstanding. EDFS-11 is Major, assigned to Dias and open for actual supervisor review and the reviewed submission tag.

## Additional browser check on 23 October 2026

Two tabs of the locally served prototype shared the same origin. Creating a synthetic draft in the second tab disabled **New document** and **Reset demo data** in the first tab and displayed “Data changed in another tab. Reload this tab before making changes.” Changing the first tab's list filter did not re-enable those actions. The observed state is captured in `prototype-stale-tab.png`. This is a browser demonstration of the stale-tab guard, not a substitute for server-side concurrency control.
