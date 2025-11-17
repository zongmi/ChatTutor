import type { Template } from '..'

export const line: Template = {
  id: 'line',
  content: `
---
---
<plane range="[-10, 10]" domain="[-10, 10]">
  <!-- Horizontal and vertical lines -->
  <line from="[-8, 5]" to="[8, 5]" color="primary"/>
  <line from="[3, -8]" to="[3, 8]" color="success"/>
  
  <!-- Diagonal lines -->
  <line from="[-5, -5]" to="[5, 5]" color="info"/>
  <line from="[-5, 5]" to="[5, -5]" color="warning"/>
  
  <!-- Triangle using lines -->
  <line from="[-6, -3]" to="[0, 6]" color="danger"/>
  <line from="[0, 6]" to="[6, -3]" color="danger"/>
  <line from="[6, -3]" to="[-6, -3]" color="danger"/>
  
  <!-- Points at triangle vertices -->
  <dot x="-6" y="-3" color="danger"/>
  <dot x="0" y="6" color="danger"/>
  <dot x="6" y="-3" color="danger"/>
  
  <!-- Labels -->
  <label x="-8" y="6" content="\\text{Horizontal}" color="primary"/>
  <label x="4" y="8" content="\\text{Vertical}" color="success"/>
</plane>
  `.trim(),
  type: 'svg',
}

