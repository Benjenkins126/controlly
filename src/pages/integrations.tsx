import DashboardLayout from "../components/layout/DashboardLayout";

import PhilipsHueLogo from "../assets/img/integrations/philips-hue-logo.svg";
import PrimaryAlert from "../components/ui/alert/PrimaryAlert";
import IntegrationItem from "../components/integrations/IntegrationItem";
import { useEffect } from "react";

const Integrations = () => {
    let breadcrumbsPast = ["Home", "Configuration"];

    let tabsList = [
        {
            name: "Active",
            active: true,
            link: "/integrations"
        },
        {
            name: "Add New Integration",
            active: false,
            link: "/add-integration"
        },
        {
            name: "Disabled Integrations",
            active: false,
            link: "/disabled-integrations"
        }
    ];

    useEffect(() => {
        document.title = "Controlly - Active Integrations";
    });

    return (
        <DashboardLayout
            title="Active Integrations"
            active="Integrations"
            breadcrumbsActive="Integrations"
            breadcrumbsPast={breadcrumbsPast}
            tabs={tabsList}
        >
            <PrimaryAlert classes="!mt-0 !inline-block" icon="&#x26A0;&#xFE0F;" link="https://feedback.controlly.co.uk" linkText="here">We are rapidly increasing the number of supported devices. Please leave feedback on devices you want added</PrimaryAlert>
            <div className="grid grid-cols-6 gap-5 mt-6">
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} />
            </div>
        </DashboardLayout>
    );
}

export default Integrations;