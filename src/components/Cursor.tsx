import { useEffect, useRef } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { gsap } from "gsap";
import { getCursorXoffset, getCursorYoffset } from "../lib/helpers";

interface CursorProps {
    name: string; //required
    width: number; //required
    height: number; //required
    style?: React.CSSProperties;
    easingDuration?: number;
    children?: React.ReactNode;
    className?: string;
}

const Cursor: React.FC<CursorProps> = ({
    name,
    width,
    height,
    style,
    easingDuration,
    children,
    className,
}: CursorProps) => {
    const { x, y } = useMousePosition();
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const easingDurationFinal = easingDuration ? easingDuration : 0.2;
    const xOffset = getCursorXoffset(width as number);
    const yOffset = getCursorYoffset(height as number);

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
                width: width + "px",
                height: height + "px",
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
