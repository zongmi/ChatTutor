export enum FormType {
  SLIDER = 'slider',
}

export type BaseForm<T extends FormType> = {
  type: T
  bind: string
  title: string
}

export type SliderForm = BaseForm<FormType.SLIDER> & {
  min: number
  max: number
  step: number
  value: number
}
