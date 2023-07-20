import { AnimatePresence, motion } from "framer-motion";

const CursorPhotoAlbumThumbnail = ({
    thumbnail,
    cursorElementHeight,
    uniqueKey,
}: any) => {
    return (
        <AnimatePresence key={uniqueKey}>
            <motion.img
                initial={{ y: -cursorElementHeight }}
                animate={{
                    y: 0,
                    transition: {
                        delay: 0.3,
                        duration: 0.3,
                        ease: [0.6, 0.2, 0.25, 1],
                    },
                }}
                exit={{
                    y: cursorElementHeight,
                    transition: { duration: 0.23, ease: [0.6, 0.2, 0.25, 1] },
                }}
                src={thumbnail}
                alt="photo_album_thumbnail"
                className="absolute left-0 top-0 w-full h-full object-cover"
            />
        </AnimatePresence>
    );
};

export default CursorPhotoAlbumThumbnail;
