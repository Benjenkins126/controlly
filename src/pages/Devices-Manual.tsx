import { useEffect } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";

import HueLogo from "../assets/img/integrations/philips-hue-logo.svg";
import DeviceIntegrationItem from "../components/devices/DeviceIntegrationItem";
import TextInput from "../components/ui/input/TextInput";

const DevicesManual = () => {

    const breadcrumbsPast = ["Home", "Configuration"];

    let tabsList = [
        {
            name: "Active",
            active: false,
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
            active: true,
            link: "/devices-manual"
        }
    ];

    const integrationsList = [
        { logo: HueLogo, name: "Philips Hue", id: "philips_hue_1", active: true },
        { logo: HueLogo, name: "Philips Hue", id: "philips_hue_2", active: false },
        { logo: HueLogo, name: "Philips Hue", id: "philips_hue_3", active: false },
        { logo: HueLogo, name: "Philips Hue", id: "philips_hue_4", active: false },
        { logo: HueLogo, name: "Philips Hue", id: "philips_hue_5", active: false },
        { logo: HueLogo, name: "Philips Hue", id: "philips_hue_6", active: false },
        { logo: HueLogo, name: "Philips Hue", id: "philips_hue_7", active: false },
        { logo: HueLogo, name: "Philips Hue", id: "philips_hue_8", active: false },
        { logo: HueLogo, name: "Philips Hue", id: "philips_hue_9", active: false },
        { logo: HueLogo, name: "Philips Hue", id: "philips_hue_10", active: false },
        { logo: HueLogo, name: "Philips Hue", id: "philips_hue_11", active: false },
        { logo: HueLogo, name: "Philips Hue", id: "philips_hue_12", active: false },
    ];

    const integrationSelect = (event: any) => {
        console.log(event);
    }

    useEffect(() => {
        document.title = "Controlly - Manual Device Setup"
    });

    return (
        <DashboardLayout
            alert={`Can't find a device? Search for its`}
            alertLink="/integrations"
            alertText="integration"
            alertIcon="&#128161;"
            title="Manual Device Setup"
            active="Devices"
            breadcrumbsActive="Manual Device Setup"
            breadcrumbsPast={breadcrumbsPast}
            tabs={tabsList}
        >
            <div className="grid gap-5 grid-cols-3">
                <div>
                    <h2 className="font-sans text-base font-medium pb-5">Select Integration</h2>
                    <div className="grid grid-cols-2 gap-5">
                        {integrationsList.map(integration => (
                            <DeviceIntegrationItem logo={integration.logo} name={integration.name} id={integration.id} active={integration.active} clickEvent={integrationSelect} />
                        ))}
                    </div>
                </div>
                <div className="col-span-2">
                    <h2>Configuration</h2>
                    <div className="bg-white rounded-lg shadow-card pb-4 px-7 mt-4">
                        <TextInput label="IP Address" type="text" id="Setup_IPAddress" name="Setup_IPAddress" />
                        <div className="bg-black/10 rounded-lg mt-6 text-center py-24">Click Button On Bridge</div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default DevicesManual;