import { useEffect } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";

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

        </DashboardLayout>
    );
}

export default DevicesManual;