

export function getCursorXoffset(cursorWidth : number) {
    let cursorXoffset = cursorWidth / 2;

    return -cursorXoffset;
}

export function getCursorYoffset(cursorHeight : number) {
    let cursorYoffset = cursorHeight / 2;

    return -cursorYoffset;
}

export function getEasingDuration(duration : number) {
    let easingDuration;

    if(duration) {
        easingDuration = duration;
    } else {
        easingDuration = 0.4;
    }

    return easingDuration;
}

export function getEasingValues(ease : Array<number>) {
    let easingValues;

    if(ease) {
        easingValues = ease;
    } else {
        easingValues = [0.05,0.03,0.3,0.96];
    }

    return easingValues;
}

export function getClassname(cursoClassname : string) {
    let className;

    if(cursoClassname) {
        className = cursoClassname;
    } else {
        className = "";
    }

    return className;
}


