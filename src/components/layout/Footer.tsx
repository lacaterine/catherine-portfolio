function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 Catherine Arciniegas
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/lacaterine"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-black"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/catherine-ruiz-330b1b353"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer