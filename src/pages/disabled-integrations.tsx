import DashboardLayout from "../components/layout/DashboardLayout";

import PhilipsHueLogo from "../assets/img/integrations/philips-hue-logo.svg";
import IntegrationItem from "../components/integrations/IntegrationItem";
import { useEffect } from "react";

const DisabledIntegrations = () => {
    let breadcrumbsPast = ["Home", "Configuration"];

    let tabsList = [
        {
            name: "Active",
            active: false,
            link: "/integrations"
        },
        {
            name: "Add New Integration",
            active: false,
            link: "/add-integration"
        },
        {
            name: "Disabled Integrations",
            active: true,
            link: "/disabled-integrations"
        }
    ];

    useEffect(() => {
        document.title = "Controlly - Disabled Integrations";
    });

    return (
        <DashboardLayout
            title="Disabled Integrations"
            active="Integrations"
            breadcrumbsActive="Disabled Integrations"
            breadcrumbsPast={breadcrumbsPast}
            tabs={tabsList}
        >
            <div className="grid grid-cols-6 gap-5">
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={false} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={false} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={false} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={false} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={false} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={false} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={false} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={false} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={false} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={false} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={false} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={false} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={false} />
            </div>
        </DashboardLayout>
    );
}

export default DisabledIntegrations;