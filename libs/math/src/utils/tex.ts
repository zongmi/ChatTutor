import { theme } from '@dsl/utils-theme'
import { tag } from '@dsl/utils-canvas'
import katex from 'katex'

export function tex(input: string, color: string = 'primary') {
  const container = tag('g')
  const object = tag('foreignObject')
  object.attr('xmlns', 'http://www.w3.org/1999/xhtml')
  const div = document.createElement('div')
  div.style.color = theme.pallete(color)
  div.innerHTML = katex.renderToString(input, {
    output: 'mathml',
  })
  object.append(div)
  container.append(object.node())

  const mount = () => {
    const katexElement = div.querySelector('.katex')
    if (!katexElement) return
    const { width: w, height: h } = katexElement.getBoundingClientRect()
    object.attr('width', `${w * 2}`)
    object.attr('height', `${h * 2}`)
  }
  return [container.node(), mount] as [Element, () => void]
}