import { useEffect } from "react";
import logo from "../../assets/img/Controlly-Panel-Logo.svg";
import SetupCard from "../../components/setup/SetupCard";
import CardSpacer from "../../components/ui/card/CardSpacer";
import PrimaryButton from "../../components/ui/buttons/PrimaryButton";
import CardFooter from "../../components/ui/card/CardFooter";
import SetupProgress from "../../components/setup/SetupProgress";
import TextInput from "../../components/ui/input/TextInput";

const StepThree = () => {

    useEffect(() => {
        document.title = "Controlly - Setup: Step 3";
    });

    return (
        <main className="bg-backgroundColor h-full w-full">
            <div className="pt-24 pb-18">
                <img src={logo} alt="Controlly Logo" className="w-96 block mx-auto" draggable="false" />
                <SetupCard title="Step 3 - Administrator">
                    <div className="px-12">
                        <p className="leading-6 text-sm mt-6 text-black/50 font-sans font-normal">Please create the primary administrator account below.</p>
                        <form>
                            <TextInput label="Email Address" type="email" id="StepThree_EmailAddress" name="StepThree_EmailAddress" />
                            <TextInput label="Username" type="text" id="StepThree_Username" name="StepThree_Username" />
                            <TextInput label="Password" type="password" id="StepThree_Password" name="StepThree_Password" />
                            <TextInput label="Confirm Password" type="password" id="StepThree_ConfirmPassword" name="StepThree_ConfirmPassword" />
                        </form>
                        <p className="mt-6 font-sans font-base text-xxs leading-4 text-black/50">By proceeding you agree to our Terms and Conditions, and that Controlly is an open source project, therefore assumes no liability for any issues that may occur. Controlly is powered by the community, therefore we cannot verify the integrations that are being installed on your device. If you have any questions or concerns, please reach out to the community via our Community Forums.</p>
                    </div>
                    <CardSpacer />
                    <CardFooter>
                        <PrimaryButton type="submit" id="Setup_StepThreeBtn" text="Create Home" />
                        <SetupProgress currentProgress="w-full" />
                    </CardFooter>
                </SetupCard>
            </div>
        </main>
    );
}

export default StepThree;