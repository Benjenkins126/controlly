interface SecondaryButtonProps {
    children: React.ReactNode;
    id: string;
    clickEvent?: any;
}

const SecondaryButton = (props: SecondaryButtonProps) => {
    return (
        <button onClick={props.clickEvent} id={props.id} className="transition-all duration-300 ease-in-out hover:bg-black/20 pulseBtn overflow-hidden relative text-black font-medium font-sans text-center block w-full bg-black/10 rounded-md py-1.5 mt-2">{props.children}</button>
    );
}

export default SecondaryButton;