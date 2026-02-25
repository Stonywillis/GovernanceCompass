Governance Compass — README 
Purpose
Governance Compass is a hands‑on, scenario‑driven guide to Azure governance. It translates abstract concepts like management groups, RBAC, policy, and resource organization into clear, repeatable patterns you can use in real environments. The goal is to help engineers move from “I know the terms” to “I can design and justify a governance model.”
What This Project Solves
Cloud governance often fails because teams:
- Don’t know where to start
- Mix operational tasks with governance decisions
- Apply policies reactively instead of intentionally
- Struggle to explain why a structure exists
Governance Compass provides a structured, opinionated path that removes guesswork and builds confidence.
Who This Is For
- Engineers preparing for AZ‑104 or AZ‑305
- Teams building a new Azure landing zone
- Anyone who needs to justify governance decisions to leadership
- People who learn best through hands‑on labs and clear mental models
Core Principles
- Least privilege by design — RBAC is a product of structure, not a patch.
- Policy before deployment — guardrails first, resources second.
- Separation of concerns — identity, governance, and operations are distinct layers.
- Repeatability — everything should be reproducible through IaC or documented patterns.
- Clarity over complexity — governance should be explainable in one diagram.

Repository Structure
/docs
Concept explanations, diagrams, and decision guides:
- Management group hierarchy patterns
- RBAC role mapping
- Policy and initiative design
- Naming and tagging standards
- Landing zone governance models
/labs
Hands‑on exercises:
- Build a management group hierarchy
- Assign RBAC roles using least privilege
- Deploy and test Azure Policy
- Create a governance baseline for a new subscription
- Validate compliance and remediation
/reference
Quick‑lookup sheets:
- Common RBAC roles
- Policy definitions
- Initiative templates
- Governance anti‑patterns
/examples
Realistic governance scenarios:
- University environment
- Multi‑team enterprise
- Dev/Test/Prod separation
- Mergers and acquisitions
- Greenfield vs brownfield governance

How to Use This Project
1. Start with the mental model
Read the Governance Compass Overview to understand the four pillars:
- Structure
- Identity
- Policy
- Operations
2. Build your baseline
Follow the labs to create a working governance foundation.
3. Apply patterns to your environment
Use the examples to map your real‑world scenario to a governance model.
4. Validate and iterate
Use the reference sheets and checklists to confirm your design is consistent.

Why This Project Exists
Governance is often treated as a blocker or a compliance burden. Governance Compass reframes it as:
- A design discipline
- A communication tool
- A safety net
- A scaling mechanism
It helps engineers build confidence, articulate decisions, and avoid the “just wing it” trap that leads to chaos later.




## License

MIT License
