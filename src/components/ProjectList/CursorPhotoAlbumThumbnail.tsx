import { motion } from "framer-motion";

const CursorPhotoAlbumThumbnail = ({ thumbnail }: any) => {
    return (
        <motion.img
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.15,
                },
            }}
            exit={{ opacity: 0 }}
            src={thumbnail}
            alt="photo_album_thumbnail"
            className="absolute left-0 top-0 w-full h-full object-cover"
        />
    );
};

export default CursorPhotoAlbumThumbnail;
