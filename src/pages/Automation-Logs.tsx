import DashboardLayout from "../components/layout/DashboardLayout";

import { useEffect } from "react";

const AutomationLogs = () => {

    let breadcrumbsPast = ["Home", "Configuration"];

    let tabsList = [
        {
            name: "Active",
            active: true,
            link: ""
        },
        {
            name: "Templates",
            active: false,
            link: "https://controlly.co.uk/marketplace/"
        }
    ];

    useEffect(() => {
        document.title = "Controlly - Automation Logs";
    });

    return (
        <DashboardLayout
            title="Automation Logs"
            active="Automations"
            breadcrumbsActive="Automation Logs"
            breadcrumbsPast={breadcrumbsPast}
            tabs={tabsList}
        >
            <div className="bg-white py-4 px-6 shadow-card rounded-lg leading-5 italic text-sm text-black/50">
                24th August 2022 18:35PM : Philips Hue Has Started<br />
                24th August 2022 18:35PM : Listening on port 82<br />
                24th August 2022 18:35PM : Light bedroom_1 has been switched on<br />
                24th August 2022 18:35PM : Group bedroom_new has been deleted<br />
                24th August 2022 18:35PM : The device named bedroom_1 is non-responsive. Please check your internet connectivity<br />
                24th August 2022 18:35PM : Light bedroom_2 has been switched on<br />
                24th August 2022 18:35PM : Light bedroom_3 has been switched on<br />
                24th August 2022 18:35PM : Group new_home has been switched on<br />
                24th August 2022 18:35PM : Philips Hue Has Started<br />
                24th August 2022 18:35PM : Listening on port 82<br />
                24th August 2022 18:35PM : Light bedroom_1 has been switched on<br />
                24th August 2022 18:35PM : Group bedroom_new has been deleted<br />
                24th August 2022 18:35PM : The device named bedroom_1 is non-responsive. Please check your internet connectivity<br />
                24th August 2022 18:35PM : Light bedroom_2 has been switched on<br />
                24th August 2022 18:35PM : Philips Hue Has Started<br />
                24th August 2022 18:35PM : Listening on port 82<br />
                24th August 2022 18:35PM : Light bedroom_1 has been switched on<br />
                24th August 2022 18:35PM : Group bedroom_new has been deleted<br />
                24th August 2022 18:35PM : The device named bedroom_1 is non-responsive. Please check your internet connectivity<br />
                24th August 2022 18:35PM : Light bedroom_2 has been switched on<br />
                24th August 2022 18:35PM : Philips Hue Has Started<br />
                24th August 2022 18:35PM : Listening on port 82<br />
                24th August 2022 18:35PM : Light bedroom_1 has been switched on<br />
                24th August 2022 18:35PM : Group bedroom_new has been deleted<br />
                24th August 2022 18:35PM : The device named bedroom_1 is non-responsive. Please check your internet connectivity<br />
                24th August 2022 18:35PM : Light bedroom_2 has been switched on<br />
                24th August 2022 18:35PM : Philips Hue Has Started<br />
                24th August 2022 18:35PM : Listening on port 82<br />
                24th August 2022 18:35PM : Light bedroom_1 has been switched on<br />
                24th August 2022 18:35PM : Group bedroom_new has been deleted<br />
                24th August 2022 18:35PM : The device named bedroom_1 is non-responsive. Please check your internet connectivity<br />
                24th August 2022 18:35PM : Light bedroom_2 has been switched on<br />
                24th August 2022 18:35PM : Philips Hue Has Started
            </div>
        </DashboardLayout>
    );
}

export default AutomationLogs;