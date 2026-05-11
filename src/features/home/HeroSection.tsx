function HeroSection() {
  return (
    <section 
    id = 'home' 
    className="flex min-h-[80vh] items-center"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-500">
          Frontend Developer
        </p>

        <h1 className="mb-6 max-w-3xl text-4xl md:text-6xl font-bold leading-tight">
          Frontend Developer | React & UI Design
        </h1>

        <p className="mb-8 max-w-2xl text-base md:text-lg text-gray-600">
          I build clear and functional interfaces focused on user experience.
        </p>

        <a 
            href="#projects"
            className="inline-block transform rounded-lg bg-black px-6 py-3 text-white transition hover:-translate-y-0.5 opacity-90"
        >
          View Projects
        </a>
      </div>
    </section>
  )
}

export default HeroSection