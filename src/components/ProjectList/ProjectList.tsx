import ListItem from "./ListItem";
import { CursorContext } from "../Cursor/context/CursorContext";
import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Cursor from "../Cursor/Cursor";
import "swiper/css/bundle";

import video1 from "../../assets/videos/vid_1.mp4";
import video2 from "../../assets/videos/vid_2.mp4";
import video3 from "../../assets/videos/vid_3.mp4";
import video4 from "../../assets/videos/vid_4.mp4";
import video5 from "../../assets/videos/vid_5.mp4";
import video6 from "../../assets/videos/vid_6.mp4";

const ProjectList = () => {
    const { cursorType } = useContext(CursorContext);
    const { cursorChangeHandler } = useContext(CursorContext);
    const [activeListItemHover, setListItemHover] = useState(-1);

    const projects = [
        {
            title: "Video 1",
            video: video1,
        },
        {
            title: "Video 2",
            video: video2,
        },
        {
            title: "Video 3",
            video: video3,
        },
        {
            title: "Video 4",
            video: video4,
        },
        {
            title: "Video 5",
            video: video5,
        },
        {
            title: "Video 6",
            video: video6,
        },
    ];

    const animationProps = {
        initial: {
            scale: 0,
            opacity: 0,
        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
        exit: {
            scale: 0,
            opacity: 0,
        },
    };

    //Cursor element dimensions
    const cursorElementWidth = 550;
    const cursorElementHeight = 350;

    const handleMouseEnter = (cursorType: string) => {
        cursorChangeHandler(cursorType);
    };

    const handleMouseLeave = () => {
        cursorChangeHandler("");
    };

    return (
        <section>
            <div className="container">
                <Cursor
                    name="project_list"
                    width={cursorElementWidth}
                    height={cursorElementHeight}
                    className={`rounded-xl overflow-hidden`}
                    easingDuration={0.45}
                >
                    <AnimatePresence>
                        {cursorType === "overListItem" && (
                            <motion.div
                                className="relative w-full h-full bg-black"
                                initial={animationProps.initial}
                                animate={animationProps.animate}
                                exit={animationProps.exit}
                            >
                                {/* <div className="z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-20 aspect-square rounded-full bg-slate-700 text-white tracking-wide flex items-center justify-center">
                                        view
                                    </div> */}

                                {projects.map((project: any, index: number) => (
                                    <AnimatePresence key={index}>
                                        {index === activeListItemHover && (
                                            <motion.video
                                                initial={{ opacity: 0 }}
                                                animate={{
                                                    opacity: 1,
                                                    transition: {
                                                        duration: 0.5,
                                                    },
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    transition: {
                                                        duration: 0.5,
                                                    },
                                                }}
                                                width="100%"
                                                height="100%"
                                                autoPlay
                                                muted
                                                className="absolute inset-0 w-full h-full object-cover"
                                                key={index}
                                            >
                                                <source
                                                    src={project?.video}
                                                    type="video/mp4"
                                                ></source>
                                            </motion.video>
                                        )}
                                    </AnimatePresence>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Cursor>

                <Cursor
                    name="cursor_inside_project"
                    width={80}
                    height={80}
                    easingDuration={0.55}
                >
                    <AnimatePresence>
                        {cursorType === "overListItem" && (
                            <motion.div
                                initial={animationProps.initial}
                                animate={animationProps.animate}
                                exit={animationProps.exit}
                                className="bg-white w-full h-full font-semibold flex items-center justify-center rounded-full text-black"
                            >
                                view
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Cursor>

                <div className="flex flex-col py-32">
                    {projects?.map((project: any, index: number) => (
                        <ListItem
                            project={project}
                            key={index}
                            onMouseEnter={() => {
                                handleMouseEnter("overListItem"),
                                    setListItemHover(index);
                            }}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
