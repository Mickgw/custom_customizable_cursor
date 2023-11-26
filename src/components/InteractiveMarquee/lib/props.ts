export interface InteractiveMarqueeProps {
    // Required: The content to be displayed within the marquee
    children: React.ReactNode;

    // Optional: Direction of the marquee
    initialDirection?: string;

    // Optional: Speed of the marquee animation
    speed?: number;

    // Optional: Enable skew effect
    skew?: boolean;

    // Optional: Enable drag interaction
    draggable?: boolean;

    // Optional: Gap between marquee items
    gap?: number;

    // Optional: Strength of the skew effect
    skewStrength?: number;

    // Optional: Strength of the drag interaction
    dragStrength?: number;

    // Optional: Damping factor for movement animation
    movementDamping?: number;

    // Optional: Stiffness factor for movement animation
    movementStiffness?: number;

    // Optional: Speed of the marquee in response to scroll
    scrollMovementSpeed?: number;
    
    // Optional: Log all values of the marquee
    logPropsValues?: boolean;

    // Optional: Log all values of the marquee
    className?: string;
}


export interface MarqueeItemProps {
    // Required: Motion value for the x-axis position
    x: any;

    // Optional: Unique identifier for the marquee item
    name?: string;

    // Optional: Enable skew effect for this item
    skew?: boolean;

    // Optional: Strength of the skew effect for this item
    skewStrength?: any;

    // Optional: Content to be displayed within the marquee item
    children?: React.ReactNode;

    // Optional: Spacing between this item and the next
    spacing?: number;
}
