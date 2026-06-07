import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

export default function ThemeMode() {
    return (
        <button aria-label="theme-toggle">
            <LuMoon fontSize={25} />
            <MdOutlineWbSunny fontSize={25} />
        </button>
    )
}