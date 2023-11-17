// Import necessary modules and components from framer-motion and React
import {
    motion,
    useMotionValue,
    useVelocity,
    useScroll,
    useSpring,
    useTransform,
    useAnimationFrame,
} from "framer-motion";
import { useState } from "react";
import {
    getLogOfPropsValues,
    getSkewAmount,
    getSkewDirection,
    getWrap,
} from "./lib/helpers";
import { InteractiveMarqueeProps } from "./lib/props";
import { InteractiveMarqueeDefaultPropValues } from "./lib/consts";
import MarqueeItem from "./MarqueeItem";
import "./assets/styles/styles.scss";

// Define the InteractiveMarquee component
const InteractiveMarquee = ({
    children,
    draggable = InteractiveMarqueeDefaultPropValues?.draggable,
    skew = InteractiveMarqueeDefaultPropValues?.skew,
    speed = InteractiveMarqueeDefaultPropValues?.speed,
    gap = InteractiveMarqueeDefaultPropValues?.gap,
    skewStrength = InteractiveMarqueeDefaultPropValues?.skewStrength,
    dragStrength = InteractiveMarqueeDefaultPropValues?.dragStrength,
    movementDamping = InteractiveMarqueeDefaultPropValues?.movementDamping,
    movementStiffness = InteractiveMarqueeDefaultPropValues?.movementStiffness,
    scrollMovementSpeed = InteractiveMarqueeDefaultPropValues?.scrollMovementSpeed,
    logPropsValues = InteractiveMarqueeDefaultPropValues?.logPropsValues,
}: InteractiveMarqueeProps) => {
    // Define motion values for the main and clone marquee items
    const baseX = useMotionValue(0);
    const cloneX = useMotionValue(0);

    // Use framer-motion hooks for scroll and velocity
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: movementDamping,
        stiffness: movementStiffness,
    });

    // Transform velocity to control scroll movement speed
    const velocityFactor = useTransform(
        smoothVelocity,
        [0, 1000],
        [0, scrollMovementSpeed],
        {
            clamp: false,
        }
    );

    // State to track the movement direction and whether dragged out of the viewport
    const [direction, setDirection] = useState(1);
    const [draggedOutOfViewport, setDraggedOutOfViewport] = useState(false);

    // Transform main and clone marquee item position based on motion values
    const xMain = useTransform(baseX, (v) => `${getWrap(-100, 100, v)}%`);
    const xClone = useTransform(cloneX, (v) => `${getWrap(-200, 0, v)}%`);

    // UseAnimationFrame to handle animation logic
    useAnimationFrame((_, delta) => {
        let moveBy = direction * speed * (delta / 1000);

        // Update direction based on velocity
        if (velocityFactor.get() < 0) {
            setDirection(-1);
        } else if (velocityFactor.get() > 0) {
            setDirection(1);
        }

        // Adjust movement by velocity factor
        moveBy += direction * moveBy * velocityFactor.get();

        // Update motion values for main and clone marquee items
        baseX.set(baseX.get() + moveBy);
        cloneX.set(cloneX.get() + moveBy);

        const viewportWidth = window.innerWidth;

        // Check if marquee items are dragged out of the viewport
        if (baseX.get() > viewportWidth || baseX.get() < -viewportWidth) {
            baseX.set(getWrap(-viewportWidth, viewportWidth, baseX.get()));
            setDraggedOutOfViewport(true);
        } else {
            setDraggedOutOfViewport(false);
        }

        if (cloneX.get() > viewportWidth || cloneX.get() < -viewportWidth) {
            cloneX.set(getWrap(-viewportWidth, viewportWidth, cloneX.get()));
            setDraggedOutOfViewport(true);
        } else {
            setDraggedOutOfViewport(false);
        }
    });

    // Apply skew effect based on velocity for both main and clone marquee items
    const marqueeSkewStrength = useTransform(
        velocityFactor,
        getSkewDirection(direction, skewStrength),
        getSkewAmount(direction, skewStrength)
    );

    // Log props values if logPropsValues is true
    getLogOfPropsValues({
        children,
        draggable,
        skew,
        speed,
        gap,
        skewStrength,
        dragStrength,
        movementDamping,
        movementStiffness,
        scrollMovementSpeed,
        logPropsValues,
    });

    return (
        <div
            className={`interactive-marquee ${
                draggedOutOfViewport ? "dragged-out" : ""
            }`}
        >
            <motion.div
                className={`interactive-marquee-wrapper ${
                    draggable ? "draggable" : ""
                }`}
                drag={draggable ? "x" : false}
                dragConstraints={draggable && { left: 0, right: 0 }}
                dragElastic={dragStrength}
                onDrag={() => {
                    setDraggedOutOfViewport(true);
                }}
            >
                <MarqueeItem
                    name="main"
                    x={xMain}
                    skewStrength={marqueeSkewStrength}
                    skew={skew}
                    spacing={gap}
                >
                    {children}
                </MarqueeItem>

                <MarqueeItem
                    name="clone"
                    x={xClone}
                    skewStrength={marqueeSkewStrength}
                    skew={skew}
                    spacing={gap}
                >
                    {children}
                </MarqueeItem>
            </motion.div>
        </div>
    );
};

// Export the InteractiveMarquee component
export default InteractiveMarquee;
