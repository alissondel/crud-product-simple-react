import { FaBars } from 'react-icons/fa6'

export function Navbar() {
  return (
    <nav className="flex justify-between bg-white px-8 py-6 dark:bg-slate-800">
      <a className="cursor-pointer pt-[2px] text-xl font-bold text-slate-900 hover:text-blue-500 dark:text-white">
        Forms Online
      </a>
      <ul className="hidden items-center justify-between gap-6 md:flex">
        <li className="text-slate-900 hover:text-blue-500 dark:text-white">
          Olá, Alisson!
        </li>
        <li className="cursor-pointer font-bold text-slate-900 hover:text-blue-500 dark:text-white">
          Configurações
        </li>
        <li className="cursor-pointer font-bold text-slate-900 hover:text-blue-500 dark:text-white">
          Sair
        </li>
      </ul>
      <div className="flex items-center justify-center md:hidden">
        <span className="cursor-pointer text-xl text-white hover:text-blue-500">
          <FaBars />
        </span>
      </div>
    </nav>
  )
}
