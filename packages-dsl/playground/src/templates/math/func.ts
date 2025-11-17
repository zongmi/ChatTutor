import type { Template } from '..'

export const func: Template = {
  id: 'func',
  content: `
---
refs:
  quadratic: '(x) => x * x / 10'
  sine: '(x) => 5 * Math.sin(x)'
  cubic: '(x) => x * x * x / 50'
---
<plane range="[-10, 10]" domain="[-10, 10]">
  <!-- Quadratic function -->
  <func :value="quadratic" domain="[-10, 10]" color="primary"/>
  <label x="0" y="8" content="y = x^2 / 10" color="primary"/>
  
  <!-- Sine function -->
  <func :value="sine" domain="[-10, 10]" color="success"/>
  <label x="7" y="5" content="y = 5\\sin(x)" color="success"/>
  
  <!-- Cubic function -->
  <func :value="cubic" domain="[-10, 10]" color="info"/>
  <label x="8" y="8" content="y = x^3 / 50" color="info"/>
</plane>
  `.trim(),
  type: 'svg',
}

