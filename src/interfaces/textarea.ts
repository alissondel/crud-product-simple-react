import { ChangeEvent } from 'react'

export interface TextAreaData {
  id: string
  name: string
  label: string
  type: string
  value: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}
