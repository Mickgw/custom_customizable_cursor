import { CursorContext } from "../../context/CursorContext";
import { useContext } from "react";
import Cursor from "../Cursor";
import { AnimatePresence, motion } from "framer-motion";
import ArrowRightUp from "../svg/ArrowRightUp";

const ProjectCard = ({ project }: any) => {
    const { cursorType } = useContext(CursorContext);
    const { cursorChangeHandler } = useContext(CursorContext);

    const cursorWidth = 60;

    return (
        <>
            <Cursor
                name="project_card"
                width={cursorWidth}
                height={cursorWidth}
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
                            className="w-[60px] aspect-square flex items-center rounded-full z-[100] bg-black"
                        >
                            <ArrowRightUp className="-mt-1 scale-75" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Cursor>
            <a
                className="w-full aspect-[3/4] overflow-hidden relative group rounded-2xl"
                onMouseEnter={() => {
                    cursorChangeHandler("projectCard");
                }}
                onMouseLeave={() => {
                    cursorChangeHandler("");
                }}
            >
                <div className="relative w-full h-full">
                    <img
                        src={project?.thumbnail}
                        alt="project thumbnail"
                        loading="lazy"
                        className="absolute w-full h-full inset-0 object-cover group-hover:scale-[1.02] transition-all duration-500 ease-in-out"
                    />
                </div>
                <div className="opacity-0 group-hover:opacity-50 absolute inset-0 w-full h-full bg-black transition-all duration-500 ease-in-out" />
                <div className="z-10 absolute left-6 top-6">
                    <h3 className="opacity-0 group-hover:opacity-100 mb-4 text-white !text-[34px] transition-all duration-500 ease-in-out">
                        {project?.title}
                    </h3>
                    <h5 className="opacity-0 group-hover:opacity-100 z-10 text-white lowercase !font-thin transition-all duration-500 ease-in-out">
                        2023
                    </h5>
                </div>
            </a>
        </>
    );
};

export default ProjectCard;
