import type { Action, Page, PageType } from '@chat-tutor/shared'
import type { ElementActionOptions } from './element'

export type CanvasPageAction = 
  Action<typeof ElementActionOptions.infer>

export type CanvasPageExtends = {
  range: [number, number] // y axis range
  domain: [number, number] // x axis range
  axis: boolean
  grid: boolean
}

export type CanvasPage = Page<CanvasPageAction, PageType.CANVAS> & CanvasPageExtends
export type Canvas3DPage = Page<CanvasPageAction> & CanvasPageExtends