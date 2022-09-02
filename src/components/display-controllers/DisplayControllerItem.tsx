import DangerButton from "../ui/buttons/DangerButton";
import PrimaryButton from "../ui/buttons/PrimaryButton";

interface DisplayControllerProps {
    id: string;
    dashboard: string;
    status: string;
    name: string;
    removeEvent: any;
    editEvent: any;
}

const DisplayControllerItem = (props: DisplayControllerProps) => {
    return (
        <div className="bg-white py-6 px-6 shadow-card rounded-lg">
            <span className="bg-purpleControlly/20 text-sm font-sans font-semibold text-purpleControlly py-1.5 px-2 rounded-md">{props.dashboard}</span>
            {props.status === "Online" ?
                <span className="bg-greenSuccess/20 text-sm ml-2 font-sans font-semibold text-greenSuccess py-1.5 px-2 rounded-md">Online</span>
                :
                <span className="bg-stopRed/20 text-sm ml-2 font-sans font-semibold text-stopRed py-1.5 px-2 rounded-md">Offline</span>
            }
            <h2 className="font-sans text-lg font-medium mt-4 mb-2">{props.name}</h2>

            <PrimaryButton clickEvent={props.editEvent} text="Edit" id={"Edit_" + props.id} classes="w-full !py-1 text-base border-2 border-purpleControlly block text-center text-black !mt-4" />
            <DangerButton id={"Remove_" + props.id} classes="py-1 !mt-2" clickEvent={props.removeEvent}>Remove</DangerButton>
        </div>
    );
}

export default DisplayControllerItem;