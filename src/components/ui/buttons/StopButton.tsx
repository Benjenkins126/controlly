import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

interface StopButtonProps {
    id: string;
    name: string;
    disabled: Boolean;
}

const StopButton = (props: StopButtonProps) => {
    return (
        <button className={`rounded text-lg w-12 h-9 mt-2 mx-1 ${props.disabled ? "bg-stopRed/20" : "bg-stopRed"}`}>
            <FontAwesomeIcon icon={faPowerOff} className="text-white" />
        </button>
    );
}

export default StopButton;