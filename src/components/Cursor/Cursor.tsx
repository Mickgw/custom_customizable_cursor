import { useEffect, useRef } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { gsap } from "gsap";
import { getCursorXoffset, getCursorYoffset } from "../../lib/helpers";

interface CursorProps {
    name: string; //required
    width: number; //required
    height: number; //required
    zIndex?: number;
    style?: React.CSSProperties;
    ease?: Array<number>;
    easingDuration?: number;
    children?: React.ReactNode;
    className?: string;
}

const Cursor: React.FC<CursorProps> = ({
    name,
    width,
    height,
    zIndex,
    style,
    ease,
    easingDuration,
    children,
    className,
}: CursorProps) => {
    const { x, y } = useMousePosition();
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const xOffset = getCursorXoffset(width as number);
    const yOffset = getCursorYoffset(height as number);

    useEffect(() => {
        if (!cursorRef.current) return;

        const updateCursor = () => {
            const newX = x + xOffset;
            const newY = y + yOffset;

            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    x: newX,
                    y: newY,
                    duration: easingDuration ? easingDuration : 0.4,
                    ease: ease
                        ? `cubic-bezier(${ease})`
                        : "cubic-bezier(0.05,0.03,0.3,0.96)",
                });
            }
        };

        const animationFrameId = requestAnimationFrame(updateCursor);

        return () => {
            cancelAnimationFrame(animationFrameId);
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
                zIndex: zIndex,
                left: 0,
                top: 0,
                width: width + "px",
                height: height + "px",
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
