import type { Action, Page } from '@chat-tutor/shared'
import type { ElementActionOptions } from './element'

export type CanvasPageAction = 
  Action<typeof ElementActionOptions.infer>

export type CanvasPage = Page<CanvasPageAction>
export type Canvas3DPage = Page<CanvasPageAction>