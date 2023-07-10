import useMousePosition from "../hooks/useMousePosition";
import { motion } from "framer-motion";

interface CursorProps {
    className?: string;
    xOffset?: number;
    yOffset?: number;
    children?: React.ReactNode;
}

const Cursor = ({ className, xOffset, yOffset, children }: CursorProps) => {
    const { x, y } = useMousePosition();

    if (x === 0 || y === 0) {
        return null; // Render nothing when xPos and yPos is 0
    }

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0, x: xOffset, y: yOffset }}
            animate={{
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 0.3,
                },
            }}
            exit={{ scale: 0, opacity: 0 }}
            style={{
                left: x,
                top: y,
            }}
            className={`fixed pointer-events-none ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Cursor;
