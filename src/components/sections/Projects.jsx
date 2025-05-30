import ProjectCard from './ProjectCard';

function Projects({ projects }) {
    return (
        <section className="px-4 md:px-12 lg:px-24 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* </section><div className="projects-grid"> */}
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />               
            ))}
          </div>
        </section>
    );
}

export default Projects;