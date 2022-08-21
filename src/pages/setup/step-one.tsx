import { useEffect } from "react";
import logo from '../../assets/img/Controlly-Panel-Logo.svg';
import SetupCard from "../../components/setup/SetupCard";
import SetupSectionTitle from "../../components/setup/SetupSectionTitle";
import SetupHealthItem from "../../components/setup/SetupHealthItem";
import CardSpacer from "../../components/ui/card/CardSpacer";
import PrimaryButton from "../../components/ui/buttons/PrimaryButton";
import CardFooter from "../../components/ui/card/CardFooter";
import SetupProgress from "../../components/setup/SetupProgress";

const StepOne = () => {

    useEffect(() => {
        document.title = "Controlly - Setup: Step 1";
    });

    return (
        <main className="bg-backgroundColor h-full w-full">
            <div className="pt-24 pb-18">
                <img src={logo} alt="Controlly Logo" className="w-96 block mx-auto" draggable="false" />
                <SetupCard title="Welcome to your new Smart Home!">
                    <div className="px-12">
                        <p className="leading-6 text-sm mt-6 text-black/50 font-sans font-normal">Let's get you started with configuring the basics. Once configured, you will be ready to begin configuring dashboards and integrations.</p>
                        <SetupSectionTitle>Health Checks</SetupSectionTitle>
                        <p className="mt-3 leading-6 text-sm text-black/50 font-sans font-normal">
                            You appear to have some potential issues with your installation. Please click on each issue to get troubleshooting guides.
                            <br/>
                            <strong className="text-black/75 font-medium">If you do not fix the issues you may run into problems later.</strong>
                        </p>
                        <div className="mt-2.5">
                            <SetupHealthItem criteria={false} info="https://google.com">
                            Your network is not configured for external connections
                            </SetupHealthItem>
                            <SetupHealthItem criteria={false} info="https://google.com">
                            You do not have a static IP Address
                            </SetupHealthItem>
                            <SetupHealthItem criteria={true} info="https://google.com">
                            Your web server is configured correctly
                            </SetupHealthItem>
                            <SetupHealthItem criteria={true} info="https://google.com">
                            Your integrations manager is running
                            </SetupHealthItem>
                        </div>
                        <button className="mt-2.5 font-medium text-white font-sans text-sm bg-black/30 px-4 py-2 rounded">
                            Re-Run Checks
                        </button>
                    </div>
                    <CardSpacer />
                    <CardFooter>
                        <PrimaryButton type="submit" id="Setup_StepOneBtn" text="Next Step" />
                        <SetupProgress currentProgress="w-4/12" />
                    </CardFooter>
                </SetupCard>
            </div>
        </main>
    );
}

export default StepOne;