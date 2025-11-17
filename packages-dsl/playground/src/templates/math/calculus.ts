import type { Template } from '..'

export const calculus: Template = {
  id: 'calculus',
  content: `
---
refs:
  func: '(x) => 0.1 * x * x - 2'
  derivative: '(x) => 0.2 * x'
  tangentAt3: '(x) => derivative(3) * (x - 3) + func(3)'
---
<plane range="[-10, 10]" domain="[-10, 10]">
  <!-- Main function -->
  <func :value="func" domain="[-10, 10]" color="primary"/>
  <label x="-8" y="6" content="f(x) = 0.1x^2 - 2" color="primary"/>
  
  <!-- Point of tangency -->
  <dot x="3" y="-1.1" color="danger"/>
  <label x="3.8" y="-1.1" content="P(3, f(3))" color="danger"/>
  
  <!-- Tangent line -->
  <func :value="tangentAt3" domain="[-5, 8]" color="success"/>
  <label x="6" y="2" content="\\text{Tangent at } x=3" color="success"/>
  
  <!-- Secant line illustration -->
  <dot x="-3" y="-1.1" color="info"/>
  <arrow from="[-3, -1.1]" to="[3, -1.1]" color="info"/>
  <label x="-5" y="-1.8" content="\\text{Secant}" color="info"/>
  
  <!-- Area under curve (Riemann sum approximation) -->
  <polygon type="graph" :points="[[-6, -2], [-6, 1.4], [-4, 1.4], [-4, -2]]" color="warning"/>
  <polygon type="graph" :points="[[-4, -2], [-4, -0.6], [-2, -0.6], [-2, -2]]" color="warning"/>
  <polygon type="graph" :points="[[-2, -2], [-2, -1.6], [0, -1.6], [0, -2]]" color="warning"/>
  <label x="-3" y="-4" content="\\int_{-6}^{0} f(x)dx \\approx \\text{shaded area}" color="warning"/>
</plane>
  `.trim(),
  type: 'svg',
}

