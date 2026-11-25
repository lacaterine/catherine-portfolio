import type { Project } from '../types/Project'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const initials = project.title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 3)

  return (
    <article className="group overflow-hidden border border-[#d9cbbd] bg-[#f5efe7] transition-all duration-300 hover:-translate-y-1">

      {/* Visual preview */}
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-[#e4d5c5]">

        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#b99f88]/40 blur-2xl transition-transform duration-700 group-hover:scale-125" />

        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#8e7561]/20 blur-2xl" />

        <div className="absolute inset-5 border border-[#89796b]/20" />

        <span className="relative z-10 font-serif text-8xl text-[#49392f] transition-transform duration-500 group-hover:scale-110 md:text-9xl">
          {initials}
        </span>

        <span className="absolute left-8 top-8 text-[10px] uppercase tracking-[0.2em] text-[#89796b]">
          Project / {String(project.id).padStart(2, '0')}
        </span>

        <span className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.2em] text-[#89796b]">
          Digital experience
        </span>

      </div>

      {/* Project information */}
      <div className="p-6 md:p-8">

        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl text-[#49392f] md:text-3xl">
            {project.title}
          </h3>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Explore ${project.title}`}
              className="text-xl text-[#89796b] transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1"
            >
              ↗
            </a>
          )}
        </div>

        <p className="mb-8 text-sm leading-7 text-[#75685d]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[#d9cbbd] pt-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs uppercase tracking-wider text-[#89796b]"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </article>
  )
}

export default ProjectCard