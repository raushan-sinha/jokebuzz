import { useEffect, useState } from "react";

interface JokeDataProps {
    category: string,
    delivery: string,
    setup: string
}

export default function Home() {
    const [jokeData, setJokeData] = useState<JokeDataProps>({ category: '', delivery: '', setup: '' });
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);

        const fetchJokeData = async () => {
            try {
                const apiResponse = await fetch('http://localhost:5000/api/joke-api');
                if (!apiResponse.ok) throw new Error('Failed to fetch Joke API response!');
                const data = await apiResponse.json();
                console.log(data);
                setJokeData(data);
            } catch (error) {
                console.error('Error', error);
                setError('Network is poor. Please check your connection.')
            } finally {
                setLoading(false);
            }
        }

        fetchJokeData();
    }, []);

    return (
        <>
            {error && (
                <p className="text-reds-500">{error}</p>
            )}

            {loading ? (
                <div className="flex items-center justify-center gap-3 py-10">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
                    <span className="text-red-700 font-bold text-2xl">Loading Joke...</span>
                </div>
            ) : (
                <article aria-labelledby="joke-title" className="mx-auto w-full max-w-3xl rounded-2xl border border-zinc-200 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-6 md:p-8 dark:border-zinc-800 dark:bg-zinc-900">
                    <header className="mb-6 flex items-center justify-between gap-3">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 sm:px-4 sm:text-sm dark:bg-blue-900/30 dark:text-blue-400">
                            {jokeData.category}
                        </span>

                        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 sm:px-4 sm:text-sm dark:bg-violet-900/30 dark:text-violet-400">
                            Joke
                        </span>
                    </header>

                    <section className="mb-6">
                        <h2 id="joke-title" className="text-center text-lg font-bold leading-relaxed text-zinc-900 sm:text-xl md:text-2xl lg:text-3xl dark:text-white">
                            {jokeData.setup}
                        </h2>
                    </section>

                    <footer>
                        <blockquote className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-center shadow-md sm:p-5 md:p-6">
                            <p className="text-base font-semibold text-white sm:text-lg md:text-xl">
                                {jokeData.delivery}
                            </p>
                        </blockquote>
                    </footer>
                </article>
            )}
        </>
    )
}