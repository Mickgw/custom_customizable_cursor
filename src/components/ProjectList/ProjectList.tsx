import ListItem from "./ListItem";
import { CursorContext } from "../../context/CursorContext";
import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
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

    const getCursorPhotoAlbumThumbnail = () => {
        switch (activePhotoAlbumHover as number) {
            case 0:
                return <CursorPhotoAlbumThumbnail thumbnail={album1thumb} />;
            case 1:
                return <CursorPhotoAlbumThumbnail thumbnail={album2thumb} />;
            case 2:
                return <CursorPhotoAlbumThumbnail thumbnail={album3thumb} />;
            case 3:
                return <CursorPhotoAlbumThumbnail thumbnail={album4thumb} />;
            case 4:
                return <CursorPhotoAlbumThumbnail thumbnail={album5thumb} />;
            case 5:
                return <CursorPhotoAlbumThumbnail thumbnail={album6thumb} />;
            default:
                return null;
        }
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
                        className="w-[350px] h-[250px] bg-black"
                        xOffset={getCursorXoffset(350)}
                        yOffset={getCursorYoffset(250)}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <AnimatePresence>
                                {getCursorPhotoAlbumThumbnail()}
                            </AnimatePresence>
                            <div className="relative flex items-center justify-center bg-black mix-blend-difference text-[22px] font-bold">
                                view
                            </div>
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
