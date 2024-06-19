import { Form } from './form'
import { Button } from '../../components/custom/button'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { URL_PRODUCTS } from '../../constants/url'
import { useConnection } from '../../hooks/useConnect'
import { InitialStateProduct } from './initialstate'
import { ToastError, ToastSucess } from '../../components/custom/toast'
import { ProductData } from '../../interfaces/product'
export function List() {
  const [formValue, setFormValue] = useState<ProductData>(InitialStateProduct)

  const [openModal, setOpenModal] = useState<boolean>(false)
  const { data, loading, error } = useFetch<ProductData[]>(URL_PRODUCTS)

  function toggleModal() {
    setOpenModal(!openModal)
  }

  function handleClick(product: ProductData | null) {
    if (product !== null) {
      setFormValue(product)
      toggleModal()
    } else {
      setFormValue(InitialStateProduct)
      toggleModal()
    }
  }

  async function Delete(id: string | undefined) {
    try {
      await useConnection(URL_PRODUCTS, 'DELETE', id)
      ToastSucess('Produto deletado com sucesso')
    } catch (error) {
      console.log(error)
      ToastError('Erro ao deletar produto')
    }
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-wrap items-center justify-between px-12 py-4">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Lista de Produto
        </h2>
        <button
          className="rounded bg-blue-500 px-4 py-3 font-bold text-white hover:bg-blue-700"
          onClick={() => handleClick(null)}
        >
          Cadastrar Produto
        </button>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 px-6 py-6">
        {loading && <div>Carregando....</div>}
        {error && <div>{error}</div>}
        {data &&
          data.map((product: ProductData) => (
            <div
              className="max-w-sm cursor-pointer overflow-hidden rounded bg-white shadow-lg"
              key={product.id}
            >
              <div className="flex items-center justify-center">
                <img
                  src={product.image}
                  alt="Sunset in the mountains"
                  className="h-56 w-40 text-center"
                />
              </div>
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{product.name}</div>
                <p className="mb-6 text-base text-gray-700">
                  {product.description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-8">
                  <span>R$ {product.price}</span>
                  <span className="text-blue-500">
                    {product.unity} Unidades
                  </span>
                </div>
              </div>
              <div className="flex flex-nowrap items-center justify-between gap-6 px-6 pb-2 pt-4">
                <Button
                  value="Editar"
                  type="button"
                  color="blue"
                  onClick={() => handleClick(product)}
                />
                <Button
                  value="Deletar"
                  type="button"
                  color="gray"
                  onClick={() => Delete(product.id)}
                />
              </div>
            </div>
          ))}
      </div>
      {openModal && (
        <Form
          open={openModal}
          setOpen={setOpenModal}
          onClose={toggleModal}
          formValue={formValue}
          setFormValue={setFormValue}
        />
      )}
    </div>
  )
}
