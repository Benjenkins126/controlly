import { Link } from "react-router-dom";

interface PrimaryAlertProps {
    children: React.ReactNode;
    icon?: string;
    link?: string;
    linkText?: string;
    classes?: string;
}

const PrimaryAlert = (props: PrimaryAlertProps) => {
    return (
        <div className={"bg-primaryAlert rounded-lg mt-6 leading-6 px-3 py-2 text-sm text-medium " + props.classes}>
            {props.icon} {props.children} {props.link ? <Link to={props.link}><span className="text-purpleControlly underline">{props.linkText}</span></Link> : ''}
        </div>
    );
}

export default PrimaryAlert;