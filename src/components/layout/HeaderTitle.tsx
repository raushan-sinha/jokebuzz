import { FaSmile } from "react-icons/fa";

interface TitleProps {
    title: string
}

export default function HeaderTitle({ title }: TitleProps) {
    return (
        <div className="flex items-center gap-1">
            <FaSmile fontSize={25} />
            <h1 className="text-red-600 text-2xl bold font-mono">{title}</h1>
        </div>
    )
}