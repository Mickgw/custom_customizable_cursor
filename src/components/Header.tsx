import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import Cursor from "./Cursor";
import { AnimatePresence } from "framer-motion";

const Header = () => {
    const { cursorType, cursorChangeHandler } = useContext(CursorContext);

    return (
        <header className="h-[150px]">
            <div className="px-14 h-full flex items-center justify-between">
                <h3
                    onMouseEnter={() => cursorChangeHandler("headerLogo")}
                    onMouseLeave={() => cursorChangeHandler("")}
                >
                    <AnimatePresence>
                        {cursorType === "headerLogo" && (
                            <Cursor
                                xOffset={-60}
                                yOffset={-60}
                                className="-z-10 w-[120px] aspect-square flex items-center rounded-full bg-red-600"
                            />
                        )}
                    </AnimatePresence>
                    <span>customizable cursor</span>
                </h3>
                <div className="flex items-center gap-2">
                    <span className="text-[20px] -mt-1">menu</span>
                    <div className="relative w-6 h-2.5">
                        <div className="absolute left-0 top-0 h-[2px] w-full bg-black" />
                        <div className="absolute left-0 bottom-0 h-[2px] w-full bg-black" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
