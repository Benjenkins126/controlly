interface TextButtonProps {
    text: string;
    href: string;
}

const TextButton = (props: TextButtonProps) => {
    return (
        <a href={props.href} className="text-black font-sans py-3 text-sm font-medium">{props.text}</a>
    );
}

export default TextButton;