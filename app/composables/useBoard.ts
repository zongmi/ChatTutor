import { createCanvasRenderer } from '@chat-tutor/canvas'
import type { CanvasPage, CanvasPageAction } from '@chat-tutor/canvas'
import type { FullAction } from '@chat-tutor/shared'
import { PageType } from '@chat-tutor/shared'
import type { PageCreationAction } from '~~/packages/agent/src'

export type Page = CanvasPage

export type ActionHandler = (action: FullAction) => void

export const useBoard = () => {
  const board = ref<HTMLElement | null>(null)
  const currentPages = ref<Page[]>([])
  const page = ref<string | null>(null)

  onMounted(() => {
    watch(page, (id) => {
      nextTick(() => {
        if (!id) return
        const ctn = board.value!.querySelector(`#${id}`)
        if (!ctn) return
        [...board.value!.childNodes].forEach(child => {
          (<HTMLElement>child).style.display = 'none'
        })
        ;(<HTMLElement>ctn).style.display = 'block'
      })
    })
  })

  const canvasRendererMap = new Map<string, ReturnType<typeof createCanvasRenderer>>()

  const loadCanvasPage = (page: CanvasPage) => {
    const container = document.createElement('div')
    container.id = page.id!
    container.className = 'jxgbox'
    container.style.width = '90%'
    container.style.height = '500px'
    container.style.display = 'flex'
    board.value!.appendChild(container)
    const renderer = createCanvasRenderer(container.id, {
      range: page.range,
      domain: page.domain,
      axis: page.axis,
      grid: page.grid,
    })
    canvasRendererMap.set(page.id!, renderer)
    renderer.load(page.steps)
  }

  const loadPage = (p: Page) => {
    currentPages.value.push(p)
    if (p.type === PageType.CANVAS) {
      loadCanvasPage(p)
    }
    page.value = p.id!
  }
  
  const loadPages = (pages: Page[]) => pages.forEach(loadPage)

  const handleAction: ActionHandler = (action) => {
    if (['element'].includes(action.type)) {
      handleCanvasAction(action)
    } else if (action.type === 'page') {
      handlePageCreationAction(action as PageCreationAction)
    }
  }

  const handleCanvasAction: ActionHandler = (action) => {
    const page = currentPages.value.find(p => p.id === action.page)
    console.log('page', page)
    if (!page) return
    const renderer = canvasRendererMap.get(page.id!)
    console.log('renderer', renderer)
    if (renderer) {
      console.log('renderer', renderer)
      renderer.load([action as CanvasPageAction])
    }
  }

  const handlePageCreationAction = (action: PageCreationAction) => {
    loadPage(action.options as CanvasPage)
  }

  return {
    board,
    page,
    currentPages,
    handleAction,
    loadPage,
    loadPages,
  }
}
