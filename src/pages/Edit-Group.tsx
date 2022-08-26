import { useEffect } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";

import LightOff from "../assets/img/devices/light-off.svg";
import HueLogo from "../assets/img/integrations/philips-hue-logo.svg";
import DeviceIntegrationItem from "../components/devices/DeviceIntegrationItem";
import TextInput from "../components/ui/input/TextInput";
import PrimaryButton from "../components/ui/buttons/PrimaryButton";
import GroupDeviceItem from "../components/groups/GroupDeviceItem";

const EditGroup = () => {
    
    let breadcrumbsPast = ["Home", "Configuration"];

    let tabsList = [
        {
            name: "Bedroom 1",
            active: true,
            link: ""
        }
    ];

    const integrationSelect = () => {
        return true;
    }

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

    useEffect(() => {
        document.title = "Controlly - Edit Group";
    });

    return (
        <DashboardLayout
            title="Edit Group"
            active="Groups"
            breadcrumbsActive="Edit Group"
            breadcrumbsPast={breadcrumbsPast}
            tabs={tabsList}
        >
            <div className="grid gap-5 grid-cols-3">
                <div className="border-r border-black/10 pr-6">
                    <h2 className="font-sans text-base font-medium pb-5">Select Integration</h2>
                    <div className="grid grid-cols-2 gap-5">
                        {integrationsList.map(integration => (
                            <DeviceIntegrationItem logo={integration.logo} name={integration.name} id={integration.id} active={integration.active} clickEvent={integrationSelect} />
                        ))}
                    </div>
                </div>
                <div className="col-span-2 pl-1">
                    <h2 className="font-sans text-base font-medium pb-5">
                        Configuration
                        <span className="float-right">
                            <PrimaryButton text="Save" id="EditGroup_Save" classes="!py-2 relative -top-2 !mr-0" />
                        </span>
                    </h2>
                    <div className="bg-white pb-5 pt-4 px-6 shadow-card rounded-lg">
                        <TextInput type="text" id="EditGroup_Name" name="EditGroup_Name" label="Group Name" classes="!pt-0" />
                    </div>

                    <h2 className="font-sans text-base font-medium pt-8 pb-5">Included Devices <span className="text-xs text-white bg-purpleControlly rounded-full px-2 py-1 ml-1.5 relative -top-0.5">64</span></h2>
                    <div className="bg-white py-6 px-6 shadow-card rounded-lg gap-5 grid-cols-5 grid">
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                        <GroupDeviceItem image={LightOff} name="Bedroom 1" />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default EditGroup;