import ProjectCard from './ProjectCard';
import { ArrowRight } from "lucide-react";

function Projects({ projects }) {
    return (
        <section id="projects" className="px-4 md:px-12 lg:px-24 py-8">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />               
                    ))}
                </div>

                <div className="text-center mt-12">
                <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/luxiay"
                >
                    Check My Github <ArrowRight size={16} />
                </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;