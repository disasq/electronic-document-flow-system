# Project proposal

## Project identity
Title: Development of an Electronic Document Flow System. Students: Qazybai Ali, SE-2424, and Saqyp Dias, SE-2417. Supervisor: Askar Khaimuldin. Submission stage: first pre-defense, 24 October 2026. Working product name: EDFS.

This package proposes a departmental web system that keeps a document, its versions and the decisions made about it together. It includes analysis, a proposed architecture, an interactive browser prototype and an evaluation plan. The organisation and its actual process have not yet been selected. The small-department setting is a design assumption that requires confirmation through interviews.

## Problem and target users
The working problem hypothesis is that employees who coordinate documents through separate files and messages can lose track of the current version, responsible reviewer and final decision. This has not been demonstrated in a real client organisation. Published EDMS and BPM studies justify investigating this class of problem, but do not verify the hypothesis for our users [S01–S03, S06].

Primary users are employees who prepare internal memoranda, requests and policies, reviewers who decide on assigned documents, and an administrator who manages access and archives approved records. The intended pilot is one department with 10–30 users. This range is a capacity assumption, not an observed client count.

## Aim and objectives
The aim is to design and evaluate a web system that makes departmental document approval traceable and reduces the effort required to identify document status and complete routine processing.

1. Validate the problem through 3–5 discussions with representatives of the proposed user roles, or a substantive client agreement.
2. Review scientific approaches and compare four existing products before confirming the project requirements.
3. Specify testable functional and non-functional requirements and a consistent architecture.
4. Prototype the author, reviewer and administrator journeys, including failed and returned reviews.
5. Implement the later backend with controlled versions, server-side permissions and an audit trail.
6. Compare the implemented system with a shared-folder and message baseline under the evaluation protocol in this package.

## Scope and engineering complexity
In scope: internal documents, metadata search, immutable version snapshots, one assigned reviewer per submission, return with a reason, resubmission, approval of a specific version, archive, role and relationship checks, activity export and planned in-app notifications. Complexity comes from coordinating permissions, version consistency, concurrent decisions, durable audit events and recoverable storage.

Out of scope for the initial system: legally qualified electronic signatures, state-service integration, public document exchange, OCR, AI classification, simultaneous editing, complex parallel or multi-level routes, and automated legal retention decisions. Approval is an operational decision, with no claim of legal signature equivalence. Existing approved records remain read-only. A later amendment creates a separate document linked to its predecessor.

Expected outcomes: an evidence-backed requirements baseline, a documented architecture, a tested implementation in the later diploma phase, a usable prototype now, reproducible test materials and a measured comparison. Target improvements are hypotheses until measured.

## Working assumptions
The department can use a modern browser and nominate a reviewer and administrator. A single-stage route is sufficient for the first pilot. English labels are acceptable for the prototype. The team can learn the proposed backend stack. Each assumption must be accepted, revised or rejected in the evidence log after user and supervisor review.
