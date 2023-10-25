import Marquee from "./Marquee";
import { MarqueeOnScrollChangeProps } from "./lib/props";

const MarqueeOnScrollChange = ({
    name,
    children,
    speed,
}: MarqueeOnScrollChangeProps) => {
    return (
        <Marquee name={name} speed={speed}>
            {children}
        </Marquee>
    );
};

export default MarqueeOnScrollChange;
