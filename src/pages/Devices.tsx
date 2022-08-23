import { useEffect, useState } from "react";
import DeviceOnOffVisual from "../components/devices/DeviceOnOffVisual";
import DashboardLayout from "../components/layout/DashboardLayout";
import Modal from "../components/ui/modal/Modal";

import LightOff from "../assets/img/devices/light-off.svg";
import LightOn from "../assets/img/devices/light-on.svg";
import DangerButton from "../components/ui/buttons/DangerButton";
import SecondaryButton from "../components/ui/buttons/SecondaryButton";

const Devices = () => {

    const [removeModalOpen, setRemoveModalOpen] = useState(false);

    let breadcrumbsPast = ["Home", "Configuration"];

    let tabsList = [
        {
            name: "Active",
            active: true,
            link: "/devices"
        },
        {
            name: "Devices Found",
            badge: "16",
            active: false,
            link: "/devices-found"
        },
        {
            name: "Manual Setup",
            active: false,
            link: "/devices-manual"
        }
    ];

    const removeDevice = () => {
        setRemoveModalOpen(true);
    }

    const cancelModal = () => {
        setRemoveModalOpen(false);
    }

    useEffect(() => {
        document.title = "Controlly - Devices";
    });

    return (
        <DashboardLayout
            alert={`Can't find a device? Search for its`}
            alertLink="/integrations"
            alertText="integration"
            alertIcon="&#128161;"
            title="Devices"
            active="Devices"
            breadcrumbsActive="Devices"
            breadcrumbsPast={breadcrumbsPast}
            tabs={tabsList}
        >
            <div className="grid grid-cols-5 gap-5">
                <DeviceOnOffVisual removeEvent={removeDevice} image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" advancedDetails={[{name: "Name", value: "bedroom_1"},{name: "State", value: "off"},{name: "Groups", value: "2"},{name: "Bridge", value: "hue_bridge_home"}]} />
                <DeviceOnOffVisual removeEvent={removeDevice} image={LightOn} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" advancedDetails={[{name: "Name", value: "bedroom_1"},{name: "State", value: "off"},{name: "Groups", value: "2"},{name: "Bridge", value: "hue_bridge_home"}]} />
                <DeviceOnOffVisual removeEvent={removeDevice} image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" advancedDetails={[{name: "Name", value: "bedroom_1"},{name: "State", value: "off"},{name: "Groups", value: "2"},{name: "Bridge", value: "hue_bridge_home"}]} />
                <DeviceOnOffVisual removeEvent={removeDevice} image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" advancedDetails={[{name: "Name", value: "bedroom_1"},{name: "State", value: "off"},{name: "Groups", value: "2"},{name: "Bridge", value: "hue_bridge_home"}]} />
                <DeviceOnOffVisual removeEvent={removeDevice} image={LightOn}id="bedroom_1" integration="Philips Hue" name="Bedroom 1" advancedDetails={[{name: "Name", value: "bedroom_1"},{name: "State", value: "off"},{name: "Groups", value: "2"},{name: "Bridge", value: "hue_bridge_home"}]} />
                <DeviceOnOffVisual removeEvent={removeDevice} image={LightOn} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" advancedDetails={[{name: "Name", value: "bedroom_1"},{name: "State", value: "off"},{name: "Groups", value: "2"},{name: "Bridge", value: "hue_bridge_home"}]} />
                <DeviceOnOffVisual removeEvent={removeDevice} image={LightOn} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" advancedDetails={[{name: "Name", value: "bedroom_1"},{name: "State", value: "off"},{name: "Groups", value: "2"},{name: "Bridge", value: "hue_bridge_home"}]} />
            </div>

            <Modal show={removeModalOpen} closeModal={cancelModal}>
                <h3 className="font-sans font-medium text-base text-center">Are you sure you want to remove (NAME)?</h3>
                <DangerButton id="removeModal">Remove</DangerButton>
                <SecondaryButton id="cancelModal" clickEvent={cancelModal}>Cancel</SecondaryButton>
            </Modal>
        </DashboardLayout>
    );

}

export default Devices;