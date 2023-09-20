import ProjectCard from "./ProjectCard";
import projectthumb from "../../assets/images/project-card-thumb.jpg";

const ProjectCardGrid = () => {
    const projects = [
        {
            title: "Project title",
            thumbnail: projectthumb,
        },
        {
            title: "Project title",
            thumbnail: projectthumb,
        },
        {
            title: "Project title",
            thumbnail: projectthumb,
        },
        {
            title: "Project title",
            thumbnail: projectthumb,
        },
        {
            title: "Project title",
            thumbnail: projectthumb,
        },
        {
            title: "Project title",
            thumbnail: projectthumb,
        },
    ];

    return (
        <div
            id="project_list"
            className="rounded-t-[50px] bg-black mt-32"
            style={{ boxShadow: "0px -3px 24px -1px rgba(0,0,0,0.05)" }}
        >
            <div className="container py-32">
                <div className="grid grid-cols-2 gap-x-8 gap-y-20 relative">
                    {projects?.map((project, index) => {
                        return <ProjectCard project={project} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectCardGrid;
