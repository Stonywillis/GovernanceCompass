
Governance Compass Examples
These examples illustrate how the Governance Compass evaluates different organisational profiles and produces a consistent set of governance recommendations across four dimensions:
- Management group hierarchy
- Policy bundles
- RBAC patterns
- Diagram model
Each scenario includes the inputs, the Compass outputs, and a short explanation of why those outputs make sense for that organisation’s maturity, structure, and constraints.

Small Startup, Early Cloud Maturity
Inputs
- Size: small
- Compliance: low
- Maturity: early
- Team structure: centralised
- Identity: single‑tenant
- Deployment: manual
- Security: low
- Networking: hub‑spoke
Management Group Hierarchy
- Root
- LandingZones
- Sandbox
Policy Bundles
- SecurityBaseline
- TaggingMinimum
RBAC Patterns
- PlatformOpsOwnership
- LeastPrivilegeEnforcement
Diagram Model
Nodes
- Root
- LandingZones
- Sandbox
Edges
- Root → LandingZones
- Root → Sandbox
Explanation
Early‑stage organisations benefit from minimal governance. A centralised team with low compliance requirements doesn’t need a Platform or Management group yet. Lightweight policies keep friction low while still enforcing essential guardrails. RBAC remains simple: the platform team owns everything, and least privilege prevents accidental overreach.

Medium Organisation, Developing Maturity
Inputs
- Size: medium
- Compliance: moderate
- Maturity: developing
- Team structure: federated
- Identity: hybrid
- Deployment: IaC
- Security: moderate
- Networking: hub‑spoke
Management Group Hierarchy
- Root
- Platform
- Identity
- LandingZones
- Sandbox
Policy Bundles
- SecurityBaseline
- IdentityHardening
- CostControls
- TaggingStandard
RBAC Patterns
- PlatformOpsOwnership
- LandingZoneDelegation
- SecurityOpsVisibility
Diagram Model
Nodes
- Root
- Platform
- Identity
- LandingZones
- Sandbox
Edges
- Root → Platform
- Root → Identity
- Root → LandingZones
- Root → Sandbox
Explanation
A developing organisation introduces shared services, hybrid identity, and IaC. This requires a Platform group for central services and an Identity group for directory integration. Federated teams need autonomy in their landing zones, while the platform and security teams maintain oversight. Tagging and identity controls become more consistent to support reporting and audit.

Large Enterprise, High Compliance, Mature Cloud
Inputs
- Size: large
- Compliance: high
- Maturity: mature
- Team structure: centralised
- Identity: multi‑tenant
- Deployment: GitOps
- Security: high
- Networking: vWAN
Management Group Hierarchy
- Root
- Platform
- Identity
- Management
- LandingZones
- Sandbox
Policy Bundles
- SecurityBaseline
- IdentityHardening
- ComplianceFrameworks
- CostControls
- TaggingStrict
- NetworkingGovernance
- PlatformGovernance
RBAC Patterns
- StrictSeparationOfDuties
- IdentityAdminIsolation
- DeploymentPipelineRoles
- SecurityOpsVisibility
- BreakGlassAccounts
Diagram Model
Nodes
- Root
- Platform
- Identity
- Management
- LandingZones
- Sandbox
Edges
- Root → Platform
- Root → Identity
- Root → Management
- Root → LandingZones
- Root → Sandbox
Explanation
Enterprises with high compliance and mature cloud practices require full separation of duties, strict identity boundaries, and comprehensive governance. GitOps introduces deployment identities that must be isolated from platform and identity roles. Multi‑tenant identity requires a dedicated Identity group. vWAN introduces centralised routing and monitoring, justifying a Management group. Policy bundles become extensive, covering compliance frameworks, strict tagging, and platform governance.


