interface DeviceIntegrationItemProps {
    logo: any;
    name: string;
    id: string;
    active: Boolean;
    clickEvent: any;
}

const DeviceIntegrationItem = (props: DeviceIntegrationItemProps) => {
    return (
        <div onClick={props.clickEvent} id={props.id} className={`bg-white rounded-lg shadow-card py-4 px-4 ${props.active ? "bg-purpleControlly/20" : "cursor-pointer"}`}>
            <img src={props.logo} alt={props.name} draggable="false" className="float-left w-16 mr-3" />
            <h4 className="font-sans font-medium text-lg mt-4">{props.name}</h4>
        </div>
    );
}

export default DeviceIntegrationItem;