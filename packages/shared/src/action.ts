import { type } from 'arktype'

export const BaseAction = type({
  type: 'string',
  options: type.object
})

export type Action<T extends object = Record<string, unknown>> = typeof BaseAction.infer & {
  options: T
}
