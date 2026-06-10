export default function Blog() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
                <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400">
                    About JokeBuzz
                </span>

                <h2 className="mt-4 text-3xl font-bold text-zinc-900 sm:text-4xl md:text-5xl dark:text-white">
                    Discover, Laugh & Enjoy
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
                    JokeBuzz is a modern platform built for people who love
                    humor, programming jokes, tech memes, and entertaining
                    content delivered through a fast and responsive experience.
                </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="mb-4 text-4xl">🎭</div>

                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                        What is JokeBuzz?
                    </h3>

                    <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                        JokeBuzz is a modern joke platform where users can
                        explore programming jokes, developer humor, internet
                        memes, and entertaining content through a clean and
                        user-friendly interface.
                    </p>
                </article>

                <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="mb-4 text-4xl">⚡</div>

                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                        How Does It Work?
                    </h3>

                    <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                        JokeBuzz fetches jokes from an API and presents them in
                        an elegant card-based interface. Users can instantly get
                        new jokes, explore categories, and enjoy a smooth
                        experience across all devices.
                    </p>
                </article>

                <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 md:col-span-2 xl:col-span-1">
                    <div className="mb-4 text-4xl">🚀</div>

                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                        Future Roadmap
                    </h3>

                    <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
                        <li>• Favorite Jokes</li>
                        <li>• User Profiles</li>
                        <li>• Blog Articles</li>
                        <li>• Meme Collections</li>
                        <li>• AI Generated Jokes</li>
                        <li>• Advanced Search</li>
                        <li>• Community Features</li>
                    </ul>
                </article>
            </div>

            <div className="mt-12 rounded-3xl border border-zinc-200 bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-center shadow-xl dark:border-zinc-800">
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Our Vision
                </h3>

                <p className="mx-auto mt-4 max-w-3xl text-zinc-100">
                    We aim to build JokeBuzz into a leading platform for humor,
                    programming jokes, and entertaining content where users can
                    discover, enjoy, and share laughter from anywhere.
                </p>
            </div>
        </section>
    );
}