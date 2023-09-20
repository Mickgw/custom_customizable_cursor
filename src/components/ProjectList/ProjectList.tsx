import ListItem from "./ListItem";
import { CursorContext } from "../../context/CursorContext";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getCursorXoffset, getCursorYoffset } from "../../lib/helpers";
import Cursor from "../Cursor";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

//Thumbnails
import album1thumb from "../../assets/images/DSC00073-min.jpg";
import album2thumb from "../../assets/images/DSC00208-min.jpg";
import album3thumb from "../../assets/images/DSC00300-min.jpg";
import album4thumb from "../../assets/images/DSC00586-min.jpg";
import album5thumb from "../../assets/images/GP5-15-min.jpg";
import album6thumb from "../../assets/images/GP5-21-min.jpg";

const ProjectList = () => {
    const { cursorType } = useContext(CursorContext);
    const { cursorChangeHandler } = useContext(CursorContext);
    const [activePhotoAlbumHover, setActivePhotoAlbumHover] = useState(-1);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    const projects = [
        {
            title: "Photo Album 1",
            thumbnail: album1thumb,
        },
        {
            title: "Photo Album 2",
            thumbnail: album2thumb,
        },
        {
            title: "Photo Album 3",
            thumbnail: album3thumb,
        },
        {
            title: "Photo Album 4",
            thumbnail: album4thumb,
        },
        {
            title: "Photo Album 5",
            thumbnail: album5thumb,
        },
        {
            title: "Photo Album 6",
            thumbnail: album6thumb,
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

    // The useEffect hook to set the Swiper instance when it's available
    useEffect(() => {
        if (swiperInstance && activePhotoAlbumHover >= 0) {
            swiperInstance.slideTo(activePhotoAlbumHover, 600);
        }
    }, [activePhotoAlbumHover, swiperInstance]);

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
        <div className="border-t-[1px]">
            <div className="container">
                <Cursor
                    name="project_list"
                    className={`w-[550px] h-[350px] rounded-xl overflow-hidden`}
                    xOffset={getCursorXoffset(cursorElementWidth)}
                    yOffset={getCursorYoffset(cursorElementHeight)}
                    easingDuration={0.3}
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
                                    initialSlide={activePhotoAlbumHover}
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
                                                <img
                                                    src={project?.thumbnail}
                                                    alt="photo_album_thumbnail"
                                                    loading="lazy"
                                                    className="absolute left-0 top-0 w-full h-full object-cover"
                                                />
                                            </SwiperSlide>
                                        )
                                    )}
                                </Swiper>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Cursor>

                <div className="mt-32 flex flex-row-reverse gap-12">
                    <div className="w-1/2 flex justify-end">
                        <div className="w-[60px] h-[60px] rounded-full bg-slate-500 flex items-center justify-center">
                            <span className="text-[22px] font-bold text-white">
                                1
                            </span>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h2 className="mb-8">Photo albums</h2>
                        <p className="text-[20px] mb-4 font-thin">
                            My cherished photo albums hold a treasure trove of
                            memories. Each snapshot tells a story, capturing the
                            essence of moments shared with loved ones and the
                            beauty of life's journey. Flipping through the pages
                            evokes nostalgia, reminding me of the laughter,
                            love, and growth that fill my personal visual
                            narrative.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col py-32">
                    {projects?.map((project: any, index: number) => (
                        <ListItem
                            project={project}
                            key={index}
                            onMouseEnter={() => {
                                handleMouseEnter("overListItem"),
                                    setActivePhotoAlbumHover(index);
                            }}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>
                <div className="flex justify-between items-center text-[24px] font-light mb-56">
                    <span className="">above are highlighted photo albums</span>
                    <a
                        href="/"
                        className="hover:opacity-70 transition-all duration-300 ease-in-out"
                    >
                        view more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
