import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";

import { MarqueeOnScrollChangeProps } from "./lib/props";
import { useRef } from "react";

import { wrap } from "@motionone/utils";

const Marquee = ({ name, speed, children }: MarqueeOnScrollChangeProps) => {
    let baseVelocity = speed ? speed : 5;

    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 300,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 4000], [0, 10], {
        clamp: false,
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-100, 100, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div
            className="w-full flex flex-nowrap whitespace-nowrap overflow-hidden"
            key={name}
        >
            <motion.div className="scroller w-full" style={{ x }}>
                {children}
            </motion.div>
        </div>
    );
};

export default Marquee;
