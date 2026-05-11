const frontendSkills = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'TailwindCSS',
]

const tools = [
  'Git',
  'GitHub',
  'Figma',
  'Vite',
]

const learning = [
  'Python',
  'AI Fundamentals',
]

function SkillsSection() {
  return (
    <section className="border-t border-gray-200 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">
          Skills
        </p>

        <h2 className="mb-12 text-3xl md:text-4xl font-bold">
          Technologies and tools
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Tools
            </h3>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-gray-100 px-3 py-2 text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Learning
            </h3>

            <div className="flex flex-wrap gap-2">
              {learning.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-gray-100 px-3 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection