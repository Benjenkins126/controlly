import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

interface NotificationItemProps {
    name: string;
    timestamp: string;
    url?: string;
}

const NotificationItem = (props: NotificationItemProps) => {

    return (
        <div className="border-b border-black/10 py-3 pl-6 relative ">
            <span className="float-left text-purpleControlly text-base top-3.5 absolute -left-0">
                <FontAwesomeIcon icon={faBell} />
            </span>
            <h5 className="font-medium font-sans text-base">{props.name}</h5>
            <h6 className="font-medium font-sans text-sm text-black/50">{props.timestamp}</h6>
        </div>
    );
}

export default NotificationItem;