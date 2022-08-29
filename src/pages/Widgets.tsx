import DashboardLayout from "../components/layout/DashboardLayout";
import WidgetExampleCover from "../assets/img/widgets/WidgetDemoThumbnail.svg";

import { useEffect } from "react";
import WidgetItem from "../components/widgets/WidgetItem";

const Widgets = () => {

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
    ]

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
            <div className="grid grid-cols-6 gap-5">
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" />
                <WidgetItem id="lights_on_off" name="Lights On/Off" coverImage={WidgetExampleCover} excerpt="When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home" />
            </div>
        </DashboardLayout>
    );
}

export default Widgets;