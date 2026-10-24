import axe from 'axe-core';

/** axe violations inside `node`. Contrast is checked by `npm run check:contrast` (jsdom cannot compute color); page-level landmark rules do not apply to a component. */
export async function axeViolations(node: Element): Promise<string[]> {
  const result = await axe.run(node, { rules: { 'color-contrast': { enabled: false }, region: { enabled: false } } });
  return result.violations.map((v) => `${v.id}: ${v.help} (${v.nodes.length})`);
}
