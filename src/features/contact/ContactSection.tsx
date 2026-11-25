function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-[#6b5545] bg-[#49392f] py-24 text-[#f5efe7] md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Section heading */}
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#c2a990]">
          04 / Get in touch
        </p>

        {/* Main message */}
        <div className="max-w-4xl">
          <h2 className="font-serif text-6xl font-normal leading-[1.05] tracking-tight md:text-8xl">
            Let’s create
            <br />
            <span className="italic text-[#c2a990]">
              something meaningful.
            </span>
          </h2>

          <p className="mt-10 max-w-xl text-base leading-8 text-[#d5c8bb] md:text-lg">
            I am currently looking for frontend development opportunities
            and collaborations. If you have a project or opportunity in mind,
            I would love to hear from you.
          </p>

          {/* Email button */}
          <a
            href="mailto:ladycatherine.ar@gmail.com"
            className="mt-10 inline-flex items-center gap-4 border-b border-[#c2a990] pb-3 text-sm uppercase tracking-[0.15em] text-[#f5efe7] transition-all duration-300 hover:gap-7 hover:text-[#c2a990]"
          >
            Get in touch
            <span className="text-lg">↗</span>
          </a>
        </div>

        {/* Footer information */}
        <div className="mt-24 flex flex-col justify-between gap-10 border-t border-[#806b5b] pt-8 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#c2a990]">
              Find me elsewhere
            </p>

            <div className="flex flex-wrap gap-8 text-sm text-[#f5efe7]">
              <a
                href="https://github.com/lacaterine"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#c2a990]"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/catherine-ruiz-330b1b353"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#c2a990]"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="text-xs uppercase tracking-[0.15em] text-[#c2a990]">
            <p>© 2026 Catherine Arciniegas</p>
            <p className="mt-2">Designed & built with care.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection