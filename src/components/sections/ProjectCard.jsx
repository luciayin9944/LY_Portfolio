function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h2>{project.title}</h2>
            <h3>Tag:{project.category}</h3>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectCard;