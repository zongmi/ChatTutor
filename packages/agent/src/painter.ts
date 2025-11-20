import type { BaseAgentOptions } from './types'
import { generateText, message } from 'xsai'
import { painter } from './prompts'
import { parseRootDocumentInfo } from '@dsl/x'

const parse = (content: string) => {
  const doc = content
    .match(/```document[\s\S]*?```/gm)?.[0] ?? ''
  console.log(doc)
  
  return doc
    .replace(/```document/, '')
    .replace('```', '')
    .trim()
}

export interface PainterAgentOptions extends BaseAgentOptions {
  // page: CanvasPage
}

export type PainterAgentInput = {
  content: string
  refs?: Record<string, string>
}

export const createPainterAgent = (options: PainterAgentOptions) => {
  if (options.messages.length === 0 || options.messages[0].role !== 'system') {
    options.messages.unshift(
      message.system(painter.system())
    )
  }

  type Result = {
    content: string
    refs: Record<string, string>
  }
  return async (
    input: PainterAgentInput
  ): Promise<Result> => {
    options.messages.push(message.user(
      painter.user(input)
    ))
    const { text, messages } = await generateText({
      model: options.model,
      apiKey: options.apiKey,
      baseURL: options.baseURL,
      messages: options.messages
    })
    options.messages.length = 0
    options.messages.push(...messages)
    const content = parse(text ?? '')
    const { refs } = parseRootDocumentInfo(content)
    return {
      content,
      refs,
    }
  }
}
