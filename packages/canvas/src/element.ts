import type { Action } from '@chat-tutor/shared'

export type DocumentAction = Action<{
  content: string
}, 'document'>
