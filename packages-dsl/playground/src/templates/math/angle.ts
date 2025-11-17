import type { Template } from '..'

export const angle: Template = {
  id: 'angle',
  content: `
---
---
<plane range="[-10, 10]" domain="[-10, 10]">
  <!-- Angle at origin -->
  <arrow from="[0, 0]" to="[5, 0]" color="primary"/>
  <arrow from="[0, 0]" to="[3, 4]" color="primary"/>
  <angle start="[5, 0]" end="[3, 4]" origin="[0, 0]" label="\\theta" color="primary"/>
  
  <!-- Right angle -->
  <arrow from="[-5, -5]" to="[0, -5]" color="success"/>
  <arrow from="[-5, -5]" to="[-5, 0]" color="success"/>
  <angle start="[0, -5]" end="[-5, 0]" origin="[-5, -5]" label="90°" color="success"/>
  
  <!-- Another angle example -->
  <arrow from="[5, 5]" to="[8, 5]" color="info"/>
  <arrow from="[5, 5]" to="[5, 8]" color="info"/>
  <angle start="[8, 5]" end="[5, 8]" origin="[5, 5]" label="\\alpha" color="info"/>
</plane>
  `.trim(),
  type: 'svg',
}

