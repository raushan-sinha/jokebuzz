import BlogBtn from "./BlogBtn";
import HeaderTitle from "./HeaderTitle";
import ThemeMode from "./ThemeMode";

export default function Header() {
    return (
        <>
            <header className="w-full border-b">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <HeaderTitle title="JokeBuzz" />

                    <div className="flex items-center gap-3">
                        <ThemeMode />
                        <BlogBtn />
                    </div>
                </div>
            </header>
        </>
    )
}