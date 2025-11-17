import { definePrefab, registerPrefab, watch } from '@dsl/renderer-core'
import { tag } from '@dsl/utils-canvas'
import { theme } from '@dsl/utils-theme'
import type { PlaneProvides } from './plane'
import type { Vector2 } from '../utils'

export interface PolygonAttributes {
  type: 'graph' | 'line'
  points: Vector2[]
  color?: string
}

export const polygon = definePrefab<'polygon', PolygonAttributes, PlaneProvides>((context) => {
  return {
    name: 'polygon',
    generator(attrs) {
      const elem = attrs.type === 'graph' ? tag('polygon') : tag('polyline')
      elem.attr('stroke', theme.pallete(attrs.color ?? 'primary'))
      elem.attr('stroke-width', '2')
      elem.attr('fill', attrs.type === 'graph' ? theme.pallete(attrs.color ?? 'primary') : 'none')
      if (attrs.type === 'graph') {
        elem.attr('fill-opacity', '0.3')
      }

      const updatePoints = () => {
        const points = attrs.points
          .map(([x, y]) => `${context.aspectWidth * x},${context.aspectHeight * y}`)
          .join(' ')
        elem.attr('points', points)
      }

      watch(() => context.aspectWidth, updatePoints)
      watch(() => context.aspectHeight, updatePoints)

      return elem.node()
    }
  }
})

registerPrefab('polygon', polygon)