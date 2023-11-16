import { motion, useAnimation } from "framer-motion";
import { MarqueeItemProps } from "./lib/props";
const MarqueeItem = ({
    name,
    x,
    skew,
    skewStrength,
    children,
}: MarqueeItemProps) => {
    const controls = useAnimation();

    return (
        <motion.div
            id={name}
            style={{ x: x, ...(skew ? { skewX: skewStrength } : {}) }}
            animate={controls}
        >
            {children}
        </motion.div>
    );
};

export default MarqueeItem;
