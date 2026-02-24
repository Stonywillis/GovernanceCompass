# Azure Governance Compass

The Azure Governance Compass is an interactive decision engine that generates a recommended governance model based on an organisation’s size, structure, compliance needs, and cloud maturity. It is designed to make Azure governance intuitive by turning architectural judgement into a set of clear, explainable recommendations.

## Purpose

Azure governance is often presented as a static checklist. In reality, it is a set of decisions shaped by organisational context. This project encodes those decisions into logic, producing:

- A suggested management group hierarchy  
- Policy and initiative bundles  
- RBAC patterns  
- Naming and tagging conventions  
- Logging and monitoring layout  
- Landing zone recommendations  

Each recommendation includes a short explanation to help users understand *why* it was chosen.

## How it works

The Governance Compass takes a small set of inputs describing the organisation:

- Organisation size  
- Regulatory requirements  
- Team structure  
- Deployment model  
- Identity boundaries  
- Cloud maturity  

These inputs are processed by a rule-based decision engine. The engine outputs a governance model and a visual representation of the recommended hierarchy.

## Project structure

## Roadmap

- Add export to Bicep/Terraform  
- Add governance archetypes (startup, enterprise, regulated, research)  
- Add maturity scoring  
- Add common pitfalls and anti-patterns  

## License

MIT License
