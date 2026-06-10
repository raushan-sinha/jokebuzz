import { FaBlog } from "react-icons/fa";

export default function FavoriteBtn() {
    return (
        <button
            className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all hover:scale-105 hover:shadow-md cursor-pointer"
        >
            <span>
                <FaBlog color="red" />
            </span>
            <span className="hidden sm:inline">
                Blog
            </span>
        </button>
    )
}