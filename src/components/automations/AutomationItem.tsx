import DangerButton from "../ui/buttons/DangerButton";
import PrimaryButton from "../ui/buttons/PrimaryButton";

interface AutomationItemProps {
    id: string;
    name: string;
    children?: string;
    removeEvent: any;
}

const AutomationItem = (props: AutomationItemProps) => {
    return (
        <div className="bg-white py-4 px-6 shadow-card rounded-lg">
            <span className="bg-greenSuccess/20 text-sm font-sans font-semibold text-greenSuccess py-1.5 px-2 rounded-md mr-2">Active</span>
            <span className="bg-purpleControlly/20 text-sm font-sans font-semibold text-purpleControlly py-1.5 px-2 rounded-md">Last Updated: 4 Hours Ago</span>

            <h3 className="font-sans font-medium pt-4 text-lg">{props.name}</h3>
            <p className="font-sans font-medium text-black/50 text-sm leading-6 mt-1">{props.children}</p>

            <div className="grid grid-cols-2 gap-5">
                <PrimaryButton text="Edit" id={"Edit_" + props.id} url="/edit-automation" classes="text-center mt-4 !py-2 !text-base !mr-0" />
                <PrimaryButton text="Run Log" id={"Logs_" + props.id} url="/automation-logs" classes="text-center mt-4 !py-2 !text-base !mr-0" />
            </div>
            <DangerButton id="removeAutomation" clickEvent={props.removeEvent}>Remove</DangerButton>
        </div>
    );
}

export default AutomationItem;