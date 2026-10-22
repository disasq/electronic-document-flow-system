# Verification and evaluation plan

## Verification strategy
Prototype tests verify state transitions and observable interaction. Later backend tests must verify enforcement at the server and persistence boundary. Tests use synthetic documents until explicit permission exists for anonymised organisational examples. Every Must requirement has a test identifier below. A passing prototype test covers only the corresponding simulated behaviour.

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
The primary question is whether the system helps users identify a document's state and complete a controlled approval journey with less effort. The baseline is an explicitly prepared shared folder with versioned filenames, a spreadsheet status log and message templates. This baseline is synthetic and must later be checked against the actual department's process. It does not assume that the client currently works this way.

Recruit 8–12 volunteer representatives for an exploratory paired study if available. Record the actual sample and limitations if recruitment is smaller. Provide equal brief training and equivalent synthetic document sets. Counterbalance order: half use baseline first and half use EDFS first. Avoid reusing the exact content across conditions. Use the same device, browser, network, document count and tasks.

Tasks are to create and route a request, find the current status and responsible reviewer, process a return and resubmit, and retrieve the approved version with its decision evidence. The observer starts timing after presenting the task and stops at the verified success condition. Record errors, requests for help, completion, abandonment and task time. Use a five-minute task cap and report capped or failed tasks explicitly rather than removing them.

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
The delivery includes executable prototype model tests and a separate actual verification record. Security, concurrency, performance, recovery and user outcomes remain unmeasured on a production backend. The blank study CSV in management/ provides the fields needed for later collection. Failed acceptance criteria become tracked tasks before the next release tag.
