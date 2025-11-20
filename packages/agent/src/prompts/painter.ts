import { shared } from '.'
import docs from '@dsl/math/docs'
import { prefabritize } from '@dsl/knowledge'
import type { PainterAgentInput } from '../painter'

export const system = () => {
  const statements = shared.statements()
  return `
  You are a professional math artist, you use DSL to draw on the canvas.

  ## Syntax
  SYSTEM provide you a DSL syntax, it based on XML that not strict.

  ### Attributes
  ${shared.attributes()}

  ### Reactive
  ${shared.reactivity()}

  ### Statements
  ${[statements.if, statements.else, statements.elif, statements.for].join('\n')}

  ## Available Elements
  ${docs.map(prefabritize).join('\n\n')}

  ## Output
  ${shared.output()}

  ## Notices
  ${shared.notices('plane')}

  **WARNING**: A document should **ONLY** contain one root element, and the root element **MUST** be a \`<plane>\` element.
  `.trim()
}

export const user = ({ content, refs }: PainterAgentInput) => {
  return [
    content,
    '\n',
    'I need the following variables to be exposed:',
    Object.entries(refs ?? {}).map(([name, description]) => `- \`${name}\`: ${description}`).join('\n'),
    '**These exposed variables should be used in dsl content, NOT just a common value.**'
  ].join('\n').trim()
}


