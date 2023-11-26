import ProjectCard from "./ProjectCard";
import projectthumb from "../../assets/images/project-card-thumb.jpg";
import Cursor from "../Cursor/Cursor";
import { AnimatePresence, motion } from "framer-motion";
import ArrowRightUp from "../svg/ArrowRightUp";
import { useContext } from "react";
import { CursorContext } from "../Cursor/context/CursorContext";
import { useInView } from "react-intersection-observer";

const ProjectCardGrid = () => {
    const { cursorType } = useContext(CursorContext);
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });

    const cursorWidth = 60;

    const projects = [
        {
            title: "Project 1",
            thumbnail: projectthumb,
        },
        {
            title: "Project 2",
            thumbnail: projectthumb,
        },
        {
            title: "Project 3",
            thumbnail: projectthumb,
        },
        {
            title: "Project 4",
            thumbnail: projectthumb,
        },
        {
            title: "Project 5",
            thumbnail: projectthumb,
        },
        {
            title: "Project 6",
            thumbnail: projectthumb,
        },
    ];

    return (
        <div id="project_list" ref={ref}>
            {inView && (
                <Cursor
                    name="project_card"
                    width={cursorWidth}
                    height={cursorWidth}
                    zIndex={20}
                    easingDuration={0.45}
                >
                    <AnimatePresence>
                        {cursorType === "projectCard" && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 0.2,
                                    },
                                }}
                                exit={{ opacity: 0, scale: 0 }}
                                className="w-[60px] aspect-square flex items-center justify-center rounded-full z-[100] bg-white mix-blend-difference"
                            >
                                <ArrowRightUp className="-mt-1 scale-75" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Cursor>
            )}

            <div className="grid grid-cols-2 gap-x-8 gap-y-20 relative">
                {projects?.map((project, index) => {
                    return <ProjectCard project={project} key={index} />;
                })}
            </div>
        </div>
    );
};

export default ProjectCardGrid;
