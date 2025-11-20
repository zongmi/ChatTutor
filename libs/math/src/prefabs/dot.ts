import { definePrefab, registerPrefab, watch } from '@dsl/renderer-core'
import { tag } from '@dsl/utils-canvas'
import { theme } from '@dsl/utils-theme'
import type { PlaneProvides } from './plane'
import { tex } from '../utils'

export interface DotAttributes {
  x: number
  y: number
  color?: string
  label?: string
  labelColor?: string
}

export const dot = definePrefab<'dot', DotAttributes, PlaneProvides>((context) => {
  return {
    name: 'dot',
    generator(attrs, _, { mount }) {
      console.log(context)
      const circle = tag('circle')
      circle.attr('r', '5')
      circle.attr('fill', theme.pallete(attrs.color ?? 'primary'))

      const root = tag('g')
      root.append(circle.node())
      if (attrs.label) {
        const [texElement, mountTex] = tex(attrs.label, theme.pallete(attrs.labelColor ?? attrs.color ?? 'primary'))
        root.append(texElement)
        mount(mountTex)
      }

      watch(() => context.aspectWidth, (value) => {
        root.attr('transform', `translate(${value * attrs.x}, ${context.aspectHeight * attrs.y})`)
      }, { immediate: true })
      watch(() => context.aspectHeight, (value) => {
        root.attr('transform', `translate(${context.aspectWidth * attrs.x}, ${value * attrs.y})`)
      }, { immediate: true })

      return root.node()
    }
  }
})

registerPrefab('dot', dot)
