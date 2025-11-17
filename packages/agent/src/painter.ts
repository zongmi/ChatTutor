import type { AgentChunker, BaseAgentOptions } from './types'
import { generateText, message, streamText, type StreamTextEvent } from 'xsai'
import { painter } from './prompts'

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

export const createPainterAgent = (options: PainterAgentOptions) => {
  if (options.messages.length === 0 || options.messages[0].role !== 'system') {
    options.messages.unshift(
      message.system(painter.system())
    )
  }

  return async (
    input: string
  ): Promise<string> => {
    options.messages.push(message.user(input))
    const { text, messages } = await generateText({
      model: options.model,
      apiKey: options.apiKey,
      baseURL: options.baseURL,
      messages: options.messages
    })
    options.messages.length = 0
    options.messages.push(...messages)
    return parse(text ?? '')
  }
}
