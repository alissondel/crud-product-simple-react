import { ChangeEvent } from 'react'

export interface InputData {
  id: string
  name: string
  label: string
  type: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
