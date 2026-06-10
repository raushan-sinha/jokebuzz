import { FaSmile } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface TitleProps {
    title: string
}

export default function HeaderTitle({ title }: TitleProps) {
    const navigate = useNavigate();

    const homePage = () => {
        navigate('/');
    }

    return (
        <span className="flex items-center gap-1 cursor-pointer" onClick={homePage}>
            <FaSmile color="blue" fontSize={25} />
            <h1 className="text-red-700 text-2xl font-extrabold font-mono">{title}</h1>
        </span>
    )
}