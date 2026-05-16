import OpenAI from 'openai'
import { AI_SYSTEM_PROMPT } from './prompts'

export interface StudyAssistantMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface StudyAssistantOptions {
  apiKey: string
  model?: string
  maxTokens?: number
  context?: {
    bookTitle?: string
    civilization?: string
    concept?: string
  }
}

/**
 * Create a study assistant conversation session.
 * Always includes source citations and confidence levels in responses.
 */
export async function createStudyAssistant(
  messages: StudyAssistantMessage[],
  options: StudyAssistantOptions
): Promise<string> {
  const client = new OpenAI({ apiKey: options.apiKey })

  const contextNote = options.context
    ? `\n\nCurrent study context: ${JSON.stringify(options.context)}`
    : ''

  const response = await client.chat.completions.create({
    model: options.model || 'gpt-4o',
    max_tokens: options.maxTokens || 2000,
    messages: [
      {
        role: 'system',
        content: AI_SYSTEM_PROMPT + contextNote,
      },
      ...messages,
    ],
  })

  return response.choices[0]?.message?.content || 'No response generated.'
}
