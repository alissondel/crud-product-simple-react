import { TextAreaData } from '../../interfaces/textarea'

export function TextArea({ id, name, label, value, onChange }: TextAreaData) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}:
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required
        rows={6}
        cols={33}
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
      />
    </div>
  )
}
