interface DangerButtonProps {
    children: React.ReactNode;
    id: string;
    clickEvent?: any;
}

const DangerButton = (props: DangerButtonProps) => {
    return (
        <button onClick={props.clickEvent} id={props.id} className="text-dangerRed font-medium font-sans text-center block w-full border-dangerRed border-2 rounded-md py-1.5 mt-4">{props.children}</button>
    );
}

export default DangerButton;