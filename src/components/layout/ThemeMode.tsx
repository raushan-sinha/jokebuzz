import { useState } from "react";
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

export default function ThemeMode() {
    const [isDark, setIsDark] = useState<boolean>(false);

    return (
        <button aria-label="theme-toggle" className="cursor-pointer" onClick={() => setIsDark(!isDark)}>
            {isDark ? (
                <LuMoon fontSize={25} />
            ) : (
                <MdOutlineWbSunny fontSize={25} />
            )}
        </button>
    )
}