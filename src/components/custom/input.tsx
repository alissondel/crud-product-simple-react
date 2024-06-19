import { InputData } from '../../interfaces/input'
export function Input({ id, name, label, type, value, onChange }: InputData) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}:
      </label>
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        required
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
      />
    </div>
  )
}
