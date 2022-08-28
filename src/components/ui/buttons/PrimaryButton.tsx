interface PrimaryButtonProps {
    text: string;
    id: string;
    type?: "submit";
    url?: string;
    classes?: string;
    clickEvent?: any;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    if(!props.url) {
        return (
            <button id={props.id} type={props.type} className={"pulseBtn relative overflow-hidden hover:opacity-90 transition-all duration-300 ease-in-out text-white bg-purpleControlly font-sans py-3 px-7 rounded text-sm font-medium " + props.classes} onClick={props.clickEvent}>{props.text}</button>
        );
    } else {
        return (
            <a href={props.url} id={props.id} className={"pulseBtn relative overflow-hidden hover:opacity-90 transition-all duration-300 ease-in-out text-white bg-purpleControlly font-sans py-3 px-7 rounded text-sm font-medium " + props.classes}>{props.text}</a>
        );
    }
}

export default PrimaryButton;