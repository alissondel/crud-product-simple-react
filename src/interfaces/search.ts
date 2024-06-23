import { ChangeEvent, ComponentProps } from 'react'

export interface SearchData extends ComponentProps<'input'> {
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
