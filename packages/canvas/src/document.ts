export type CanvasElementDocumentAttribute = {
  name: string
  description: string
  required: boolean
  default?: string
}

export type CanvasElementDocument = {
  name: string
  description: string
  attrs: CanvasElementDocumentAttribute[]
  rules?: string[]
}

export const canvasElementDocuments = new Map<string, CanvasElementDocument>()
export const registerCanvasElementDocument = (document: CanvasElementDocument) => {
  canvasElementDocuments.set(document.name, document)
}
export const unregisterCanvasElementDocument = (name: string) => {
  canvasElementDocuments.delete(name)
}