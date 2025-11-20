import type { Action, FullAction } from './action'
import type { BaseForm, FormType } from './form'

export enum PageType {
  TEXT = 'text',
  CANVAS = 'canvas',
  PAGE = 'page',
  MERMAID = 'mermaid',
}

export interface Page<T extends Action = FullAction, A extends string = string> {
  type: A
  title: string
  id?: string
  steps: T[]
  notes: string[]
  forms: BaseForm<FormType>[]
}
