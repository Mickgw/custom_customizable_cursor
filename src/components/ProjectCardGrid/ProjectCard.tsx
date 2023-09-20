import { CursorContext } from "../../context/CursorContext";
import { useContext } from "react";
import { getCursorXoffset, getCursorYoffset } from "../../lib/helpers";
import Cursor from "../Cursor";
import { AnimatePresence, motion } from "framer-motion";

const ProjectCard = ({ project }: any) => {
    const { cursorType } = useContext(CursorContext);
    const { cursorChangeHandler } = useContext(CursorContext);

    const cursorElementWidth = 90;
    const cursorElementHeight = cursorElementWidth;

    return (
        <>
            <Cursor
                name="project_card"
                className="w-[90px] aspect-square flex items-center rounded-full z-[100]"
                xOffset={getCursorXoffset(cursorElementWidth)}
                yOffset={getCursorYoffset(cursorElementHeight)}
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
                            className="relative w-full h-full border-0 rounded-full flex items-center justify-center bg-white mix-blend-difference"
                        >
                            <svg
                                width="25px"
                                height="25px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                className="-mt-1"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="Complete">
                                        <g id="arrow-up-right">
                                            <g>
                                                <polyline
                                                    data-name="Right"
                                                    fill="none"
                                                    id="Right-2"
                                                    points="18.7 12.4 18.7 5.3 11.6 5.3"
                                                    stroke="#000000"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                ></polyline>
                                                <line
                                                    fill="none"
                                                    stroke="#000000"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    x1="5.3"
                                                    x2="17.1"
                                                    y1="18.7"
                                                    y2="6.9"
                                                ></line>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
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
