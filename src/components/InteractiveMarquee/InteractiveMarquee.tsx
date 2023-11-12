import {
    motion,
    useMotionValue,
    useVelocity,
    useScroll,
    useSpring,
    useTransform,
    useAnimation,
    useAnimationFrame,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import MarqueeItem from "./MarqueeItem";
import {
    getSkewAmount,
    getSkewDirection,
} from "../InteractiveMarqueeOld/lib/helpers";

interface InteractiveMarqueeProps {
    children: React.ReactNode;
    baseVelocity?: number;
}

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const InteractiveMarquee = ({
    children,
    baseVelocity = 100,
}: InteractiveMarqueeProps) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const [direction, setDirection] = useState(1); // 1 for right, -1 for left

    const x = useTransform(baseX, (v) => `${wrap(-20, -100, v)}%`);

    const controls = useAnimation();

    useAnimationFrame((_, delta) => {
        let moveBy = direction * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            setDirection(-1);
        } else if (velocityFactor.get() > 0) {
            setDirection(1);
        }

        moveBy += direction * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    const skew = useTransform(
        velocityFactor,
        getSkewDirection(direction, 20),
        getSkewAmount(direction, 20)
    );

    console.log("direction = ", direction);

    return (
        <div className="parallax flex flex-nowrap whitespace-nowrap">
            <motion.div
                className="scroller flex flex-nowrap wyFactor.genowrap"
                style={{ x, skewX: skew }}
                animate={controls}
            >
                <div className="flex">{children}</div>
            </motion.div>
        </div>
    );
};

export default InteractiveMarquee;
