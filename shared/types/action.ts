import type { PageCreationAction, PageNoteAction, TextChunkAction, CanvasPageDrawStartAction, CanvasPageDrawEndAction } from '@chat-tutor/agent'
import type { CanvasPageAction } from '@chat-tutor/canvas'
import type { MermaidPageAction } from '@chat-tutor/mermaid'
import type { FullizeAction } from '@chat-tutor/shared'

export type AllAction = 
  | PageCreationAction
  | TextChunkAction
  | CanvasPageAction
  | FullizeAction<CanvasPageDrawStartAction>
  | FullizeAction<CanvasPageDrawEndAction>
  | FullizeAction<MermaidPageAction>
  | PageNoteAction