import { Header } from "./components/layout"
import { Home } from "./pages"

function App() {
    return (
        <>
            <nav>
                <Header />
            </nav>

            <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-10">
                <Home />
            </main>
        </>
    )
}

export default App