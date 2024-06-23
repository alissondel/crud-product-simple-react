import { SearchData } from '../../interfaces/search'

export function Search(props: SearchData) {
  return (
    <div className="flex items-center rounded-md border border-gray-300 p-1">
      <input
        {...props}
        type="text"
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="flex-grow p-2 outline-none"
      />
      <button className="p-2">
        <svg
          className="h-6 w-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </button>
    </div>
  )
}
