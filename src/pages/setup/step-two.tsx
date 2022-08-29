import { useEffect } from "react";
import logo from "../../assets/img/Controlly-Panel-Logo.svg";
import SetupCard from "../../components/setup/SetupCard";
import CardSpacer from "../../components/ui/card/CardSpacer";
import PrimaryButton from "../../components/ui/buttons/PrimaryButton";
import CardFooter from "../../components/ui/card/CardFooter";
import SetupProgress from "../../components/setup/SetupProgress";
import PrimaryAlert from "../../components/ui/alert/PrimaryAlert";
import TextInput from "../../components/ui/input/TextInput";
import Select from "../../components/ui/input/Select";
import DomainSelection from "../../components/ui/input/DomainSelection";

const StepTwo = () => {

    useEffect(() => {
        document.title = "Controlly - Setup: Step 2";
    });

    let timezoneList = [
        {
            value: "UTC +01:00",
            text: "UTC +01:00"
        }
    ];

    return (
        <main className="bg-backgroundColor h-full w-full animate__animated animate__fadeIn">
            <div className="pt-24 pb-18">
                <img src={logo} alt="Controlly Logo" className="w-96 block mx-auto" draggable="false" />
                <SetupCard title="Step 2 - Core Configuration">
                    <div className="px-12">
                        <PrimaryAlert>If you do not want to control your home remotely, do not enter a domain.</PrimaryAlert>
                        <form>
                            <TextInput label="Home Name" type="text" id="StepTwo_Name" name="StepTwo_Name" />
                            <DomainSelection label="Home Domain" id="StepTwo_Domain" name="StepTwo_Domain" domain=".my-controlly.com" />
                            <Select label="Timezone" id="StepTwo_Timezone" name="StepTwo_Timezone" options={timezoneList} />
                        </form>
                    </div>
                    <CardSpacer />
                    <CardFooter>
                        <PrimaryButton type="submit" id="Setup_StepTwoBtn" text="Next Step" />
                        <SetupProgress currentProgress="w-8/12" />
                    </CardFooter>
                </SetupCard>
            </div>
        </main>
    );
}

export default StepTwo;