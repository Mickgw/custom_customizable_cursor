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
                // markers: true,
            },
            y: -250,
            duration: 1,
        });
    }, []);

    const projects = [
        {
            title: "Goodwood FOS",
            thumbnail: project1thumb,
        },
        {
            title: "Goodwood FOS",
            thumbnail: project2thumb,
        },
        {
            title: "Goodwood FOS",
            thumbnail: project3thumb,
        },
        {
            title: "Goodwood FOS",
            thumbnail: project4thumb,
        },
        {
            title: "Goodwood FOS",
            thumbnail: project5thumb,
        },
        {
            title: "Goodwood FOS",
            thumbnail: project6thumb,
        },
    ];

    return (
        <div
            id="component"
            className="rounded-t-[50px] bg-white border-[1px] border-slate-100 mt-32"
            style={{ boxShadow: "0px -3px 24px -1px rgba(0,0,0,0.05)" }}
        >
            <div className="container py-32">
                <div className="mb-56 flex gap-12">
                    <div className="w-1/2">
                        <div className="w-[60px] aspect-square rounded-full bg-slate-500 flex items-center justify-center">
                            <span className="text-[22px] font-bold text-white">
                                2
                            </span>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h2 className="mb-8">Goodwood</h2>
                        <p className="text-[20px] mb-4 font-thin">
                            In the summer of 2023, engines roared to life as car
                            enthusiasts from around the globe converged upon the
                            picturesque grounds of Goodwood for the annual
                            Festival of Speed. The air was filled with
                            excitement and the sweet scent of gasoline as sleek
                            supercars, vintage classics, and futuristic
                            prototypes lined up for a show unlike any other.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-20">
                    {projects?.map((project, index) => {
                        return <ProjectCard project={project} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectCardGrid;
