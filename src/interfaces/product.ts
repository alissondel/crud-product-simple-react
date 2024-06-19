export interface ProductData {
  id: string
  name: string
  description: string
  unity: string
  price: string
  image: string
}

export type TProductData = Omit<ProductData, 'id'>

export interface ProductModalData {
  open: boolean
  setOpen: (open: boolean) => void
  onClose: (setOpen: boolean) => void
  formValue: ProductData
  setFormValue(product: ProductData): void
}
