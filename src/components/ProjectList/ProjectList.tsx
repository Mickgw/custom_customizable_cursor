import ListItem from "./ListItem";
import { CursorContext } from "../Cursor/context/CursorContext";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Cursor from "../Cursor/Cursor";
import { Swiper, SwiperSlide } from "swiper/react";
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
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    // The useEffect hook to set the Swiper instance when it's available
    useEffect(() => {
        if (swiperInstance && activeListItemHover >= 0) {
            swiperInstance.slideTo(activeListItemHover, 600);
        }
    }, [activeListItemHover, swiperInstance]);

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
                                className="relative w-full h-full"
                                initial={animationProps.initial}
                                animate={animationProps.animate}
                                exit={animationProps.exit}
                            >
                                <div className="z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-20 aspect-square rounded-full bg-slate-700 text-white tracking-wide flex items-center justify-center">
                                    view
                                </div>
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    direction={"vertical"}
                                    initialSlide={activeListItemHover}
                                    onSwiper={(swiper) =>
                                        setSwiperInstance(swiper)
                                    }
                                    className="z-10 relative w-full h-full"
                                >
                                    {projects.map(
                                        (project: any, index: number) => (
                                            <SwiperSlide
                                                key={index}
                                                className="relative w-full h-full"
                                            >
                                                <video
                                                    width="100%"
                                                    height="100%"
                                                    autoPlay
                                                    muted
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                >
                                                    <source
                                                        src={project?.video}
                                                        type="video/mp4"
                                                    ></source>
                                                </video>
                                            </SwiperSlide>
                                        )
                                    )}
                                </Swiper>
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
