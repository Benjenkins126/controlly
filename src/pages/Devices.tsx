import { useEffect } from "react";
import logo from "../assets/img/Controlly-Panel-Logo.svg";
import DashboardLayout from "../components/layout/DashboardLayout";

const Devices = () => {

    useEffect(() => {
        document.title = "Controlly - Devices";
    });

    return (
        <DashboardLayout>
            
        </DashboardLayout>
    );

}

export default Devices;