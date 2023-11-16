import { CSSProperties } from 'react';

export const  InteractiveMarqueeStyles: CSSProperties = {
    display: "flex",
    flexWrap: "nowrap",
    whiteSpace: "nowrap",
};

export const InteractiveMarqueeDefaultParamValues = {
    skewStrength: 20,
    speed: 5,
    movementDamping: 100,
    movementStiffness: 250,
    scrollMovementSpeed: 8,
}
