export const tag = (name: string) => {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name)
  element.style.vectorEffect = 'non-scaling-stroke'
  const append = (...elements: Element[]) => {
    element.append(...elements)
    return self
  }
  const node = () => element
  const attr = (key: string, value: string) => {
    element.setAttribute(key, value)
    return self
  }

  const self = {
    append,
    node,
    attr,
  }

  return self
}