
async function evaluateGovernance(inputs) {
  const response = await fetch('../logic/rules.json');
  const rules = await response.json();

  const result = {
    managementGroups: null,
    explanations: []
  };

  for (const rule of rules.managementGroups) {
    const match = Object.entries(rule.condition).every(
      ([key, value]) => inputs[key] === value
    );

    if (match) {
      result.managementGroups = rule.structure;
      result.explanations.push(rule.explanation);
    }
  }

  return result;
}