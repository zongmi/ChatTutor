import type { Page, PageType } from '@chat-tutor/shared'
import type { DocumentAction } from './element'

export type CanvasPageAction = DocumentAction

export type CanvasPage = Page<CanvasPageAction, PageType.CANVAS>
