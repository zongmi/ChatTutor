import type { Template } from '..'

export const trigonometry: Template = {
  id: 'trigonometry',
  content: `
---
refs:
  sine: '(x) => 4 * Math.sin(x)'
  cosine: '(x) => 4 * Math.cos(x)'
  unitCircle: '(t) => [4 * Math.cos(t), 4 * Math.sin(t)]'
---
<plane range="[-10, 10]" domain="[-10, 10]">
  <!-- Unit circle -->
  <parameter :value="unitCircle" domain="[0, 6.28]" color="primary"/>
  <label x="0" y="5.5" content="\\text{Unit Circle}" color="primary"/>
  
  <!-- Center point -->
  <dot x="0" y="0" color="primary"/>
  <label x="-0.8" y="-0.8" content="O" color="primary"/>
  
  <!-- Angle demonstration -->
  <arrow from="[0, 0]" to="[4, 0]" color="info"/>
  <arrow from="[0, 0]" to="[2.83, 2.83]" color="success"/>
  <dot x="2.83" y="2.83" color="success"/>
  <angle start="[4, 0]" end="[2.83, 2.83]" origin="[0, 0]" label="\\frac{\\pi}{4}" color="info"/>
  
  <!-- Right triangle -->
  <polygon type="line" :points="[[0, 0], [2.83, 0], [2.83, 2.83], [0, 0]]" color="warning"/>
  <label x="2.83" y="1.2" content="\\sin" color="warning"/>
  <label x="1.3" y="-0.8" content="\\cos" color="warning"/>
  
  <!-- Axis labels -->
  <arrow from="[-5, 0]" to="[10, 0]" color="primary"/>
  <arrow from="[0, -5]" to="[0, 5]" color="primary"/>
  
  <!-- Reference points on circle -->
  <dot x="4" y="0" label="1" color="primary"/>
  <dot x="0" y="4" label="i" color="primary"/>
  <dot x="-4" y="0" label="-1" color="primary"/>
  <dot x="0" y="-4" label="-i" color="primary"/>
</plane>
  `.trim(),
  type: 'svg',
}

