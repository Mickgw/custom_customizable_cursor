import { motion, useAnimation } from "framer-motion";
import { MarqueeItemProps } from "./lib/props";
const MarqueeItem = ({
    name,
    x,
    skew,
    skewStrength,
    children,
    spacing,
}: MarqueeItemProps) => {
    const controls = useAnimation();

    return (
        <motion.div
            id={name}
            className="marquee-item"
            style={{
                x: x,
                ...(skew ? { skewX: skewStrength } : {}),
                paddingRight: `${spacing}px`,
            }}
            animate={controls}
        >
            {children}
        </motion.div>
    );
};

export default MarqueeItem;
