import type { Template } from '..'

export const vectors: Template = {
  id: 'vectors',
  content: `
---
---
<plane range="[-10, 10]" domain="[-10, 10]">
  <!-- Vector addition demonstration -->
  <label x="0" y="9" content="\\text{Vector Addition: } \\vec{a} + \\vec{b} = \\vec{c}" color="primary"/>
  
  <!-- Vector a -->
  <arrow from="[0, 0]" to="[4, 2]" color="primary"/>
  <label x="2" y="1.5" content="\\vec{a}" color="primary"/>
  <dot x="4" y="2" color="primary"/>
  
  <!-- Vector b starting from end of a -->
  <arrow from="[4, 2]" to="[6, 6]" color="success"/>
  <label x="5.5" y="4" content="\\vec{b}" color="success"/>
  <dot x="6" y="6" color="success"/>
  
  <!-- Resultant vector c -->
  <arrow from="[0, 0]" to="[6, 6]" color="danger"/>
  <label x="3.5" y="3.5" content="\\vec{c}" color="danger"/>
  
  <!-- Vector b from origin (for parallelogram) -->
  <arrow from="[0, 0]" to="[2, 4]" color="success"/>
  <polygon type="line" :points="[[0, 0], [4, 2], [6, 6], [2, 4], [0, 0]]" color="info"/>
  
  <!-- Scalar multiplication example -->
  <arrow from="[-8, -3]" to="[-5, -3]" color="warning"/>
  <label x="-6.5" y="-2.3" content="\\vec{v}" color="warning"/>
  
  <arrow from="[-8, -6]" to="[-2, -6]" color="warning"/>
  <label x="-5" y="-5.3" content="2\\vec{v}" color="warning"/>
  
  <!-- Origin -->
  <dot x="0" y="0" color="primary"/>
  <label x="-0.8" y="-0.8" content="O" color="primary"/>
</plane>
  `.trim(),
  type: 'svg',
}

