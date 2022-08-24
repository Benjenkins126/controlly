import DangerButton from "../ui/buttons/DangerButton";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import RestartButton from "../ui/buttons/RestartButton";
import StartButton from "../ui/buttons/StartButton";
import StopButton from "../ui/buttons/StopButton";

interface IntegrationItemProps {
    id: string;
    name: string;
    logo: any;
    active: Boolean;
}

const IntegrationItem = (props: IntegrationItemProps) => {
    return (
        <div className="bg-white py-6 px-6 shadow-card rounded-lg">
            <img src={props.logo} alt={props.name} className="w-24 mx-auto" draggable="false" />
            <h2 className="font-sans text-lg font-medium text-center mt-4 mb-2">{props.name}</h2>
            <div className="text-center">
                <StartButton id={"Start_" + props.id} name={"Start_" + props.id} disabled={!props.active} />
                <RestartButton id={"Restart_" + props.id} name={"Restart_" + props.id} disabled={!props.active} />
                <StopButton id={"Stop_" + props.id} name={"Stop_" + props.id} disabled={!props.active} />
            </div>
            <hr className="border-none bg-black/10 my-5 h-0.5" />
            {props.active ? <PrimaryButton text="Logs" id={"Logs_" + props.id} url="/integration-logs" classes="w-full !py-1 border-2 border-purpleControlly block text-center text-base" /> : ''}
            <PrimaryButton text="Configure" id={"Configure_" + props.id} url="/configure-integration" classes="w-full !py-1 border-2 border-purpleControlly block text-center text-base !mt-2" />
            <DangerButton id={"Remove_" + props.id} classes="py-1 !mt-2">Remove</DangerButton>
        </div>
    );
}

export default IntegrationItem;