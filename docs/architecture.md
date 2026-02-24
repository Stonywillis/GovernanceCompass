# Architecture Overview

The Governance Compass is built around a simple but powerful architecture: a rule-based decision engine, a lightweight UI, and a diagram generator.

## Components

### 1. Decision Engine
The decision engine evaluates organisational inputs and maps them to governance recommendations. It uses a rule set defined in `rules.json`.

Key responsibilities:
- Evaluate inputs against rule conditions  
- Select appropriate governance patterns  
- Generate structured outputs  
- Provide explanations for each recommendation  

### 2. UI Layer
A minimal HTML/CSS interface allows users to enter organisational characteristics and view the resulting governance model.

Key responsibilities:
- Collect user inputs  
- Display recommendations  
- Render diagrams  

### 3. Diagram Generator
A simple SVG-based template system that inserts labels and structure based on the engine’s output.

Key responsibilities:
- Render management group hierarchy  
- Display landing zones  
- Show platform components  

## Data Flow

1. User enters organisational characteristics in the UI.  
2. UI sends inputs to the decision engine.  
3. Engine evaluates rules and produces recommendations.  
4. UI displays results and renders diagrams.  

## Design Principles

- **Clarity over complexity**: Governance is already complex; the tool should simplify.  
- **Explainability**: Every recommendation includes a rationale.  
- **Extensibility**: Rules can be expanded without changing the engine.  
- **Portability**: No backend required; runs entirely client-side.  
