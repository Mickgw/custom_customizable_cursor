import ProjectCard from "./ProjectCard";
import project1thumb from "../../assets/images/GoodwoodDAY2-19-min.jpg";
import project2thumb from "../../assets/images/GoodwoodDAY2-50-min.jpg";
import project3thumb from "../../assets/images/GoodwoodDAY2-55-min.jpg";
import project4thumb from "../../assets/images/GoodwoodDAY2-74-min.jpg";
import project5thumb from "../../assets/images/GoodwoodDAY2-77-min.jpg";
import project6thumb from "../../assets/images/GoodwoodDAY2-85-min.jpg";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ProjectCardGrid = () => {
    useEffect(() => {
        gsap.to("#component", {
            scrollTrigger: {
                trigger: "#component",
                start: "top-=1400 top", // Start when bottom of viewport hits top of component
                end: "top-=250 top-=250",
                scrub: 1,
                markers: true,
            },
            y: -250,
            duration: 1,
        });
    }, []);

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
        <div id="component" className="rounded-t-[50px] bg-slate-100 mt-32">
            <div className="container py-32  grid grid-cols-2 gap-x-8 gap-y-20">
                {projects?.map((project, index) => {
                    return <ProjectCard project={project} key={index} />;
                })}
            </div>
        </div>
    );
};

export default ProjectCardGrid;
