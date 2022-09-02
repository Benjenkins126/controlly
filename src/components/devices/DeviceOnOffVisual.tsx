import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPowerOff, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import DangerButton from '../ui/buttons/DangerButton';
import PrimaryButton from '../ui/buttons/PrimaryButton';


interface DeviceOnOffVisualProps {
    id: string;
    integration: string;
    name: string;
    image: any;
    advancedDetails: Array<DeviceOnOffVisualAdvanced>;
    removeEvent?: any;
}

interface DeviceOnOffVisualAdvanced {
    name: string;
    value: string;
}

const DeviceOnOffVisual = (props: DeviceOnOffVisualProps) => {
    const [deviceOpen, setDeviceOpen] = useState(false);

    const handleDropdown = () => {
        deviceOpen === true ? setDeviceOpen(false) : setDeviceOpen(true);
    }

    return (
        <div className="bg-white py-4 px-6 shadow-card rounded-lg">
            <span className="bg-purpleControlly/20 text-sm font-sans font-semibold text-purpleControlly py-1.5 px-2 rounded-md">{props.integration}</span>
            <div className="pt-5">
                <img src={props.image} alt={props.name + " Icon"} draggable="false" className="w-10 float-left" />
                <h4 className="inline-block text-lg font-sans font-medium pt-1.5 px-2">{props.name} <span className="text-black/50 text-xs relative -top-0.5 left-0.5 cursor-pointer"><FontAwesomeIcon icon={faPen} /></span></h4>
                <div className="pulseBtn overflow-hidden transition-all duration-300 ease-in-out hover:bg-black/20 float-right w-12 h-12 bg-black/10 rounded-full text-center text-2xl relative -top-1 cursor-pointer">
                    <FontAwesomeIcon icon={faPowerOff} className="pt-3" />
                </div>
                <p onClick={handleDropdown} className="text-black/40 text-xs font-sans font-medium mt-6 text-center cursor-pointer">Advanced Details <FontAwesomeIcon icon={deviceOpen ? faAngleDown : faAngleRight} /></p>
                <div className={`border-t border-black/10 overflow-hidden transition-all ease-out duration-1000 ${deviceOpen ? 'h-auto opacity-100 pt-4 mt-2.5' : 'opacity-0 h-0 pt-0 mt-0'}`}>
                    {props.advancedDetails.map((detail) => (
                        <p className="text-sm leading-6 font-sans font-medium text-black/70">
                            {detail.name}
                            <span className="float-right text-black/40">{detail.value}</span>
                        </p>
                    ))}
                    <PrimaryButton text="Device Information" id={"edit_" + props.id} classes="mt-4 !py-1 w-full !font-medium !text-base border-purpleControlly border-2" />
                    <DangerButton clickEvent={props.removeEvent} id={"remove_" + props.id}>Remove</DangerButton>
                </div>
            </div>
        </div>
    );
}

export default DeviceOnOffVisual;