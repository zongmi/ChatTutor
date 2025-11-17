import type { Template } from '..'

export const parameter: Template = {
  id: 'parameter',
  content: `
---
refs:
  circle: '(t) => [5 * Math.cos(t), 5 * Math.sin(t)]'
  spiral: '(t) => [t * Math.cos(t), t * Math.sin(t)]'
  lissajous: '(t) => [7 * Math.sin(3 * t), 7 * Math.sin(2 * t)]'
---
<plane range="[-10, 10]" domain="[-10, 10]">
  <!-- Circle -->
  <parameter :value="circle" domain="[0, 6.28]" color="primary"/>
  <label x="0" y="7" content="\\text{Circle}" color="primary"/>
  <dot x="0" y="0" color="primary"/>
  
  <!-- Spiral -->
  <parameter :value="spiral" domain="[0, 6.28]" color="success"/>
  <label x="6" y="-6" content="\\text{Spiral}" color="success"/>
  
  <!-- Lissajous curve -->
  <parameter :value="lissajous" domain="[0, 6.28]" color="info"/>
  <label x="-8" y="8" content="\\text{Lissajous}" color="info"/>
</plane>
  `.trim(),
  type: 'svg',
}

