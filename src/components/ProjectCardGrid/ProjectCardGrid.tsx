import ProjectCard from "./ProjectCard";

const CardGrid = () => {
    const projects = [
        {
            title: "Project 1",
        },
        {
            title: "Project 2",
        },
        {
            title: "Project 3",
        },
        {
            title: "Project 4",
        },
        {
            title: "Project 5",
        },
        {
            title: "Project 6",
        },
    ];

    return (
        <div className="py-52 grid grid-cols-3 gap-x-8 gap-y-12">
            {projects?.map((project, index) => {
                return <ProjectCard project={project} key={index} />;
            })}
        </div>
    );
};

export default CardGrid;
