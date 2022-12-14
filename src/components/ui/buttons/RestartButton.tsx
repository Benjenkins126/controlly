import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

interface RestartButtonProps {
    id: string;
    name: string;
    disabled: Boolean;
}

const RestartButton = (props: RestartButtonProps) => {
    return (
        <button className={`rounded text-lg w-12 h-9 mt-2 mx-1 relative overflow-hidden transition-all ease-in-out duration-300 ${props.disabled ? "bg-restartAmber/20" : "bg-restartAmber pulseBtn"}`}>
            <FontAwesomeIcon icon={faRefresh} className="text-white" />
        </button>
    );
}

export default RestartButton;