
# Governance Decision Tree

This document outlines the logic used by the Governance Compass to map organisational characteristics to governance recommendations.

## Inputs

- Organisation size: small, medium, large  
- Compliance level: low, moderate, high  
- Team structure: centralised, federated  
- Deployment model: manual, IaC, GitOps  
- Identity boundaries: single-tenant, multi-tenant  
- Cloud maturity: early, developing, mature  

## Decision Logic

### Management Group Structure

- If size = small AND compliance = low  
  → Flat hierarchy (Root → Landing Zones → Sandbox)

- If size = medium OR compliance = moderate  
  → Standard hierarchy (Root → Platform / Landing Zones / Sandbox)

- If size = large OR compliance = high  
  → Enterprise hierarchy (Root → Platform / Identity / Management / Landing Zones / Sandbox)

### Policy Bundles

- If compliance = low  
  → Baseline security + cost controls

- If compliance = moderate  
  → Security + cost + identity hardening

- If compliance = high  
  → Mandatory initiatives (NIST, CIS, CAF), enforced tagging, DDoS, Defender plans

### RBAC Patterns

- If team structure = centralised  
  → Platform team owns subscription creation and policy assignment

- If team structure = federated  
  → Landing zone per team with delegated RBAC  
  → Platform retains policy control

### Deployment Model

- If deployment = manual  
  → Recommend transition to IaC  
  → Provide minimal governance guardrails

- If deployment = IaC  
  → Enforce policy-as-code  
  → Use management groups for drift control

- If deployment = GitOps  
  → Strong separation of duties  
  → Workload identity federation recommended

### Identity Boundaries

- If multi-tenant  
  → Dedicated identity management group  
  → Stronger CA and app governance

### Cloud Maturity

- If early  
  → Minimal viable governance  
  → Focus on naming, tagging, and basic policies

- If developing  
  → Introduce landing zones and platform services

- If mature  
  → Full enterprise governance model  
  → Automated compliance and drift detection  
