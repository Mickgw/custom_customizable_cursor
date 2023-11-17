// Import the InteractiveMarqueeProps type from the props module
import { InteractiveMarqueeProps } from "./props";

// Function to get the skew amount based on direction and specified amount
export function getSkewAmount(direction: number, amount: number) {
    let skewAmount = [];

    // Check direction and set skew amount accordingly
    if (direction === 1) {
        skewAmount = [0, -amount];
    } else {
        skewAmount = [0, amount];
    }

    return skewAmount;
}

// Function to get the skew direction based on direction and specified amount
export function getSkewDirection(direction: number, amount: number) {
    let skewDirection = [];

    // Check direction and set skew direction accordingly
    if (direction === 1) {
        skewDirection = [0, amount];
    } else {
        skewDirection = [0, -amount];
    }

    return skewDirection;
}

// Function to wrap a value within a specified range
export const getWrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// Function to log the values of InteractiveMarqueeProps if logPropsValues is true
export const getLogOfPropsValues = ({
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
}: InteractiveMarqueeProps) => {
    if (logPropsValues) {
        console.log("Props Values:", {
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
        });
    }
}
