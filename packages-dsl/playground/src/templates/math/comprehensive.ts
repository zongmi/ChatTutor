import type { Template } from '..'

export const comprehensive: Template = {
  id: 'comprehensive',
  content: `
---
refs:
  parabola: '(x) => x * x / 5 - 5'
---
<plane range="[-10, 10]" domain="[-10, 10]">
  <!-- Coordinate system labels -->
  <label x="9" y="-0.5" content="x" color="primary"/>
  <label x="-0.5" y="9" content="y" color="primary"/>
  
  <!-- Parabola function -->
  <func :value="parabola" domain="[-7, 7]" color="info"/>
  <label x="0" y="8" content="y = \\frac{x^2}{5} - 5" color="info"/>
  
  <!-- Vertex point -->
  <dot x="0" y="-5" color="danger"/>
  <label x="0.8" y="-5" content="\\text{Vertex}" color="danger"/>
  
  <!-- Tangent vector at x=5 -->
  <dot x="5" y="0" color="success"/>
  <arrow from="[5, 0]" to="[6, 2]" color="success"/>
  <label x="6.5" y="2" content="\\text{Tangent}" color="success"/>
  
  <!-- Triangle showing area -->
  <polygon type="graph" :points="[[-3, -3.2], [3, -3.2], [0, -5]]" color="warning"/>
  <label x="0" y="-2.5" content="\\text{Region}" color="warning"/>
  
  <!-- Angle at origin -->
  <arrow from="[0, 0]" to="[4, 0]" color="primary"/>
  <arrow from="[0, 0]" to="[3, 3]" color="primary"/>
  <angle start="[4, 0]" end="[3, 3]" origin="[0, 0]" label="45°" color="primary"/>
</plane>
  `.trim(),
  type: 'svg',
}

