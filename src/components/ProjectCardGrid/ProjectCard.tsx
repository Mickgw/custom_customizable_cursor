import { CursorContext } from "../../context/CursorContext";
import { useContext } from "react";
import { getCursorXoffset, getCursorYoffset } from "../../lib/helpers";
import Cursor from "../Cursor";
// import { AnimatePresence } from "framer-motion";

const ProjectCard = ({ project }: any) => {
    const { cursorType } = useContext(CursorContext);
    const { cursorChangeHandler } = useContext(CursorContext);

    const cursorElementWidth = 75;
    const cursorElementHeight = cursorElementWidth;

    return (
        <>
            {cursorType === "projectCard" && (
                <Cursor
                    className="z-[100] w-[75px] aspect-square flex bg-slate-100 items-center justify-center rounded-full"
                    // style={{
                    //     backgroundColor: "red",
                    //     mixBlendMode: "difference",
                    // }}
                    xOffset={getCursorXoffset(cursorElementWidth)}
                    yOffset={getCursorYoffset(cursorElementHeight)}
                >
                    <span className="font-bold">view</span>
                </Cursor>
            )}

            <a
                className="w-full aspect-[3/4] overflow-hidden relative group"
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
                <div
                    style={{ backgroundColor: "white" }}
                    className="z-[100] w-32 aspect-square absolute left-20 top-20 mix-blend-difference"
                ></div>
                <div className="opacity-0 group-hover:opacity-50 absolute inset-0 w-full h-full bg-black transition-all duration-500 ease-in-out" />
                <h3 className="opacity-0 group-hover:opacity-100 z-10 absolute left-6 top-6 text-white lowercase !font-thin !text-[28px] transition-all duration-500 ease-in-out">
                    {project?.title}
                </h3>
            </a>
        </>
    );
};

export default ProjectCard;
