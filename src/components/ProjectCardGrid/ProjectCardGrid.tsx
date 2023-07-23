import ProjectCard from "./ProjectCard";
import project1thumb from "../../assets/images/DSC00047-min.jpg";
import project2thumb from "../../assets/images/DSC00296-min.jpg";
import project3thumb from "../../assets/images/DSC00566-min.jpg";
import project4thumb from "../../assets/images/DSC00616-min.jpg";
import project5thumb from "../../assets/images/GP5-23-min.jpg";
import project6thumb from "../../assets/images/GP5-32-min.jpg";

const CardGrid = () => {
    const projects = [
        {
            title: "Project 1",
            thumbnail: project1thumb,
        },
        {
            title: "Project 2",
            thumbnail: project2thumb,
        },
        {
            title: "Project 3",
            thumbnail: project3thumb,
        },
        {
            title: "Project 4",
            thumbnail: project4thumb,
        },
        {
            title: "Project 5",
            thumbnail: project5thumb,
        },
        {
            title: "Project 6",
            thumbnail: project6thumb,
        },
    ];

    return (
        <div className="container py-52 grid grid-cols-2 gap-x-8 gap-y-20">
            {projects?.map((project, index) => {
                return <ProjectCard project={project} key={index} />;
            })}
        </div>
    );
};

export default CardGrid;
