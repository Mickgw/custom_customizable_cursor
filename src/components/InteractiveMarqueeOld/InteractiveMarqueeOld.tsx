import { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useRafLoop } from "react-use";
import normalizeWheel from "normalize-wheel";
import { InteractiveMarqueeProps } from "./lib/props";
import MarqueeItem from "./MarqueeItemOld";
import { getSkew } from "./lib/helpers";

const _ = {
    content: "This is the InteractiveMarquee.",
    speed: 4,
    threshold: 0.1,
    wheelFactor: 1.4,
};

const InteractiveMarqueeOld = ({
    name,
    skewAmount,
}: InteractiveMarqueeProps) => {
    const marquee = useRef(null);
    const slowDown = useRef(false);
    const isScrolling = useRef<number | null>(null);
    const constraintsRef = useRef(null);
    const [marqueeDirection, setMarqueeDirection] = useState("left");

    const x = useRef(0);
    const w = useRef(window.innerWidth).current;
    const speed = useSpring(_.speed, {
        damping: 40,
        stiffness: 90,
        mass: 7,
    });

    const skewX = useTransform(
        speed,
        [-w * 0.6, 0, w * 0.6],
        getSkew(skewAmount as number)
    );

    const onWheel = (e: any) => {
        const normalized = normalizeWheel(e);
        x.current = normalized.pixelY * _.wheelFactor;

        if (normalized.spinY < 0) {
            setMarqueeDirection("right");
        } else if (normalized.spinY > 0) {
            setMarqueeDirection("left");
        }

        console.log("normalized = ", normalized);

        // Reset speed on scroll end
        window.clearTimeout(isScrolling.current as any);

        speed.set(_.speed);
    };

    const loop = () => {
        if (slowDown.current || Math.abs(x.current) < _.threshold) return;
        x.current *= 0.7;
        if (x.current < 0) {
            x.current = Math.min(x.current, 0);
        } else {
            x.current = Math.max(x.current, 0);
        }
        speed.set(_.speed + x.current);
    };

    useRafLoop(loop, true);

    console.log("speed is: ", speed);

    return (
        <>
            <motion.div className="bg" ref={constraintsRef} />
            <motion.div
                id={name}
                className="marquee"
                ref={marquee}
                style={{ skewX }}
                onWheel={onWheel}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
            >
                <MarqueeItem content={_.content} speed={speed} />
                <MarqueeItem
                    content={_.content}
                    speed={speed}
                    direction={marqueeDirection}
                />
            </motion.div>
        </>
    );
};

export default InteractiveMarqueeOld;
