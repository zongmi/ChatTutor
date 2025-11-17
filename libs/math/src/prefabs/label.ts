import { definePrefab, registerPrefab, watch } from '@dsl/renderer-core'
import { theme } from '@dsl/utils-theme'
import type { PlaneProvides } from './plane'
import { tex } from '../utils'

export interface LabelAttributes {
  x: number
  y: number
  content: string
  color?: string
}

export const label = definePrefab<'label', LabelAttributes, PlaneProvides>((context) => {
  return {
    name: 'label',
    generator(attrs, _, { mount }) {
      const [texElement, mountTex] = tex(attrs.content, theme.pallete(attrs.color ?? 'primary'))
      mount(mountTex)

      const root = texElement.parentElement ? texElement : texElement

      watch(() => context.aspectWidth, (value) => {
        root.setAttribute('transform', `translate(${value * attrs.x}, ${context.aspectHeight * attrs.y})`)
      })
      watch(() => context.aspectHeight, (value) => {
        root.setAttribute('transform', `translate(${context.aspectWidth * attrs.x}, ${value * attrs.y})`)
      })

      return root
    }
  }
})

registerPrefab('label', label)