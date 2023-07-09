import useMousePosition from "../hooks/useMousePosition";
import { motion } from "framer-motion";

const Cursor = ({ className, children }: any) => {
    const { x, y } = useMousePosition();
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{
                scale: 1,
                transition: {
                    duration: 0.3,
                },
                x: -48,
                y: -48,
            }}
            exit={{ scale: 0 }}
            style={{ left: x, top: y }}
            className={`cursor ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Cursor;
