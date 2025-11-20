import { definePrefab, registerPrefab, watch } from '@dsl/renderer-core'
import { tag } from '@dsl/utils-canvas'
import { theme } from '@dsl/utils-theme'
import type { PlaneProvides } from './plane'
import type { Vector2 } from '../utils'

export interface LineAttributes {
  from: Vector2
  to: Vector2
  color?: string
}

export const line = definePrefab<'line', LineAttributes, PlaneProvides>((context) => {
  return {
    name: 'line',
    generator(attrs) {
      const color = theme.pallete(attrs.color ?? 'primary')
      
      const lineElement = tag('line')
      lineElement.attr('stroke', color)
      lineElement.attr('stroke-width', '2')

      watch(() => context.aspectWidth, () => {
        lineElement.attr('x1', `${context.aspectWidth * attrs.from[0]}`)
        lineElement.attr('x2', `${context.aspectWidth * attrs.to[0]}`)
      }, { immediate: true })
      watch(() => context.aspectHeight, () => {
        lineElement.attr('y1', `${context.aspectHeight * attrs.from[1]}`)
        lineElement.attr('y2', `${context.aspectHeight * attrs.to[1]}`)
      }, { immediate: true })

      return lineElement.node()
    }
  }
})

registerPrefab('line', line)

