export function Footer() {
  return (
    <footer className="flex flex-col items-end bg-blue-500 py-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <p>
            &copy; {new Date().getFullYear()} Forms Online. Todos direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
