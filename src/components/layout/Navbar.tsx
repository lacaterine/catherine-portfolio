function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-lg font-semibold">
          Catherine Arciniegas
        </h1>

        <ul className="flex gap-6 text-sm font-medium">
         
          <li>
            <a
                href="#projects"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md"
                >
                Projects
            </a>
          </li>

          <li>
            <a 
            href="#about"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md">
              About
            </a>
          </li>
          
          <li>
            <a 
            href="#contact"
className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar