# Technology comparison and decisions

## Decision method
The proposed production design is a modular Django web application using PostgreSQL and HTTP requests with JSON where asynchronous browser actions are needed. The delivered browser prototype deliberately uses plain HTML, CSS and JavaScript with local browser storage. It explores interaction and transition rules and does not implement the proposed backend.

Scores below are team planning judgements on a scale from 1, weak fit, to 5, strong fit. They are not performance measurements or objective product rankings. Weighted totals equal the sum of score multiplied by criterion weight. Team familiarity has not been demonstrated, so learning effort is provisional. Revisit after a small implementation spike and supervisor review.

## Server platform decision ADR 001
Requirements driving this decision are authenticated sessions, role and object checks, transactional updates, simple administration and a two-person scope. Django provides integrated authentication and security facilities [S16]. FastAPI provides validation and dependencies but needs choices for persistence and administration [S17]. NestJS provides structured modules and authorization patterns [S18]. None automatically enforces our document ownership policy.

| Criterion and weight | Django | FastAPI | NestJS |
| Integrated authentication and security 30 percent | 5 | 3 | 4 |
| Delivery effort for this scope 30 percent | 5 | 4 | 3 |
| Transactional workflow implementation 20 percent | 4 | 4 | 4 |
| Estimated learning effort 20 percent | 4 | 4 | 3 |
| Weighted total out of 5 | 4.60 | 3.70 | 3.50 |

Decision: Django, provisionally using the documented 5.2 LTS line with an updated patch selected at implementation. Use server templates initially and small browser scripts. Consequence: fewer separately deployed components, with explicit application-level object checks. Reconsider if the team demonstrates substantially stronger TypeScript capability or an API integration dominates the requirements. Package versions and patch support must be checked and pinned before implementation.

## Data storage decision ADR 002
PostgreSQL supports explicit row locks and text search [S19, S20]. SQLite simplifies a small local deployment but has a different write-concurrency profile [S21]. MongoDB supports transactions [S22], so it is not excluded for lacking them; its document model offers less benefit for our relational version and review model.

| Criterion and weight | PostgreSQL | SQLite | MongoDB |
| Relational integrity fit 40 percent | 5 | 5 | 3 |
| Concurrent approval control 30 percent | 5 | 2 | 4 |
| Search fit 20 percent | 5 | 3 | 4 |
| Operational simplicity 10 percent | 3 | 5 | 3 |
| Weighted total out of 5 | 4.80 | 3.70 | 3.50 |

Decision: PostgreSQL with document, version, review and audit tables. Use a private object store for binary content and keep hashes and storage keys in the database. An upload remains quarantined until validation succeeds. Database transactions alone do not atomically commit an object-store write, so staged upload and cleanup are necessary. PostgreSQL 17 is the design baseline, pending environment confirmation and a supported patch choice.

## Component interaction decision ADR 003
The browser needs immediate confirmation of a small number of commands. HTTP request and response semantics are adequate [S23]. gRPC is a reasonable typed service-to-service alternative but adds client and transport tooling for this scope. RabbitMQ is appropriate for asynchronous messaging but introduces acknowledgements, retries and duplicate handling [S24].

| Criterion and weight | HTTP and JSON | gRPC | RabbitMQ messages |
| Fit for browser commands 40 percent | 5 | 3 | 2 |
| Implementation simplicity 30 percent | 5 | 2 | 2 |
| Inspection and debugging 20 percent | 4 | 3 | 3 |
| Future distribution 10 percent | 4 | 5 | 5 |
| Weighted total out of 5 | 4.70 | 2.90 | 2.50 |

Decision: synchronous HTTP for commands and queries within a modular monolith. A database outbox records planned notifications in the same transaction as a decision. A periodic worker retries delivery with a unique event key. RabbitMQ remains a later option if throughput or external integrations justify it. Failure of email must not roll back an already committed approval. In-app state is the source of truth.
