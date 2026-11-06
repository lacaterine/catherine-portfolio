import type { Project } from '../types/Project'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="transform rounded-2xl border border-gray-200 p-5 md:p-6 transition duration-300 hover:-translate-y-1 hover:border-black">
      <h3 className="mb-3 text-xl md:text-2xl font-semibold">
        <a href={project.link}>{project.title}</a>
      </h3>

      <p className="mb-6 text-gray-600">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard