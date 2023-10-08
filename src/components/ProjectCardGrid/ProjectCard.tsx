import { CursorContext } from "../Cursor/context/CursorContext";
import { useContext } from "react";

const ProjectCard = ({ project }: any) => {
    const { cursorChangeHandler } = useContext(CursorContext);

    return (
        <a
            className="w-full aspect-[3/4] overflow-hidden relative group rounded-2xl"
            onMouseEnter={() => {
                cursorChangeHandler("projectCard");
            }}
            onMouseLeave={() => {
                cursorChangeHandler("");
            }}
            data-aos="fade-up"
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
    );
};

export default ProjectCard;
