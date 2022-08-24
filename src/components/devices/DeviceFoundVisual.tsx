import PrimaryButton from "../ui/buttons/PrimaryButton";

interface DeviceFoundVisualProps {
    id: string;
    integration: string;
    name: string;
    image: any;
    addEvent: any;
}

const DeviceFoundVisual = (props: DeviceFoundVisualProps) => {
    return (
        <div className="bg-white py-4 px-6 shadow-card rounded-lg">
            <span className="bg-purpleControlly/20 text-sm font-sans font-semibold text-purpleControlly py-1.5 px-2 rounded-md">{props.integration}</span>
            <div className="pt-5">
                <img src={props.image} alt={props.name + " Icon"} draggable="false" className="w-10 float-left" />
                <h4 className="inline-block text-lg font-sans font-medium pt-1.5 px-2">{props.name}</h4>
                <PrimaryButton text="+ Add To Home" id={props.id} classes="w-full !py-2 mt-5" clickEvent={props.addEvent} />
            </div>
        </div>
    );
}

export default DeviceFoundVisual;