import { useWindowSize } from "@react-hook/window-size";
import { useEffect, useRef } from "react";
import { useRafLoop } from "react-use";

const MarqueeItemOld = ({ content, speed, direction }: any) => {
    const item = useRef<HTMLDivElement | null>(null);
    const rect = useRef<DOMRect | {}>({}); // Set the correct type
    const x = useRef<number>(0);

    console.log("scroll direction is: ", direction);

    const [width, height] = useWindowSize({
        initialWidth: window.innerWidth,
        initialHeight: window.innerHeight,
    });

    const setX = () => {
        if (!item.current || !("width" in rect.current)) return;
        const xPercentage = (x.current / rect.current.width) * 100;
        if (xPercentage < -100) x.current = 0;
        if (xPercentage > 0) x.current = -rect.current.width;
        item.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;
    };

    useEffect(() => {
        if (item.current) {
            rect.current = item.current.getBoundingClientRect() as DOMRect;
        }
    }, [width, height]);

    const loop = () => {
        x.current -= speed.get();
        setX();
    };

    useRafLoop(loop, true);

    return (
        <div className="item" ref={item}>
            {content}
        </div>
    );
};

export default MarqueeItemOld;
