export interface ModalData {
  open: boolean
  setOpen: (open: boolean) => void
  onClose: (setOpen: boolean) => void
  children: any; //eslint-disable-line
  title: string
}
