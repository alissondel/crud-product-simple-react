import { Input } from '../../components/custom/input'
import { Button } from '../../components/custom/button'
import { TextArea } from '../../components/custom/textarea'
import { v4 as uuidv4 } from 'uuid'
import { useConnection } from '../../hooks/useConnect'
import { InitialStateProduct } from './initialstate'
import { URL_IMAGE, URL_PRODUCTS } from '../../constants/url'
import { ChangeEvent, FormEvent } from 'react'
import { ToastError, ToastSucess } from '../../components/custom/toast'
import { ProductData, ProductModalData } from '../../interfaces/product'

import Modal from '../../components/custom/modal'

export function Form({
  open,
  setOpen,
  onClose,
  formValue,
  setFormValue,
}: ProductModalData) {
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target

    if (name === 'description' || name === 'name') {
      setFormValue({
        ...formValue,
        [name]: value,
      })
    }

    if (/^\d*\.?\d*$/.test(value)) {
      setFormValue({
        ...formValue,
        [name]: value,
      })
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const { id, ...rest } = formValue

    if (!id) {
      Create({
        ...rest,
        id: uuidv4(),
        image: URL_IMAGE,
      })
    } else {
      Update({
        ...rest,
        id,
        image: URL_IMAGE,
      })
    }
  }

  async function Create(data: ProductData) {
    try {
      await useConnection(URL_PRODUCTS, 'POST', undefined, data)
      ToastSucess('Produto cadastrado com sucesso')
      setFormValue(InitialStateProduct)
      onClose(false)
    } catch (error) {
      console.log(error)
      ToastError('Erro ao cadastrar produto')
    }
  }

  async function Update(data: ProductData) {
    try {
      await useConnection(URL_PRODUCTS, 'PUT', data?.id, data)
      ToastSucess('Produto atualizado com sucesso')
      setFormValue(InitialStateProduct)
      onClose(false)
    } catch (error) {
      console.log(error)
      ToastError('Erro ao atualizado produto')
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      setOpen={setOpen}
      title="Cadastrar Produto"
    >
      <div className="mt-8 flex w-[40vh] flex-col flex-wrap justify-center">
        <form onSubmit={handleSubmit}>
          <Input
            id="name"
            name="name"
            type="text"
            label="Nome"
            value={formValue?.name || ''}
            onChange={handleChange}
          />
          <TextArea
            id="description"
            name="description"
            type=""
            label="Descrição"
            value={formValue?.description || ''}
            onChange={handleChange}
          />
          <Input
            id="unity"
            name="unity"
            type="number"
            label="Unidades"
            value={formValue?.unity || ''}
            onChange={handleChange}
          />
          <Input
            id="price"
            name="price"
            type="number"
            label="Preço"
            value={formValue?.price || ''}
            onChange={handleChange}
          />
          <div className="my-6">
            <Button type="submit" value="Enviar" color="blue" />
          </div>
        </form>
      </div>
    </Modal>
  )
}
