const ProjectCard = ({ project } : any) => {
    return (
        <a className="w-full aspect-square overflow-hidden relative">
            {project?.title}
        </a>
    );
};

export default ProjectCard;
