import { useContext } from "react";
import { CursorContext } from "./Cursor/context/CursorContext";
import Cursor from "./Cursor/Cursor";

const Header = () => {
    const { cursorType, cursorChangeHandler } = useContext(CursorContext);
    const cursorWidth = 90;
    const cursorHeight = cursorWidth;

    return (
        <header className="h-[150px]">
            <div className="px-14 h-full flex items-center justify-between">
                {cursorType === "headerLogo" && (
                    <Cursor
                        name="menu-button-cursor"
                        width={cursorWidth}
                        height={cursorHeight}
                    >
                        <div className="w-[90px] aspect-square flex items-center rounded-full bg-lime-800 mix-blend-difference" />
                    </Cursor>
                )}

                {cursorType === "headerMenuButton" && (
                    <Cursor
                        name="menu-button-cursor"
                        width={cursorWidth}
                        height={cursorHeight}
                        className="w-[90px] aspect-square flex items-center rounded-full bg-sky-700 mix-blend-difference"
                    />
                )}

                <h3
                    onMouseEnter={() => cursorChangeHandler("headerLogo")}
                    onMouseLeave={() => cursorChangeHandler("")}
                >
                    <span>customizable cursor</span>
                </h3>
                <div className="flex items-center gap-2">
                    <div
                        className="relative w-6 h-2.5 mix-blend-difference cursor-pointer"
                        onMouseEnter={() =>
                            cursorChangeHandler("headerMenuButton")
                        }
                        onMouseLeave={() => cursorChangeHandler("")}
                        onClick={() =>
                            console.log(
                                "Ja, er gebeurd toch echt niks als je die menu knop blijft klikken man."
                            )
                        }
                    >
                        <div className="absolute left-0 top-0 h-[2px] w-full bg-white" />
                        <div className="absolute left-0 bottom-0 h-[2px] w-full bg-white" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
