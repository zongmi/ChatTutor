import { BaseAction } from '@chat-tutor/shared'
import { type } from 'arktype'

export const MermaidPageSetActionOptions = type({
  content: 'string',
})

export const MermaidPageSetAction = type.and(BaseAction, type({
  options: MermaidPageSetActionOptions
}))