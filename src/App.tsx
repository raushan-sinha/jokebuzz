import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/layout"
import { Blog, Home } from "./pages"

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Header />
            </nav>


            <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App