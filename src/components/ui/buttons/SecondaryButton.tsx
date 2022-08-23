interface SecondaryButtonProps {
    children: React.ReactNode;
    id: string;
    clickEvent?: any;
}

const SecondaryButton = (props: SecondaryButtonProps) => {
    return (
        <button onClick={props.clickEvent} id={props.id} className="text-black font-medium font-sans text-center block w-full bg-black/10 rounded-md py-1.5 mt-2">{props.children}</button>
    );
}

export default SecondaryButton;