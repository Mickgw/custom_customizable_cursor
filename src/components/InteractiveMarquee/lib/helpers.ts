export function getSkewAmount(direction : number, amount : number) {
    let skewAmount = [];

    if(direction === 1) {
        skewAmount = [0, -amount];
    } else {
        skewAmount = [0, amount];
    }

    return skewAmount;
}

export function getSkewDirection(direction : number, amount : number) {
    let skewDirection = [];

    if(direction === 1) {
        skewDirection = [0, amount];
    } else {
        skewDirection = [0, -amount];
    }

    return skewDirection;
}

export const getWrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};