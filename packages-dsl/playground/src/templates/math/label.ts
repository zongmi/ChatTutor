import type { Template } from '..'

export const label: Template = {
  id: 'label',
  content: `
---
---
<plane range="[-10, 10]" domain="[-10, 10]">
  <!-- Labels at different positions -->
  <label x="0" y="8" content="y = f(x)" color="primary"/>
  <label x="8" y="0" content="x" color="success"/>
  
  <!-- Mathematical expressions -->
  <label x="-6" y="6" content="\\alpha + \\beta" color="info"/>
  <label x="6" y="6" content="\\int_0^1 f(x)dx" color="warning"/>
  <label x="-6" y="-6" content="\\sqrt{x^2 + y^2}" color="danger"/>
  
  <!-- With corresponding points -->
  <dot x="0" y="0" color="primary"/>
  <label x="0.5" y="0.5" content="O" color="primary"/>
</plane>
  `.trim(),
  type: 'svg',
}

