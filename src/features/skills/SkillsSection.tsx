const skillGroups = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building interfaces and digital experiences.',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
  },
  {
    number: '02',
    title: 'Development Tools',
    description: 'Tools for designing and building applications.',
    skills: [
      'Git',
      'GitHub',
      'Figma',
      'Vite',
    ],
  },
  {
    number: '03',
    title: 'Currently Exploring',
    description: 'Expanding my knowledge through practice.',
    skills: [
      'Python',
      'AI Fundamentals',
    ],
  },
]

function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-[#d9cbbd] bg-[#f5efe7] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Section heading */}
        <div className="mb-16 md:mb-20">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#89796b]">
            02 / My toolkit
          </p>

          <h2 className="font-serif text-5xl font-normal leading-tight tracking-tight text-[#49392f] md:text-7xl">
            Technologies
            <br />
            <span className="italic">and tools.</span>
          </h2>
        </div>

        {/* Skills groups */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="border-t border-[#b9a594] pt-6"
            >
              <div className="mb-10 flex items-start justify-between">
                <span className="text-xs tracking-widest text-[#a58c77]">
                  {group.number}
                </span>

                <span className="text-xs text-[#a58c77]">
                  ↗
                </span>
              </div>

              <h3 className="mb-3 font-serif text-2xl text-[#49392f]">
                {group.title}
              </h3>

              <p className="mb-8 text-sm leading-relaxed text-[#89796b]">
                {group.description}
              </p>

              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="group flex items-center justify-between border-b border-[#e3d8cc] pb-3 text-base text-[#75685d] transition-all duration-300 hover:border-[#89796b] hover:pl-2 hover:text-[#49392f]"
                  >
                    <span>{skill}</span>

                    <span className="translate-x-[-5px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      ↗
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-20 flex items-center gap-4">
          <span className="h-px w-12 bg-[#a58c77]" />

          <p className="text-xs uppercase tracking-[0.2em] text-[#89796b]">
            Always learning, always building.
          </p>
        </div>

      </div>
    </section>
  )
}

export default SkillsSection