import { useEffect } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";

import LightOff from "../assets/img/devices/light-off.svg";
import DeviceFoundVisual from "../components/devices/DeviceFoundVisual";

const DevicesFound = () => {
    let breadcrumbsPast = ["Home", "Configuration"];

    let tabsList = [
        {
            name: "Active",
            active: false,
            link: "/devices"
        },
        {
            name: "Devices Found",
            badge: "16",
            active: true,
            link: "/devices-found"
        },
        {
            name: "Manual Setup",
            active: false,
            link: "/devices-manual"
        }
    ];

    useEffect(() => {
        document.title = "Controlly - Devices Found";
    });

    return (
        <DashboardLayout
            alert={`Can't find a device? Search for its`}
            alertLink="/integrations"
            alertText="integrations"
            alertIcon="&#128161;"
            title="Devices Found"
            active="Devices"
            breadcrumbsActive="Devices"
            breadcrumbsPast={breadcrumbsPast}
            tabs={tabsList}
        >
            <div className="grid grid-cols-6 gap-5">
                <DeviceFoundVisual image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" />
                <DeviceFoundVisual image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" />
                <DeviceFoundVisual image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" />
                <DeviceFoundVisual image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" />
                <DeviceFoundVisual image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" />
                <DeviceFoundVisual image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" />
                <DeviceFoundVisual image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" />
                <DeviceFoundVisual image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" />
                <DeviceFoundVisual image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" />
                <DeviceFoundVisual image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" />
                <DeviceFoundVisual image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" />
                <DeviceFoundVisual image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" />
                <DeviceFoundVisual image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" />
                <DeviceFoundVisual image={LightOff} id="bedroom_1" integration="Philips Hue" name="Bedroom 1" />
            </div>
        </DashboardLayout>
    );
}

export default DevicesFound