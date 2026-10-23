# Project proposal

## Project identity
Title: Development of an Electronic Document Flow System. Students: Qazybai Ali, SE-2424, and Saqyp Dias, SE-2417. Supervisor: Askar Khaimuldin. Submission stage: first pre-defense, 24 October 2026. Working product name: EDFS.

This package proposes a departmental web system that keeps a document, its versions and the decisions made about it together. It includes analysis, a proposed architecture, an interactive browser prototype and an evaluation plan. Dias Saqyp reports ten Astana user conversations on 12–19 October 2026; five directly inform the internal-workflow scope in [the relevance analysis](02_relevance.md). No pilot organisation or its formal process has been selected. The 10–30-user departmental setting remains a planning assumption.

## Problem and target users
The working problem is that employees who coordinate documents through separate files and messages may lose track of the current version, responsible reviewer and prior decisions. The supplied interview notes describe such incidents in several Astana organisations [I01, I03, I07, I10], but do not establish their frequency or measure the benefit of a new system. Published EDMS and BPM studies give wider context [S01–S03, S06].

Primary users are employees who prepare internal memoranda, requests and policies, reviewers who decide on assigned documents, and an administrator who manages access and archives approved records. The intended pilot is one department with 10–30 users. This range is a capacity assumption, not an observed client count.

## Aim and objectives
The aim is to design and evaluate a web system that makes departmental document approval traceable and reduces the effort required to identify document status and complete routine processing.

1. Analyse at least five relevant user conversations, identify common problems and limits, and validate the resulting scope with a pilot organisation and supervisor.
2. Review scientific approaches and compare five existing products before confirming the project requirements.
3. Specify testable functional and non-functional requirements and a consistent architecture.
4. Prototype the author, reviewer and administrator journeys, including failed and returned reviews.
5. Implement the later backend with controlled versions, server-side permissions and an audit trail.
6. Compare the implemented system with a shared-folder and message baseline under the evaluation protocol in this package.

## Scope and engineering complexity
In scope: internal documents, metadata search, immutable version snapshots, review assignment, return with a reason, resubmission, approval of a specific version, archive, role and relationship checks, activity export and planned in-app notifications. The current demonstrator supports one assigned reviewer per submission. Interview notes I01, I04, I07 and I10 describe multiple necessary stages or prerequisites, so a single reviewer cannot represent those complete organisational routes. The team must confirm whether a sequential route is mandatory for the later pilot or narrow the target process explicitly with the supervisor. Complexity comes from coordinating permissions, version consistency, concurrent decisions, durable audit events and recoverable storage.

Out of scope for the initial system: legally qualified electronic signatures, state-service integration, public document exchange, OCR, AI classification, simultaneous editing, complex parallel or multi-level routes, and automated legal retention decisions. Approval is an operational decision, with no claim of legal signature equivalence. Existing approved records remain read-only. A later amendment creates a separate document linked to its predecessor.

Expected outcomes: an evidence-backed requirements baseline, a documented architecture, a tested implementation in the later diploma phase, a usable prototype now, reproducible test materials and a measured comparison. Target improvements are hypotheses until measured.

## Working assumptions
The department can use a modern browser and nominate reviewers and an administrator. English labels are acceptable for the prototype. The team can learn the proposed backend stack. A single-stage route is sufficient only for the current **demonstration slice**, not for the multi-stage workflows described by several interviewees. These assumptions and the pilot route require explicit user and supervisor review.
