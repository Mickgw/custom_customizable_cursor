import ListItem from "./ListItem";
import { CursorContext } from "../../context/CursorContext";
import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getCursorXoffset, getCursorYoffset } from "../../lib/helpers";
import Cursor from "../Cursor";
import CursorPhotoAlbumThumbnail from "./CursorPhotoAlbumThumbnail";

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

    //Cursor element dimensions
    const cursorElementWidth = 450;
    const cursorElementHeight = 350;

    const getCursorPhotoAlbumThumbnail = () => {
        let cursorPhotoAlbumThumbnail;

        switch (activePhotoAlbumHover as number) {
            case 0:
                cursorPhotoAlbumThumbnail = album1thumb;
                break;
            case 1:
                cursorPhotoAlbumThumbnail = album2thumb;
                break;

            case 2:
                cursorPhotoAlbumThumbnail = album3thumb;
                break;
            case 3:
                cursorPhotoAlbumThumbnail = album4thumb;
                break;
            case 4:
                cursorPhotoAlbumThumbnail = album5thumb;
                break;
            case 5:
                cursorPhotoAlbumThumbnail = album6thumb;
                break;
            default:
                return null;
        }

        return cursorPhotoAlbumThumbnail;
    };

    const handleMouseEnter = (cursorType: string) => {
        cursorChangeHandler(cursorType);
    };

    const handleMouseLeave = () => {
        cursorChangeHandler("");
    };

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

    return (
        <div className="container py-52 flex flex-col">
            <AnimatePresence>
                {cursorType === "overListItem" && (
                    <Cursor
                        className={`w-[450px] h-[350px] rounded-xl overflow-hidden`}
                        xOffset={getCursorXoffset(cursorElementWidth)}
                        yOffset={getCursorYoffset(cursorElementHeight)}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <AnimatePresence>
                                <motion.img
                                    key={activePhotoAlbumHover}
                                    initial={{
                                        y: -cursorElementHeight + 10,
                                    }}
                                    animate={{
                                        y: 0,
                                        transition: {
                                            duration: 0.7,
                                            ease: [0.6, 0.2, 0.25, 1],
                                        },
                                    }}
                                    exit={{
                                        y: cursorElementHeight - 10,
                                        transition: {
                                            duration: 0.7,
                                            ease: [0.6, 0.2, 0.25, 1],
                                        },
                                    }}
                                    src={
                                        getCursorPhotoAlbumThumbnail() as string
                                    }
                                    alt="photo_album_thumbnail"
                                    className="absolute left-0 top-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>
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
