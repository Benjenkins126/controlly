interface DangerButtonProps {
    children: React.ReactNode;
    id: string;
    clickEvent?: any;
    classes?: string;
}

const DangerButton = (props: DangerButtonProps) => {
    return (
        <button onClick={props.clickEvent} id={props.id} className={"pulseBtn relative overflow-hidden transition-all ease-in-out duration-300 hover:bg-dangerRed/10 text-dangerRed font-medium font-sans text-center block w-full border-dangerRed border-2 rounded-md py-1.5 mt-4 " + props.classes}>{props.children}</button>
    );
}

export default DangerButton;