# Evidence of relevance

## Source and method

Dias Saqyp reports that he personally conducted ten conversations with document-flow users in Astana between 12 and 19 October 2026. For each conversation, his supplied notes cover the current steps, a bottleneck, a concrete incident and the way the participant checks status. He reports permission to use anonymised quotations from each participant; the organisation associated with conversation I04 must not be identified. The supplied material is a set of concise notes, not a verbatim transcript or an independently checked organisational record. Original notes and consent records, if retained, should remain outside the public repository.

Five conversations most directly related to the project's proposed **internal document registration and approval** scope are selected for the first pre-defense. The other five are retained as contextual input and are not treated as evidence that the system will replace external signing, courier delivery, HR platforms or tender portals.

| Code | Reported date and format | Anonymised role | Relevant observation in the supplied notes |
|---|---|---|---|
| I01 | 12 October 2026, in person | Chief accountant, medium-sized business | The current process passes a document through legal and executive review. A changed specification sent through a different channel was missed, and status is checked through messages, calls or visits. |
| I03 | 13 October 2026, in person | Records clerk, large organisation | Paper or emailed internal records are registered in a spreadsheet and taken to the director. The clerk manually records handoffs; documents may wait at the executive stage. |
| I04 | 14 October 2026, Telegram and email | Contract lawyer | Non-standard terms can be agreed outside legal review. A draft containing internal comments was once sent for external signature. No organisation name or identifying details are included. |
| I07 | 16 October 2026, Slack | IT director | A purchasing note follows an initiator → IT → finance → chief executive path. Missing budget detail causes repeated email exchanges; an obsolete specification was once used. Jira Service Desk already shows the current assignee in this process. |
| I10 | 19 October 2026, in person | Chief financial officer | The approver may receive a document without a visible history of earlier approvals. An act was signed before a technical concern reached the approver. |

The remaining notes cover a project manager (I02, 13 October, Google Meet), sales head (I05, 15 October, Zoom), HR business partner (I06, 15 October, Google Meet), regional branch manager (I08, 17 October, phone), and tender specialist (I09, 18 October, Telegram); all dates are in 2026. They reinforce some version and status concerns but include external-client negotiation, employment papers, courier originals and tender submission, which lie outside the initial system boundary. They should inform later validation or integration decisions rather than silently expand the first-stage product. All ten accounts are considered in the thematic analysis, while I01/I03/I04/I07/I10 form the in-scope evidence set.

## Current-workflow trace for the five selected roles

| Conversation | Reported handoff or status method | Failure described by participant | Bounded design response |
|---|---|---|---|
| I01 | Office files and messages across channels; status is checked by chat, call or visit. | Accounting used an older specification after a revised file arrived through Telegram. | Keep a version bound to each submitted review and make the current assignee visible; no claim to replace financial controls. |
| I03 | A spreadsheet records paper handoffs; the director's paper queue can wait during travel. | A signed order did not reach the next department and had to be reconstructed. | Show handoffs and an event trail for internal records; physical-original custody remains outside the prototype. |
| I04 | Server folders labelled by review state are used to infer progress. | A draft with internal comments went to a counterparty before legal clearance. | Distinguish draft from approved versions and record legal-review prerequisites as candidate CR01/CR02; external delivery is excluded. |
| I07 | Jira Service Desk already shows the current assignee for a purchasing request. | Licences were bought from an outdated estimate despite an updated specification. | Test whether frozen versions and ordered approvals add value over existing Jira configuration; do not present basic assignee visibility as a new capability here. |
| I10 | Documents reach the finance approver by hand without a visible prior-decision chain. | An act was signed before a technical concern reached that approver. | Show earlier decisions and investigate a required technical-review gate before final approval. |

This table uses the interviewer's supplied summaries and anonymised quotations, with dates and formats recorded above and in [the evidence log](../management/evidence_log.csv). It is traceability evidence for the proposal, not validation by one selected client. A reviewer can check each proposed requirement against the reported incident and the excluded process boundary without access to identifying notes.

## Findings connected to requirements

| Finding | Direct evidence | Implication for the current requirements baseline | Verification to plan |
|---|---|---|---|
| A single identifiable current version matters when files move between channels. | I01 and I07 describe action taken using an old specification. | Keep immutable versions (FR05) and bind a submitted/approved decision to one frozen version (FR06–FR08). | Ask a representative to locate the reviewed version after revision; test that earlier content stays available but cannot be mistaken for the current submitted version. |
| Users need the current owner, state and prior decisions in one place. | I01 and I03 use manual status checks; I10 lacked prior approval history. I07 already has an assignee view in Jira. | Show the current state/assignee and decision history; compare against each user's current workflow, including Jira where applicable. | Run a timed status-and-history lookup using representative scenarios. No speed improvement is claimed yet. |
| Required approval stages and input completeness vary by document type. | I04 describes bypassed legal review; I07 describes an IT→finance→executive route and missing budget details; I10 describes a missing technical acceptance signal. | Current FR06 permits exactly **one** assigned reviewer. This does not represent the observed multi-stage routes. Record the one-reviewer prototype as a limited first slice, then specify required stage order and document-type checklists for the intended implementation, or explicitly narrow the product scope with supervisor agreement. | Test a route with at least two required approvers and a missing prerequisite; prevent final approval until all mandatory stages and fields are complete. This scenario is planned, not implemented. |
| External release of drafts is risky. | I04 reports a draft with internal comments sent outside the organisation. | Mark drafts visibly and define a release check tied to the approved version. External delivery and legally binding signature remain outside the initial scope. | Demonstrate how an internal user identifies whether a version is approved for release; a future release feature must refuse a draft. |

These are observations reported in the notes, not measured frequencies or proof that all Astana organisations have the same workflow. The individual figures in the notes (for example, 3 days, 24 hours or 5–7 days) are anecdotes, not baseline averages. The HR participant's statement about a labour-law violation is not a legal finding of this project.

## Decisions and open questions

1. **Scope:** The initial product is an internal web system for registration, versioning, assignment, review, status and audit. It does not yet provide legally binding electronic signatures or replace document delivery to external parties. I03's lost-paper case and I04's outgoing-draft case support visibility and release controls only within this boundary.
2. **Architecture and prototype gap:** The existing prototype and FR06 model a single reviewer. The interviews expose realistic sequential approvals. The team should decide, with the supervisor, whether to implement a multi-stage route in the next increment or keep the prototype explicitly limited and state the limitation during pre-defense. Do not describe the route as implemented until the UI, model and tests support it.
3. **Validation still needed:** Retain the original notes and consent records securely outside the public repository if available; ask selected participants to validate the anonymised summaries if feasible. Clarify which document types and policy rules matter for the first pilot. Dias Saqyp has reported consent for anonymised use; do not disclose names, contacts, actual documents or the organisation for I04.
4. **Evaluation:** Use matched tasks against the participants' existing process as a baseline. Candidate tasks are finding the latest approved version, identifying who must act, and checking whether all required reviews occurred. Define timing, success and sample conditions before collecting results; no outcome measurement has been performed.

## Limitation of the evidence

The five selected conversations cover different roles and sectors in one city. This purposive selection provides relevant examples but is not a representative survey. The summaries reflect participant recollection and have not been corroborated with process logs. They establish requirements to investigate and justify a prototype direction; organisation-wide rules, legal compliance and performance improvements need separate checks.
