import type { Action, Page, PageType } from '@chat-tutor/shared'
import type { MermaidPageSetActionOptions } from './action'

export type MermaidPage = Page<
  Action<typeof MermaidPageSetActionOptions.infer, PageType.MERMAID>,
  PageType.MERMAID
  >

export type MermaidPageAction = Action<typeof MermaidPageSetActionOptions.infer>
