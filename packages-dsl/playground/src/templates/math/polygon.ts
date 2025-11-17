import type { Template } from '..'

export const polygon: Template = {
  id: 'polygon',
  content: `
---
---
<plane range="[-10, 10]" domain="[-10, 10]">
  <!-- Filled triangle -->
  <polygon type="graph" :points="[[0, 5], [4, -2], [-4, -2]]" color="primary"/>
  <label x="0" y="6" content="\\text{Triangle}" color="primary"/>
  
  <!-- Pentagon outline -->
  <polygon type="line" :points="[[7, 7], [9, 5], [8, 2], [6, 2], [5, 5], [7, 7]]" color="success"/>
  <label x="7" y="8" content="\\text{Pentagon}" color="success"/>
  
  <!-- Square filled -->
  <polygon type="graph" :points="[[-8, -4], [-5, -4], [-5, -7], [-8, -7]]" color="info"/>
  <label x="-6.5" y="-3" content="\\text{Square}" color="info"/>
  
  <!-- Zigzag line -->
  <polygon type="line" :points="[[4, -5], [6, -7], [8, -5], [10, -7]]" color="warning"/>
</plane>
  `.trim(),
  type: 'svg',
}

