import type { Template } from '..'

export const arrow: Template = {
  id: 'arrow',
  content: `
---
---
<plane range="[-10, 10]" domain="[-10, 10]">
  <!-- Basic arrows -->
  <arrow from="[-5, 0]" to="[5, 0]" color="primary"/>
  <arrow from="[0, -5]" to="[0, 5]" color="success"/>
  
  <!-- Diagonal arrows -->
  <arrow from="[-3, -3]" to="[3, 3]" color="info"/>
  <arrow from="[3, -3]" to="[-3, 3]" color="warning"/>
  
  <!-- Vectors -->
  <arrow from="[0, 0]" to="[4, 3]" color="danger"/>
  <dot x="4" y="3" label="(4, 3)" color="danger"/>
</plane>
  `.trim(),
  type: 'svg',
}

