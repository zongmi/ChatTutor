import { definePrefab, registerPrefab, watch } from '@dsl/renderer-core'
import { tag } from '@dsl/utils-canvas'
import { theme } from '@dsl/utils-theme'
import type { PlaneProvides } from './plane'
import type { Vector2 } from '../utils'
import { tex } from '../utils'

export interface AngleAttributes {
  start: Vector2
  end: Vector2
  origin: Vector2
  color?: string
  label?: string
}

export const angle = definePrefab<'angle', AngleAttributes, PlaneProvides>((context) => {
  return {
    name: 'angle',
    generator(attrs, _, { mount }) {
      const root = tag('g')
      
      // Calculate angle arc
      const radius = 30 // Fixed radius for the angle arc
      const color = theme.pallete(attrs.color ?? 'primary')
      
      const path = tag('path')
      path.attr('fill', color)
      path.attr('fill-opacity', '0.2')
      path.attr('stroke', color)
      path.attr('stroke-width', '2')

      root.append(path.node())

      let labelElement: Element | null = null

      // Add label if specified
      if (attrs.label) {
        const [texElement, mountTex] = tex(attrs.label, color)
        labelElement = texElement
        root.append(texElement)
        mount(mountTex)
      }

      const updateArc = () => {
        const ox = context.aspectWidth * attrs.origin[0]
        const oy = context.aspectHeight * attrs.origin[1]
        
        // Calculate angles
        const startAngle = Math.atan2(
          context.aspectHeight * attrs.start[1] - oy,
          context.aspectWidth * attrs.start[0] - ox
        )
        const endAngle = Math.atan2(
          context.aspectHeight * attrs.end[1] - oy,
          context.aspectWidth * attrs.end[0] - ox
        )

        // Determine the direction and size of the arc
        let angleDiff = endAngle - startAngle
        // Normalize angle difference to [-π, π]
        while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI
        while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI
        
        // Check if it's a right angle (90 degrees = π/2 radians)
        const isRightAngle = Math.abs(Math.abs(angleDiff) - Math.PI / 2) < 0.1
        
        if (isRightAngle) {
          // Draw a right angle corner (square)
          const size = radius * 0.5 // Size of the right angle marker
          const x1 = ox + size * Math.cos(startAngle)
          const y1 = oy + size * Math.sin(startAngle)
          const x2 = ox + size * Math.cos(endAngle)
          const y2 = oy + size * Math.sin(endAngle)
          const cornerX = x1 + (x2 - ox)
          const cornerY = y1 + (y2 - oy)
          
          // Create a square path
          path.attr('d', `M ${x1} ${y1} L ${cornerX} ${cornerY} L ${x2} ${y2}`)
          path.attr('fill', 'none')
        } else {
          // Draw normal arc
          const startX = ox + radius * Math.cos(startAngle)
          const startY = oy + radius * Math.sin(startAngle)
          const endX = ox + radius * Math.cos(endAngle)
          const endY = oy + radius * Math.sin(endAngle)
          
          const largeArcFlag = Math.abs(angleDiff) > Math.PI ? 1 : 0
          const sweepFlag = angleDiff > 0 ? 1 : 0

          // Create path with fill: move to origin, line to start, arc to end, close path
          path.attr('d', `M ${ox} ${oy} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY} Z`)
          path.attr('fill', color)
        }

        // Position label at the middle of the arc
        if (attrs.label && labelElement) {
          const midAngle = startAngle + angleDiff / 2
          const labelX = ox + (radius + 15) * Math.cos(midAngle)
          const labelY = oy + (radius + 15) * Math.sin(midAngle)
          labelElement.setAttribute('transform', `translate(${labelX}, ${labelY})`)
        }
      }

      watch(() => context.aspectWidth, updateArc, { immediate: true })
      watch(() => context.aspectHeight, updateArc, { immediate: true })

      return root.node()
    }
  }
})

registerPrefab('angle', angle)