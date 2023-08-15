import { CursorContext } from "../../context/CursorContext";
import { useContext } from "react";
// import { getCursorXoffset, getCursorYoffset } from "../../lib/helpers";
// import Cursor from "../Cursor";
// import { AnimatePresence } from "framer-motion";

const ProjectCard = ({ project }: any) => {
    // const { cursorType } = useContext(CursorContext);
    const { cursorChangeHandler } = useContext(CursorContext);

    // const cursorElementWidth = 75;
    // const cursorElementHeight = cursorElementWidth;

    return (
        <>
            {/* <AnimatePresence>
                {cursorType === "projectCard" && (
                    <Cursor
                        className="z-[100] w-[75px] aspect-square rounded-full overflow-hidden"
                        xOffset={getCursorXoffset(cursorElementWidth)}
                        yOffset={getCursorYoffset(cursorElementHeight)}
                    >
                        <div className="absolute inset-0 w-full h-full flex items-center justify-center backdrop-blur-[2px]" />
                        <div className="relative w-full h-full flex items-center justify-center bg-slate-50/10">
                            <span>view</span>
                        </div>
                    </Cursor>
                )}
            </AnimatePresence> */}

            <a
                data-aos="fade-up"
                data-aos-offset="-100"
                data-aos-duration="750"
                data-aos-easing="ease-in-out"
                className="w-full aspect-[3/4] overflow-hidden relative group rounded-2xl"
                onMouseEnter={() => cursorChangeHandler("projectCard")}
                onMouseLeave={() => cursorChangeHandler("")}
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
                    <h3 className="opacity-0 group-hover:opacity-100 mb-4 text-white lowercase !text-[34px] transition-all duration-500 ease-in-out">
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
