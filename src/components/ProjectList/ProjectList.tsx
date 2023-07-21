import ListItem from "./ListItem";
import { CursorContext } from "../../context/CursorContext";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
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

    // The useEffect hook to set the Swiper instance when it's available
    useEffect(() => {
        if (swiperInstance && activePhotoAlbumHover >= 0) {
            swiperInstance.slideTo(activePhotoAlbumHover, 600);
        }
    }, [activePhotoAlbumHover, swiperInstance]);

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
        <div className="container py-52 flex flex-col">
            <AnimatePresence>
                {cursorType === "overListItem" && (
                    <Cursor
                        className={`w-[550px] h-[350px] rounded-xl overflow-hidden`}
                        xOffset={getCursorXoffset(cursorElementWidth)}
                        yOffset={getCursorYoffset(cursorElementHeight)}
                    >
                        <div className="relative w-full h-full">
                            <div className="z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-20 aspect-square rounded-full bg-slate-700 text-white tracking-wide flex items-center justify-center">
                                view
                            </div>
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                direction={"vertical"}
                                initialSlide={activePhotoAlbumHover}
                                onSwiper={(swiper) => setSwiperInstance(swiper)}
                                className="z-10 relative w-full h-full"
                            >
                                {projects.map((project: any, index: number) => (
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
                                ))}
                            </Swiper>
                        </div>
                    </Cursor>
                )}
            </AnimatePresence>

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
    );
};

export default ProjectList;
