import { definePrefab, registerPrefab, watch } from '@dsl/renderer-core'
import { tag } from '@dsl/utils-canvas'
import { theme } from '@dsl/utils-theme'
import type { PlaneProvides } from './plane'
import type { Vector2 } from '../utils'
import { tex } from '../utils'

export interface ArcAttributes {
  center: Vector2
  radius: number
  startAngle: number
  endAngle: number
  color?: string
  label?: string
  labelColor?: string
}

export const arc = definePrefab<'arc', ArcAttributes, PlaneProvides>((context) => {
  return {
    name: 'arc',
    generator(attrs, _, { mount }) {
      const root = tag('g')
      const color = theme.pallete(attrs.color ?? 'primary')
      
      const path = tag('path')
      path.attr('fill', 'none')
      path.attr('stroke', color)
      path.attr('stroke-width', '2')

      root.append(path.node())

      let labelElement: Element | null = null

      // Add label if specified
      if (attrs.label) {
        const [texElement, mountTex] = tex(attrs.label, theme.pallete(attrs.labelColor ?? attrs.color ?? 'primary'))
        labelElement = texElement
        root.append(texElement)
        mount(mountTex)
      }

      const updateArc = () => {
        const cx = context.aspectWidth * attrs.center[0]
        const cy = context.aspectHeight * attrs.center[1]
        const r = attrs.radius
        
        // Convert angles from degrees to radians
        const startAngle = (attrs.startAngle * Math.PI) / 180
        const endAngle = (attrs.endAngle * Math.PI) / 180
        
        // Calculate start and end points
        const startX = cx + r * Math.cos(startAngle)
        const startY = cy + r * Math.sin(startAngle)
        const endX = cx + r * Math.cos(endAngle)
        const endY = cy + r * Math.sin(endAngle)
        
        // Calculate angle difference
        let angleDiff = attrs.endAngle - attrs.startAngle
        // Normalize to [0, 360)
        while (angleDiff < 0) angleDiff += 360
        while (angleDiff >= 360) angleDiff -= 360
        
        const largeArcFlag = angleDiff > 180 ? 1 : 0
        
        // Create arc path
        path.attr('d', `M ${startX} ${startY} A ${r} ${r} 0 ${largeArcFlag} 1 ${endX} ${endY}`)

        // Position label at the middle of the arc
        if (attrs.label && labelElement) {
          const midAngle = ((attrs.startAngle + attrs.endAngle) / 2 * Math.PI) / 180
          const labelX = cx + (r + 15) * Math.cos(midAngle)
          const labelY = cy + (r + 15) * Math.sin(midAngle)
          labelElement.setAttribute('transform', `translate(${labelX}, ${labelY})`)
        }
      }

      watch(() => context.aspectWidth, updateArc, { immediate: true })
      watch(() => context.aspectHeight, updateArc, { immediate: true })

      return root.node()
    }
  }
})

registerPrefab('arc', arc)

