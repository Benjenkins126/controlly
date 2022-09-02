import DashboardLayout from "../components/layout/DashboardLayout";
import WidgetExampleCover from "../assets/img/widgets/WidgetDemoThumbnail.svg";

import { useEffect, useState } from "react";
import WidgetItem from "../components/widgets/WidgetItem";
import DangerButton from "../components/ui/buttons/DangerButton";
import Modal from "../components/ui/modal/Modal";
import SecondaryButton from "../components/ui/buttons/SecondaryButton";

const Widgets = () => {

    const [removeWidgetOpen, setRemoveWidgetOpen] = useState(false);

    let breadcrumbsPast = ["Home", "Configuration"];

    let tabsList = [
        {
            name: "Active",
            active: true,
            link: "/widgets"
        },
        {
            name: "Browse Widgets",
            active: false,
            link: "https://controlly.co.uk/marketplace/"
        }
    ];

    const removeWidget = () => {
        setRemoveWidgetOpen(true);
    }

    const cancelModal = () => {
        setRemoveWidgetOpen(false);
    }

    useEffect(() => {
        document.title = "Controlly - Active Widgets";
    });

    return (
        <DashboardLayout
            title="Active Widgets"
            active="Widgets"
            breadcrumbsActive="Widgets"
            breadcrumbsPast={breadcrumbsPast}
            tabs={tabsList}
        >
            <div className="grid grid-cols-5 gap-5">
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" removeEvent={removeWidget} />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" removeEvent={removeWidget} />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" removeEvent={removeWidget} />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" removeEvent={removeWidget} />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" removeEvent={removeWidget} />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" removeEvent={removeWidget} />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" removeEvent={removeWidget} />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" removeEvent={removeWidget} />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" removeEvent={removeWidget} />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" removeEvent={removeWidget} />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" removeEvent={removeWidget} />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" removeEvent={removeWidget} />
            </div>

            <Modal show={removeWidgetOpen} closeModal={cancelModal}>
                <h3 className="font-sans font-medium text-base text-center">Are you sure you want to delete this widget?</h3>
                <DangerButton id="removeModal">Remove</DangerButton>
                <SecondaryButton id="cancelModal" clickEvent={cancelModal}>Cancel</SecondaryButton>
            </Modal>
        </DashboardLayout>
    );
}

export default Widgets;