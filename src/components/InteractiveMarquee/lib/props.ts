export interface InteractiveMarqueeProps {
    // Required
    children: React.ReactNode;

    // Optional
    speed?: number;
    skew?: boolean;
    skewStrength?: number;
    movementDamping?: number;
    movementStiffness?: number;
    scrollMovementSpeed?: number;
}

export interface MarqueeItemProps {
    // Required
    x: any;

    // Optional
    name?: string;
    skew?: boolean;
    skewStrength?: any;
    children?: React.ReactNode;
}