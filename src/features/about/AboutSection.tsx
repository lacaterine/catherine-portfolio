function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[#d9cbbd] bg-[#f5efe7] py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:gap-20">

        {/* Left column — Introduction */}
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#89796b]">
            01 / About me
          </p>

          <h2 className="mb-10 font-serif text-5xl font-normal leading-[1.1] tracking-tight text-[#49392f] md:text-6xl">
            Design thinking,
            <br />
            <span className="italic">digital building.</span>
          </h2>

          <div className="space-y-6 text-base leading-8 text-[#75685d] md:text-lg">
            <p>
              I am a frontend developer focused on React and building clear,
              functional interfaces with attention to user experience.
            </p>

            <p>
              My background in industrial and graphic design influences the
              way I approach development. I enjoy combining visual thinking,
              structure, and technology to create intuitive digital experiences.
            </p>

            <p>
              I am currently strengthening my skills in JavaScript,
              TypeScript, and React through hands-on projects, exploring
              reusable components, application architecture, and frontend
              best practices.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-12 bg-[#a58c77]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#89796b]">
              Design meets technology
            </span>
          </div>
        </div>

        {/* Right column — Temporary abstract artwork */}
        <div className="relative mx-auto w-full max-w-md">
          <div
            role="img"
            aria-label="Abstract composition of warm organic shapes and architectural shadows"
            className="relative aspect-[4/5] overflow-hidden bg-[#e4d5c5]"
          >
            {/* Background light */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_25%,#f8f0e6_0%,transparent_45%)]" />

            {/* Organic shape */}
            <div className="absolute -right-16 top-16 h-72 w-72 rounded-full bg-[#b99f88]/60 blur-[2px]" />

            <div className="absolute -bottom-20 -left-16 h-80 w-80 rounded-full bg-[#a68b75]/50 blur-[3px]" />

            {/* Architectural shadow */}
            <div className="absolute -left-10 top-0 h-full w-1/2 -skew-x-[18deg] bg-[#6f5847]/10" />

            <div className="absolute right-10 top-10 h-40 w-24 rotate-12 bg-[#f8f0e6]/40 blur-xl" />

            {/* Small editorial label */}
            <div className="absolute bottom-8 left-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#49392f]/70">
                A creative perspective
              </p>
              <p className="mt-2 font-serif text-2xl italic text-[#49392f]">
                Between disciplines.
              </p>
            </div>

            {/* Decorative border */}
            <div className="absolute inset-5 border border-[#f5efe7]/50" />
          </div>

          <p className="mt-4 text-right text-[10px] uppercase tracking-[0.2em] text-[#89796b]">
            Personal approach / 2026
          </p>
        </div>

      </div>
    </section>
  )
}

export default AboutSection