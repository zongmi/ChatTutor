import { type } from 'arktype'
import { BaseAction } from '@chat-tutor/shared'

export const ElementActionOptions = type({
  name: 'string',
  id: 'string',
  attrs: type.object
})

export const ElementAction = type.and(BaseAction, type({
  options: ElementActionOptions
}))

export type Element = typeof ElementActionOptions.infer
