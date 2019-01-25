import * as React from 'react'

type Option = {
  id: any,
  value: any
}

type OnChange = (value?: string) => void

export interface SelectorProps {
  className?: string,
  options: Option[],
  value?: string,
  onChange?: OnChange
}

export type ObjectOptionsType = {
  [key: string]: ObjectOptionType
}

export type ObjectOptionType = {
  id?: string,
  value: string,
  items?: ObjectOptionsType,
  Selector?: React.ComponentType<SelectorProps>
}

export type ArrayOptionType = {
  id: string,
  value: string,
  items?: ArrayOptionsType,
  Selector?: React.ComponentType<SelectorProps>
}

export type ArrayOptionsType = ArrayOptionType[]

export type OptionsType = ArrayOptionsType | ObjectOptionsType

export type NullOption = {
  id: string,
  value: string,
  display: boolean
}

export type OptionFormateType = (option: any) => any
