import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface StartButtonProps {
    id: string;
    name: string;
    disabled: Boolean;
}

const StartButton = (props: StartButtonProps) => {
    return (
        <button className={`rounded text-lg w-12 h-9 mt-2 mx-1 ${!props.disabled ? "bg-startGreen/20" : "bg-startGreen"}`}>
            <FontAwesomeIcon icon={faPlay} className="text-white" />
        </button>
    );
}

export default StartButton;