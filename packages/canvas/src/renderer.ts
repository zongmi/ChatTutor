import { JSXGraph, type Board } from 'jsxgraph'
import type { CanvasPageAction } from './page'
import type { ElementAction } from './element'

export type ElementStructor = <T extends Record<string, unknown>>(options: T, getter: ElementGetter) => 
  (board: Board) => unknown
export type ElementPool = Map<string, unknown>
export type ElementGetter = <T = unknown>(id: string) => T
export const elements = new Map<string, ElementStructor>()
export const registerElement = (name: string, constructor: ElementStructor) => {
  elements.set(name, constructor)
}

export const createCanvasRenderer = (id: string) => {
  const board = JSXGraph.initBoard(id, {
    boundingBox: [0, 0, 100, 100],
    grid: true,
  })
  const pool = new Map<string, unknown>()
  const getElement: ElementGetter = <T = unknown>(id: string) => {
    return pool.get(id) as T
  }

  const add = (action: typeof ElementAction.infer) => {
    const element = elements.get(action.options.name)
    if (element) {
      const setup = element(action.options, getElement)
      pool.set(action.options.id, setup(board))
    }
  }

  const load = (actions: CanvasPageAction[]) => {
    for (const action of actions) {
      if (action.type === 'element') add(action)
    }
  }

  return {
    board,
    getElement,
    load,
    add,
  }
}
