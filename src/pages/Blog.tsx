export default function Blog() {
    return (
        <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
            <div className="absolute inset-0 opacity-40">
                <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-indigo-400 blur-3xl dark:bg-indigo-900" />
                <div className="absolute right-10 top-20 h-48 w-48 rounded-full bg-violet-400 blur-3xl dark:bg-violet-900" />
                <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-pink-400 blur-3xl dark:bg-pink-900" />
            </div>

            <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">
                <span className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold tracking-wide text-indigo-700 shadow-sm dark:border-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-400">
                    🚀 Welcome To JokeBuzz Blog
                </span>

                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
                    Laugh Smarter.
                    <span className="block bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                        Code Better.
                    </span>
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg md:text-xl dark:text-zinc-400">
                    Explore programming jokes, developer humor, coding memes,
                    internet culture, AI fun, and entertaining tech stories
                    designed for modern developers.
                </p>

                <div className="mt-10 flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
                    <input
                        type="text"
                        placeholder="Search blogs, jokes, memes..."
                        className="flex-1 rounded-2xl border border-zinc-300 bg-white px-5 py-4 text-sm outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
                    />

                    <button
                        type="button"
                        className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
                    >
                        Search
                    </button>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                    {[
                        "Programming",
                        "JavaScript",
                        "React",
                        "Developer Humor",
                        "Memes",
                        "AI",
                    ].map((tag) => (
                        <button
                            key={tag}
                            className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-indigo-800 dark:hover:text-indigo-400"
                        >
                            #{tag}
                        </button>
                    ))}
                </div>

                <div className="mt-14 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                            100+
                        </h3>
                        <p className="mt-2 text-sm text-zinc-500">
                            Programming Jokes
                        </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                            50+
                        </h3>
                        <p className="mt-2 text-sm text-zinc-500">
                            Tech Articles
                        </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                            Weekly
                        </h3>
                        <p className="mt-2 text-sm text-zinc-500">
                            Fresh Content
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}