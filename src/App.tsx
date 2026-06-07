import { Header } from "./components/layout"

function App() {
    return (
        <>
            <nav>
                <Header />
            </nav>

            <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
                <h1 className="p-25">Hello</h1>
            </main>
        </>
    )
}

export default App