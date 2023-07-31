import useMousePosition from "../hooks/useMousePosition";
// import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";

interface CursorProps {
    className?: string;
    style?: any;
    cursorWidth?: number;
    cursorHeight?: number;
    xOffset?: any;
    yOffset?: any;
    children?: React.ReactNode;
}

const Cursor = ({
    className,
    style,
    xOffset,
    yOffset,
    children,
}: CursorProps) => {
    const { x, y } = useMousePosition();
    const cursorRef = useRef(null);

    useEffect(() => {
        // Set the initial state of the cursor using GSAP
        gsap.set(cursorRef.current, {
            opacity: 0,
            scale: 0,
        });

        // Use GSAP to animate the cursor
        gsap.to(cursorRef.current, {
            duration: 0.5,
            x: x + xOffset,
            y: y + yOffset,
            opacity: 1,
            scale: 1,
            ease: "power1",
            overwrite: "auto",
        });
    }, [x, y]);

    if (x === 0 || y === 0) {
        return null; // Render nothing when xPos and yPos is 0
    }

    return (
        <>
            <div
                ref={cursorRef}
                style={{
                    left: 0,
                    top: 0,
                    transform: `translate(${x + xOffset}px, ${y + yOffset}px)`, // Use transform to set cursor position
                    ...style,
                }}
                className={`cursor ${className}`}
            >
                {children}
            </div>
        </>
    );
};

export default Cursor;
