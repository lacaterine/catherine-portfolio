import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'

function ProjectsSection() {
  return (
    <section 
    id = 'projects'
    className="py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">
            Projects
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Selected Work
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection