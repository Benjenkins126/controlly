import DashboardLayout from "../components/layout/DashboardLayout";

import PhilipsHueLogo from "../assets/img/integrations/philips-hue-logo.svg";
import PrimaryAlert from "../components/ui/alert/PrimaryAlert";
import IntegrationItem from "../components/integrations/IntegrationItem";
import { useEffect, useState } from "react";
import Modal from "../components/ui/modal/Modal";
import DangerButton from "../components/ui/buttons/DangerButton";
import SecondaryButton from "../components/ui/buttons/SecondaryButton";

const Integrations = () => {

    const [removeIntegrationOpen, setRemoveIntegrationOpen] = useState(false);

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

    const removeIntegration = () => {
        setRemoveIntegrationOpen(true);
    }

    const cancelModal = () => {
        setRemoveIntegrationOpen(false);
    }

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
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} removeEvent={removeIntegration} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} removeEvent={removeIntegration} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} removeEvent={removeIntegration} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} removeEvent={removeIntegration} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} removeEvent={removeIntegration} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} removeEvent={removeIntegration} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} removeEvent={removeIntegration} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} removeEvent={removeIntegration} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} removeEvent={removeIntegration} />
                <IntegrationItem id="philips_hue" name="Philips Hue" logo={PhilipsHueLogo} active={true} removeEvent={removeIntegration} />
            </div>

            <Modal show={removeIntegrationOpen} closeModal={cancelModal}>
                <h3 className="font-sans font-medium text-base text-center">Are you sure you want to delete Philips Hue?</h3>
                <h5 className="text-black/50 font-sans font-medium text-sm mt-1 text-center">All associated devices will also be deleted</h5>
                <DangerButton id="removeModal">Remove</DangerButton>
                <SecondaryButton id="cancelModal" clickEvent={cancelModal}>Cancel</SecondaryButton>
            </Modal>
        </DashboardLayout>
    );
}

export default Integrations;