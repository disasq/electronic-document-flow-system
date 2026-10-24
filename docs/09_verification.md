# Verification and evaluation plan

## Verification strategy
Prototype tests verify state transitions and observable interaction. Later backend tests must verify enforcement at the server and persistence boundary. Tests use synthetic documents until explicit permission exists for anonymised organisational examples. Every Must requirement has a test identifier below. A passing prototype test covers only the corresponding simulated behaviour.

The current executable tests are model-level checks. For the implementation stage, classify T01–T15 as unit and API integration checks against server-enforced permissions and persistence, then run the complete create–return–revise–approve–archive journey as an end-to-end browser check. T04 and T16 exercise invalid or hostile input; T02, T07, T11 and T15 exercise denied actions; T05, T08 and T12 cover version and revision integrity; T10 and T16 cover audit evidence. T17–T19 require a deployed backend and cannot be inferred from the browser prototype. Record the build, environment, observed result and evidence for each execution in the [test result template](evaluation/test_results_template.csv).

| Test | Procedure and expected evidence | Requirement |
| T01 | Valid and invalid login, session expiry and logout tests | FR01 |
| T02 | Role and relationship matrix for list, read, search, download and events with tampered IDs | FR02, NFR01 |
| T03 | Create valid content, blank title and oversized text with no side effects on failure | FR03 |
| T04 | Valid PDF and DOCX, size boundary, renamed executable, misleading type, unsafe content and failed scanner | FR04, NFR07 |
| T05 | Save two versions, compare preserved snapshots and reject edits in locked states | FR05 |
| T06 | Submit to active different reviewer and confirm immutable version binding | FR06 |
| T07 | Approve and return, missing reason, unrelated reviewer and duplicate decision | FR07 |
| T08 | Return, revise, resubmit and decide the new version | FR08 |
| T09 | Case-insensitive search and combined status filter under each role | FR09 |
| T10 | Compare events with successful commands and reject event mutation | FR10, NFR06 |
| T11 | Archive approved as administrator and reject other states and actors | FR11 |
| T12 | Submit stale revision and mismatching version with no state or event change | FR12, NFR02 |
| T13 | Simulate delivery outage, retry and duplicate outbox key | FR13 |
| T14 | Role changes, deactivate reviewer and invalidate active sessions | FR14 |
| T15 | Authorised text or binary download and JSON export, then denied counterpart | FR15 |
| T16 | CSRF, stored text injection, anonymous endpoint access and audit mutation checks | NFR01, NFR06, NFR07 |
| T17 | Twenty simultaneous backend decisions with one commit and nineteen conflicts | NFR02 |
| T18 | Ten-minute metadata load run after two-minute warm-up, 30 sessions and 10000 records | NFR03 |
| T19 | Restore matched database and object manifest, compare hashes and measure elapsed time | NFR04 |
| T20 | Paired task study using baseline and implemented system | NFR05 |
| T21 | Keyboard-only core journey and layouts at 390 and 1366 pixels, labels and focus | NFR05 |
| T22 | Fresh checkout setup, configuration validation and CI run | NFR08 |

## Evaluation questions and baseline
The primary question is whether the system helps users identify a document's state and complete a controlled approval journey with less effort. The interview notes describe different current practices: email or chat plus files (I01), an Excel registry (I03), server folders (I04), Jira Service Desk (I07) and hand-carried documents (I10). For a later field study, the baseline must be the **actual process of the selected pilot organisation**, documented before measurement. A prepared shared folder, spreadsheet log and messages can serve as a synthetic rehearsal only; it is not a claim that every participant uses that workflow.

Recruit 8–12 volunteer representatives for an exploratory paired study if available. Record the actual sample and limitations if recruitment is smaller. Provide equal brief training and equivalent synthetic document sets. Counterbalance order: half use baseline first and half use EDFS first. Avoid reusing the exact content across conditions. Use the same device, browser, network, document count and tasks.

Before participation, explain the purpose, voluntary nature, tasks, approximate duration, use of synthetic documents and the planned anonymised reporting. Ask for explicit consent to observe and record task-level results; allow withdrawal and omit withdrawn records from analysis. Keep any contact details or signed consent outside the public repository. Assign participant codes and record the consent decision privately. At the end, ask what was confusing, which status or version was difficult to identify, and what the participant would change. Record short anonymised feedback notes alongside task outcomes, separating direct participant statements from observer interpretation.

Tasks are to create and route a request, find the current status and responsible reviewer, process a return and resubmit, and retrieve the approved version with its decision evidence. A multi-stage prerequisite check suggested by I04/I07/I10 is a **future test** for candidate CR01; the current prototype cannot pass it. The observer starts timing after presenting the task and stops at the verified success condition. Record errors, requests for help, completion, abandonment and task time. Use a five-minute task cap and report capped or failed tasks explicitly rather than removing them.

## Outcome measures and targets
| Metric | Computation and condition | Proposed success target |
| Task completion | Successful tasks without moderator help divided by attempted tasks | At least 90 percent on critical tasks |
| Processing effort | Per-participant paired change in task time, then median across participants | At least 30 percent median reduction for routing and status tasks |
| Version identification errors | Wrong version selections divided by relevant attempts | No wrong-version final decision in the scripted study |
| Trace completeness | Successful mutations with actor, time, version and action divided by successful mutations | 100 percent in integration fixtures |
| Access isolation | Denied unauthorised operations divided by attempted negative cases | 100 percent in the defined matrix |
| Metadata latency | 95th percentile server request duration under T18 | At most 2 seconds |

The 30 percent goal is a design target, not a published result. Compute time reduction for each matched participant and task as (baseline time minus EDFS time) divided by baseline time. Report condition medians, paired differences, failures and the full anonymised task-level table. Small convenience samples support exploratory conclusions only. Do not infer a general productivity gain from the browser demo or state-model tests.

## Execution status
The delivery includes executable prototype model tests and a separate actual verification record. Security, concurrency, performance, recovery and user outcomes remain unmeasured on a production backend. The blank [study results template](evaluation/study_results_template.csv) provides fields for later collection; the [evaluation folder](evaluation/) contains a protocol and test matrix. Failed acceptance criteria become tracked tasks before the next release tag.
