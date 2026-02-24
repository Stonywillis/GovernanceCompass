// MANAGEMENT GROUP ENGINE
async function evaluateGovernance(inputs) {
  const response = await fetch('/logic/rules.json');
  const rules = await response.json();

  const matchedStructures = [];
  const explanations = [];

  for (const rule of rules.managementGroups) {
    const match = Object.entries(rule.condition).every(
      ([key, value]) => inputs[key] === value
    );

    if (match) {
      matchedStructures.push(...rule.structure);
      explanations.push(rule.explanation);
    }
  }

  const canonicalOrder = [
    "Root",
    "Platform",
    "Identity",
    "Management",
    "LandingZones",
    "Sandbox"
  ];

  const unique = [...new Set(matchedStructures)];

  const sorted = unique.sort(
    (a, b) => canonicalOrder.indexOf(a) - canonicalOrder.indexOf(b)
  );

  return {
    managementGroups: sorted,
    explanations
  };
}


// POLICY BUNDLE ENGINE
async function evaluatePolicyBundles(inputs) {
  const response = await fetch('/logic/rules.json');
  const rules = await response.json();

  const matchedBundles = [];
  const explanations = [];

  for (const rule of rules.policyBundles) {
    const match = Object.entries(rule.condition).every(
      ([key, value]) => inputs[key] === value
    );

    if (match) {
      matchedBundles.push(...rule.bundles);
      explanations.push(rule.explanation);
    }
  }

  const canonicalOrder = [
    "SecurityBaseline",
    "IdentityHardening",
    "ComplianceFrameworks",
    "CostControls",
    "TaggingMinimum",
    "TaggingStandard",
    "TaggingStrict",
    "NetworkingGovernance",
    "PlatformGovernance"
  ];

  const unique = [...new Set(matchedBundles)];

  const sorted = unique.sort(
    (a, b) => canonicalOrder.indexOf(a) - canonicalOrder.indexOf(b)
  );

  return {
    bundles: sorted,
    explanations
  };
}


// RBAC PATTERN ENGINE
async function evaluateRBACPatterns(inputs) {
  const response = await fetch('/logic/rules.json');
  const rules = await response.json();

  const matchedPatterns = [];
  const explanations = [];

  for (const rule of rules.rbacPatterns) {
    const match = Object.entries(rule.condition).every(
      ([key, value]) => inputs[key] === value
    );

    if (match) {
      matchedPatterns.push(...rule.patterns);
      explanations.push(rule.explanation);
    }
  }

  const canonicalOrder = [
    "PlatformOpsOwnership",
    "LandingZoneDelegation",
    "DeploymentPipelineRoles",
    "LeastPrivilegeEnforcement",
    "StrictSeparationOfDuties",
    "IdentityAdminIsolation",
    "SecurityOpsVisibility",
    "CostManagementDelegation",
    "BreakGlassAccounts"
  ];

  const unique = [...new Set(matchedPatterns)];

  const sorted = unique.sort(
    (a, b) => canonicalOrder.indexOf(a) - canonicalOrder.indexOf(b)
  );

  return {
    rbacPatterns: sorted,
    explanations
  };
}

function buildDiagramModel(managementGroups) {
  // Create nodes
  const nodes = managementGroups.map(mg => ({
    id: mg,
    label: mg
  }));

  // Root is always the parent
  const root = "Root";

  // All other groups hang directly off Root for now
  const edges = managementGroups
    .filter(mg => mg !== root)
    .map(mg => ({
      from: root,
      to: mg
    }));

  return { nodes, edges };
}
async function evaluateAll(inputs) {
  const mg = await evaluateGovernance(inputs);
  const pb = await evaluatePolicyBundles(inputs);
  const rb = await evaluateRBACPatterns(inputs);
  const diagram = buildDiagramModel(mg.managementGroups);

  return {
    mg,
    pb,
    rb,
    diagram
  };
}