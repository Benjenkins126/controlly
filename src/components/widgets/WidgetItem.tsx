import DangerButton from "../ui/buttons/DangerButton";
import PrimaryButton from "../ui/buttons/PrimaryButton";

interface WidgetItemProps {
    id: string;
    name: string;
    coverImage: string;
    excerpt: string;
    removeEvent?: any;
}

const WidgetItem = (props: WidgetItemProps) => {
    return (
        <div className="bg-white py-6 px-6 shadow-card rounded-lg">
            <img src={props.coverImage} alt={props.name} className="w-full rounded-lg" draggable="false" />
            <h2 className="font-sans text-lg font-medium mt-4 mb-2">{props.name}</h2>
            <p className="text-black/50 font-sans font-medium text-sm leading-5">{props.excerpt}</p>
            <PrimaryButton text="Details" id={"Details_" + props.id} url="/widget-details" classes="w-full !py-1 text-base border-2 border-purpleControlly block text-center text-black !mt-4" />
            <DangerButton id={"Remove_" + props.id} classes="py-1 !mt-2" clickEvent={props.removeEvent}>Remove</DangerButton>
        </div>
    );
}

export default WidgetItem;