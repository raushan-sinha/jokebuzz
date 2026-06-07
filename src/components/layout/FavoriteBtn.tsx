export default function FavoriteBtn() {
    return (
        <button
            className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all hover:scale-105 hover:shadow-md"
        >
            <span>❤️</span>
            <span className="hidden sm:inline">
                Favorites
            </span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-700 px-1 text-xs text-white">
                12
            </span>
        </button>
    )
}