# Existing system comparison

## Selection and evidence basis
Four relevant systems cover hosted collaboration, self-hosted file collaboration and dedicated document management: SharePoint with Power Automate, Nextcloud with Flow, Mayan EDMS and Paperless-ngx. The same eight criteria apply to all. Documentation was checked on 19 October 2026. This is a documentation review, not a hands-on benchmark, security audit or price quotation.

Legend: D means documented capability, C means configuration or an additional component is needed, and U means the exact behaviour was not verified in the inspected pages. U does not mean absent. Product configuration, edition and future versions can change results.

| Criterion | SharePoint and Power Automate | Nextcloud and Flow | Mayan EDMS | Paperless ngx |
| Document lifecycle automation | C approval flow [S09] | C Flow rules [S11] | D workflow feature [S13] | D pipeline workflows [S14] |
| Human approval pinned to version | D ETag in documented flow [S09] | U exact approval semantics | U exact version binding | U human review semantics |
| Version history | D library version history [S10] | D versions with expiry rules [S12] | D document versions [S13] | U authoring version semantics |
| Access control | C library and approver permissions [S09] | C file access rules [S11] | D granular permissions [S13] | D user and object permissions [S14] |
| Metadata organisation | D library and item context [S09] | D tagging through Flow [S11] | D metadata and indexes [S13] | D tags and custom fields [S14] |
| Decision or activity evidence | D flow outcome and comments [S09] | U complete decision history | D event tracking [S13] | D document audit log [S14] |
| Automation interface | D SharePoint connector [S09] | C Flow configuration [S11] | D HTTP REST API [S13] | D REST API [S15] |
| Deployment and administration | C Microsoft 365 environment | C self-hosted server or provider | C dedicated deployment | C dedicated deployment |

## Interpretation and build versus configure decision
The comparison shows substantial overlap with the proposed project. It does not justify claims that alternatives lack permissions, workflows or audit features. SharePoint provides an explicit example of version-aware approval. Mayan is a strong candidate for a configuration trial. Paperless focuses on ingestion and document organisation in the inspected workflow documentation, so equivalence to an author–reviewer lifecycle needs testing. Nextcloud's automatic version expiry requires checking against the desired record policy.

Our provisional reason to build is educational engineering work around a narrow approval workflow with inspectable rules, a consistent user journey and an evaluation baseline. Commercial necessity is unproven. After interviews, spend one time-boxed session configuring the mandatory scenario in SharePoint or Mayan. Record route setup effort, version binding, access isolation and recovery from requested changes. If configuration satisfies the mandatory requirements with acceptable administration, recommend adaptation or narrow the custom contribution with supervisor agreement.

The proposed prototype illustrates a design choice; it is not a fifth production competitor and has not met production security or storage requirements. No product price, compliance certification or unsupported absence claim forms part of the comparison.
