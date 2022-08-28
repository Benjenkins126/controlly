import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import DangerButton from "../ui/buttons/DangerButton";
import GroupDeviceItem from "./GroupDeviceItem";

interface GroupItemProps {
    name: string;
    id: string;
    devices?: Array<GroupDevices>;
    openModal: any;
}

interface GroupDevices {
    name: string;
    image: any;
    id: string;
}

const GroupItem = (props: GroupItemProps) => {
    return (
        <div className="bg-white py-4 px-6 shadow-card rounded-lg grid grid-cols-4 gap-2 min-h-group">
            <div className="row-span-1 border-r border-black/10 pr-4 relative">
                <h4 className="font-sans font-medium text-lg">{props.name}</h4>
                <h6 className="text-xs text-black/50 font-sans font-medium">{props.devices ? props.devices.length : '0'} Devices</h6>
                <div className="pulseBtn w-12 h-12 bg-black/10 rounded-full text-center text-2xl cursor-pointer my-3 overflow-hidden relative transition-all duration-300 ease-in-out hover:bg-black/20">
                    <FontAwesomeIcon icon={faPowerOff} className="pt-3" />
                </div>
                <div className="absolute bottom-0 left-0 right-4">
                    <PrimaryButton text="Edit" id={"Edit_" + props.id} classes="!py-1 w-full !font-medium !text-base border-purpleControlly border-2" />
                    <DangerButton id={"Remove_" + props.id} classes="!mt-2 !py-1" clickEvent={props.openModal}>Remove</DangerButton>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-x-2.5 gap-y-2.5 col-span-3 pl-4">
                {props.devices?.map((device) => (
                    <GroupDeviceItem image={device.image} name={device.name} />
                ))}
            </div>
        </div>
    );
}

export default GroupItem;