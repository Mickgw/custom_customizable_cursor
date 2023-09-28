import { useEffect, useRef } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { gsap } from "gsap";
import {
    getClassname,
    getCursorXoffset,
    getCursorYoffset,
    getEasingDuration,
    getEasingValues,
} from "./lib/helpers";

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
                zIndex: zIndex,
                left: 0,
                top: 0,
                width: `${width}px`,
                height: `${height}px`,
                transition: `${getEasingDuration(
                    easingDuration as number
                )}s cubic-bezier(${getEasingValues(ease as Array<number>)})`,
                ...style,
            }}
            className={`cursor_${name} ${getClassname(className as string)}`}
        >
            {children}
        </div>
    );
};

export default Cursor;
