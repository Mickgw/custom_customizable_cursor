// Framer Motion imports
import {
    useMotionValue,
    useVelocity,
    useScroll,
    useSpring,
    useTransform,
    useAnimationFrame,
} from "framer-motion";

import { useState } from "react";
//  Helpers
import { getSkewAmount, getSkewDirection, getWrap } from "./lib/helpers";

//  Props
import { InteractiveMarqueeProps } from "./lib/props";

//  Consts
import {
    InteractiveMarqueeStyles,
    InteractiveMarqueeDefaultParamValues,
} from "./lib/consts";

//  Components
import MarqueeItem from "./MarqueeItem";

const InteractiveMarquee = ({
    children,
    skew = true,
    skewStrength = InteractiveMarqueeDefaultParamValues?.skewStrength,
    speed = InteractiveMarqueeDefaultParamValues?.speed,
    movementDamping = InteractiveMarqueeDefaultParamValues?.movementDamping,
    movementStiffness = InteractiveMarqueeDefaultParamValues?.movementStiffness,
    scrollMovementSpeed = InteractiveMarqueeDefaultParamValues?.scrollMovementSpeed,
}: InteractiveMarqueeProps) => {
    // Motion values for animation
    const baseX = useMotionValue(0);
    const cloneX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: movementDamping,
        stiffness: movementStiffness,
    });
    const velocityFactor = useTransform(
        smoothVelocity,
        [0, 1000],
        [0, scrollMovementSpeed],
        {
            clamp: false,
        }
    );

    // State for managing direction of movement
    const [direction, setDirection] = useState(1);

    // Transformation for the main and clone elements
    const xMain = useTransform(baseX, (v) => `${getWrap(-100, 100, v)}%`);
    const xClone = useTransform(cloneX, (v) => `${getWrap(-200, 0, v)}%`);

    // Animation frame for continuous movement
    useAnimationFrame((_, delta) => {
        let moveBy = direction * speed * (delta / 1000);

        if (velocityFactor.get() < 0) {
            setDirection(-1);
        } else if (velocityFactor.get() > 0) {
            setDirection(1);
        }

        moveBy += direction * moveBy * velocityFactor.get();

        // Update baseX value
        baseX.set(baseX.get() + moveBy);

        // Update cloneX value (you can adjust the factor as needed)
        cloneX.set(cloneX.get() + moveBy);

        // Check if marquee has reached the end and reset position
        const viewportWidth = window.innerWidth;

        if (baseX.get() > viewportWidth) {
            baseX.set(-viewportWidth);
        } else if (baseX.get() < -viewportWidth) {
            baseX.set(viewportWidth);
        }

        if (cloneX.get() > viewportWidth) {
            cloneX.set(-viewportWidth);
        } else if (cloneX.get() < -viewportWidth) {
            cloneX.set(viewportWidth);
        }
    });

    // Skew transformation based on velocity
    const marqueeSkewStrength = useTransform(
        velocityFactor,
        getSkewDirection(direction, skewStrength),
        getSkewAmount(direction, skewStrength)
    );

    return (
        <div
            className="interactive-marquee"
            style={{
                ...InteractiveMarqueeStyles,
            }}
        >
            <MarqueeItem
                name="marquee-item-main"
                x={xMain}
                skewStrength={marqueeSkewStrength}
                skew={skew}
            >
                {children}
            </MarqueeItem>

            <MarqueeItem
                name="marquee-item-clone"
                x={xClone}
                skewStrength={marqueeSkewStrength}
                skew={skew}
            >
                {children}
            </MarqueeItem>
        </div>
    );
};

export default InteractiveMarquee;
