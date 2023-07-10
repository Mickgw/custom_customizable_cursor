import ListItem from "./ListItem";
import { CursorContext } from "../../context/CursorContext";
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import Cursor from "../Cursor";

const ProjectList = () => {
    const { cursorType } = useContext(CursorContext);

    const { cursorChangeHandler } = useContext(CursorContext);

    const handleMouseEnter = (cursorType: string) => {
        cursorChangeHandler(cursorType);
    };

    const handleMouseLeave = () => {
        cursorChangeHandler("");
    };

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
        <div className="container py-20 flex flex-col">
            <AnimatePresence>
                {cursorType === "overListItem" && (
                    <Cursor
                        className="rounded-full w-[96px] aspect-square bg-black flex items-center justify-center text-white font-bold text-[20px]"
                        xOffset={-48}
                        yOffset={-48}
                    >
                        view
                    </Cursor>
                )}
            </AnimatePresence>

            {projects?.map((project, index) => (
                <ListItem
                    project={project}
                    key={index}
                    onMouseEnter={() => handleMouseEnter("overListItem")}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
        </div>
    );
};

export default ProjectList;
