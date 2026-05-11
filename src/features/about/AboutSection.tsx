function AboutSection() {
  return (
    <section 
    id = 'about'
    className="border-t border-gray-200 py-20 md:py-24"
    >
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">
          About
        </p>

        <h2 className="mb-8 text-3xl md:text-4xl font-bold">
          Building thoughtful digital experiences
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-gray-600">
          <p>
            I am a frontend developer focused on React and building clear,
            functional interfaces with attention to user experience.
          </p>

          <p>
            My background in design allows me to approach development with both
            technical structure and visual thinking, creating interfaces that
            are intuitive and consistent.
          </p>

          <p>
            Currently, I am developing projects such as CareerTera, where I
            apply frontend best practices, scalable architecture, and reusable
            component systems.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection