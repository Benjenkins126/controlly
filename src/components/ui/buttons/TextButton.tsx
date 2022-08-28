interface TextButtonProps {
    text: string;
    href: string;
}

const TextButton = (props: TextButtonProps) => {
    return (
        <a href={props.href} className={"pulseBtn relative overflow-hidden hover:bg-black/10 transition-all inline-block duration-300 ease-in-out ml-2 px-7 rounded text-black font-sans py-3 text-sm font-medium"}>{props.text}</a>
    );
}

export default TextButton;