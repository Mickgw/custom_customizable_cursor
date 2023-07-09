import ListItem from "./ListItem";
import { CursorContext } from "../../context/CursorContext";
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import Cursor from "../Cursor";

const ProjectList = () => {
    const { cursorType } = useContext(CursorContext);

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

    console.log("cursorType = ", cursorType);

    return (
        <div className="container py-20 flex flex-col">
            <AnimatePresence>
                {cursorType === "overListItem" && (
                    <Cursor className="flex items-center justify-center text-white font-bold text-[20px]">
                        view
                    </Cursor>
                )}
            </AnimatePresence>

            {projects?.map((project, index) => (
                <ListItem project={project} key={index} index={index} />
            ))}
        </div>
    );
};

export default ProjectList;
