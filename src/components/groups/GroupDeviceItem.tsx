interface GroupDeviceItemProps {
    image: any;
    name: string;
}

const GroupDeviceItem = (props: GroupDeviceItemProps) => {
    return (
        <div className="bg-bgContent rounded-lg px-4 py-2">
            <img src={props.image} alt={props.name} draggable="false" className="w-7 float-left mr-2" />
            <h5 className="font-sans text-base font-medium mt-0.5">{props.name}</h5>
        </div>
    );
}

export default GroupDeviceItem;