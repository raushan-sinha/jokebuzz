interface TitleProps {
    title: string
}

export default function HeaderTitle({ title }: TitleProps) {
    return (
        <h1 className="text-red-600 text-2xl bold font-mono">{title}</h1>
    )
}