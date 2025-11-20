import { definePrefab, registerPrefab, watch } from '@dsl/renderer-core'
import { tag } from '@dsl/utils-canvas'
import { theme } from '@dsl/utils-theme'
import type { PlaneProvides } from './plane'
import type { Vector2 } from '../utils'

export interface ArrowAttributes {
  from: Vector2
  to: Vector2
  color?: string
}

export const arrow = definePrefab<'arrow', ArrowAttributes, PlaneProvides>((context) => {
  return {
    name: 'arrow',
    generator(attrs) {
      const color = theme.pallete(attrs.color ?? 'primary')
      const markerId = `arrowhead-${Math.random().toString(36).substr(2, 9)}`
      
      const line = tag('line')
      line.attr('stroke', color)
      line.attr('stroke-width', '2')
      line.attr('marker-end', `url(#${markerId})`)

      const root = tag('g')
      
      // Create arrowhead marker with unique ID
      const defs = tag('defs')
      const marker = tag('marker')
      marker.attr('id', markerId)
      marker.attr('markerWidth', '10')
      marker.attr('markerHeight', '7')
      marker.attr('refX', '9')
      marker.attr('refY', '3.5')
      marker.attr('orient', 'auto')
      const polygon = tag('polygon')
      polygon.attr('points', '0 0, 10 3.5, 0 7')
      polygon.attr('fill', color)
      marker.append(polygon.node())
      defs.append(marker.node())
      root.append(defs.node())
      root.append(line.node())

      watch(() => context.aspectWidth, () => {
        line.attr('x1', `${context.aspectWidth * attrs.from[0]}`)
        line.attr('x2', `${context.aspectWidth * attrs.to[0]}`)
      }, { immediate: true })
      watch(() => context.aspectHeight, () => {
        line.attr('y1', `${context.aspectHeight * attrs.from[1]}`)
        line.attr('y2', `${context.aspectHeight * attrs.to[1]}`)
      }, { immediate: true })

      return root.node()
    }
  }
})

registerPrefab('arrow', arrow)