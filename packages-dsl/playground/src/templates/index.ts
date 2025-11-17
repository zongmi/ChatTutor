import { math } from './math'

export type Template = {
  id: string
  content?: string
  templates?: Template[]
  type: 'html' | 'svg'
}

export default [
  {
    id: 'math',
    templates: math
  }
] as Template[]