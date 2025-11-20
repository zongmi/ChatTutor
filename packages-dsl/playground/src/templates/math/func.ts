import type { Template } from '..'

export const func: Template = {
  id: 'func',
  content: `
---
refs:
  a: '1'
---
<plane range="[-10, 10]" domain="[-10, 10]">
  <func :value="x => a * x" domain="[-10, 10]" color="primary"/>
  {{ a }}
</plane>
  `.trim(),
  type: 'svg',
}

