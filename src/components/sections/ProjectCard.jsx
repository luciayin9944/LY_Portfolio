import { ArrowRight, ExternalLink, Github } from "lucide-react";
function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="p-6">
                <h2>{project.title}</h2>
                {/* <h3> • {project.category}</h3> */}
                <div className="flex flex-wrap gap-2 mb-4 text-left">
                    {project.tags.map((tag) => (
                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                            {tag}
                        </span>
                    ))}
                </div>
                <p>{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.gitURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <span>GitHub</span>
                        <Github size={20} />
                      </div>
                    </a>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;