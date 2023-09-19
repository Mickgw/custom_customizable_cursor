import React, { useEffect, useRef } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { gsap } from "gsap"; // Import Power2 easing

interface CursorProps {
    className?: string;
    style?: React.CSSProperties;
    xOffset?: any;
    yOffset?: any;
    children?: React.ReactNode;
}

const Cursor: React.FC<CursorProps> = ({
    className,
    style,
    xOffset,
    yOffset,
    children,
}: CursorProps) => {
    const { x, y } = useMousePosition();
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!cursorRef.current) return;

        // Set up GSAP animations
        const tl = gsap.timeline();

        // Initial state
        tl.set(cursorRef.current, {
            x: x + xOffset,
            y: y + yOffset,
        });

        return () => {
            // Cleanup when component unmounts
            tl.kill();
        };
    }, [x, y, xOffset, yOffset]);

    if (x === 0 || y === 0) {
        return null; // Render nothing when xPos and yPos are 0
    }

    return (
        <div
            ref={cursorRef}
            style={{
                position: "fixed",
                pointerEvents: "none",
                left: 0,
                top: 0,
                transition: ".3s cubic-bezier(0.05,0.03,0.3,0.96)",
                ...style,
            }}
            className={`cursor ${className}`}
        >
            {children}
        </div>
    );
};

export default Cursor;
