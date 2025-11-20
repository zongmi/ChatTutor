import { definePrefab, registerPrefab, watch } from '@dsl/renderer-core'
import { tag } from '@dsl/utils-canvas'
import { theme } from '@dsl/utils-theme'
import type { PlaneProvides } from './plane'
import type { Vector2 } from '../utils'

export interface FuncAttributes {
  value: (x: number) => number
  color?: string
  domain: Vector2
}

export const func = definePrefab<'func', FuncAttributes, PlaneProvides>((context) => {
  return {
    name: 'func',
    generator(attrs) {
      const path = tag('path')
      path.attr('fill', 'none')
      path.attr('stroke', theme.pallete(attrs.color ?? 'primary'))
      path.attr('stroke-width', '2')

      const updatePath = () => {
        const [xMin, xMax] = attrs.domain
        const samples = 200
        const step = (xMax - xMin) / samples
        
        let pathData = ''
        for (let i = 0; i <= samples; i++) {
          const x = xMin + i * step
          const y = attrs.value(x)
          const px = context.aspectWidth * x
          const py = context.aspectHeight * y
          
          if (i === 0) {
            pathData += `M ${px} ${py}`
          } else {
            pathData += ` L ${px} ${py}`
          }
        }
        
        path.attr('d', pathData)
      }
      watch(() => context.aspectWidth, updatePath, { immediate: true })
      watch(() => context.aspectHeight, updatePath, { immediate: true })

      return path.node()
    }
  }
})

registerPrefab('func', func)