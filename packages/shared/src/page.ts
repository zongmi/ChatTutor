import type { Action } from './action'

export enum PageType {

}

export interface Page<T extends Action = Action> {
  type: string | PageType
  title: string
  history: T[]
}
