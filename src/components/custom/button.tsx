import { ButtonData } from '../../interfaces/button'

export function Button({ type, value, color, onClick }: ButtonData) {
  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      className={`bg-${color}-500 hover:bg-${color}-700 w-full cursor-pointer rounded px-4 py-2 font-bold text-white`}
    />
  )
}
