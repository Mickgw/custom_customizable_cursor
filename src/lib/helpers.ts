
interface CursorConfigProps {
    cursorWidth: number;
    cursorHeight: number;
}

export function getCursorXoffset(cursorWidth : number) {
    let cursorXoffset = cursorWidth / 2;

    return -cursorXoffset;
}

export function getCursorYoffset(cursorHeight : number) {
    let cursorYoffset = cursorHeight / 2;

    return -cursorYoffset;
}