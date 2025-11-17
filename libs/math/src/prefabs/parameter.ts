import { definePrefab, registerPrefab, watch } from '@dsl/renderer-core'
import { tag } from '@dsl/utils-canvas'
import { theme } from '@dsl/utils-theme'
import type { PlaneProvides } from './plane'
import type { Vector2 } from '../utils'

export interface ParameterAttributes {
  value: (t: number) => Vector2
  color?: string
  domain: Vector2
}

export const parameter = definePrefab<'parameter', ParameterAttributes, PlaneProvides>((context) => {
  return {
    name: 'parameter',
    generator(attrs) {
      const path = tag('path')
      path.attr('fill', 'none')
      path.attr('stroke', theme.pallete(attrs.color ?? 'primary'))
      path.attr('stroke-width', '2')

      const updatePath = () => {
        const [tMin, tMax] = attrs.domain
        const samples = 200
        const step = (tMax - tMin) / samples
        
        let pathData = ''
        for (let i = 0; i <= samples; i++) {
          const t = tMin + i * step
          const [x, y] = attrs.value(t)
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

      watch(() => context.aspectWidth, updatePath)
      watch(() => context.aspectHeight, updatePath)

      return path.node()
    }
  }
})

registerPrefab('parameter', parameter)