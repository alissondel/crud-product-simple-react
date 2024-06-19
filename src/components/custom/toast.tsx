import { toast } from 'react-toastify'
import { ToastData } from '../../interfaces/toast'

export const ToastSucess = (message: string) =>
  toast.success(message, {
    position: 'top-center',
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

export const ToastError = (message: string) =>
  toast.error(message, {
    position: 'top-center',
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

export const ToastConfirmDelete = ({ message, onClick }: ToastData) =>
  toast(
    <div>
      <p>{message}</p>
      <div>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={onClick}
        >
          Confirmar
        </button>
        <button
          className="rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
          onClick={onClick}
        >
          Cancelar
        </button>
      </div>
    </div>,
    {
      position: 'top-center',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    },
  )
