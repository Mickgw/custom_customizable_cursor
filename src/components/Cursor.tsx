import React, { useEffect, useRef } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { gsap } from "gsap"; // Import Power2 easing

interface CursorProps {
    name?: string;
    className?: string;
    style?: React.CSSProperties;
    xOffset?: any;
    yOffset?: any;
    easingDuration?: number;
    children?: React.ReactNode;
}

const Cursor: React.FC<CursorProps> = ({
    name,
    className,
    style,
    xOffset,
    yOffset,
    easingDuration,
    children,
}: CursorProps) => {
    const { x, y } = useMousePosition();
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const easingDurationFinal = easingDuration ? easingDuration : 0.2;

    useEffect(() => {
        if (!cursorRef.current) return;

        const tl = gsap.timeline();

        tl.set(cursorRef.current, {
            x: x + xOffset,
            y: y + yOffset,
        });

        return () => {
            tl.kill();
        };
    }, [x, y, xOffset, yOffset]);

    if (x === 0 || y === 0) {
        return null;
    }

    return (
        <div
            ref={cursorRef}
            style={{
                position: "fixed",
                pointerEvents: "none",
                left: 0,
                top: 0,
                transition: `${easingDurationFinal}s cubic-bezier(0.05,0.03,0.3,0.96)`,
                ...style,
            }}
            className={`cursor_${name ? `${name}_` : ""} ${
                className && className
            }`}
        >
            {children}
        </div>
    );
};

export default Cursor;
