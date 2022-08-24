import { useEffect } from "react";
import logo from "../../assets/img/Controlly-Panel-Logo.svg";
import SetupCard from "../../components/setup/SetupCard";
import SetupSectionTitle from "../../components/setup/SetupSectionTitle";
import LoadingBar from "../../components/ui/progress-bar/LoadingBar";

const ConfiguringHome = () => {
    
    useEffect(() => {
        document.title = "Controlly - Configuring Home";
    });

    return (
        <main className="bg-backgroundColor h-full w-full">
            <div className="pt-24 pb-18">
                <img src={logo} alt="Controlly Logo" className="w-96 block mx-auto" draggable="false" />
                <SetupCard title="Configuring Home">
                    <div className="px-12 pb-12">
                        <p className="leading-6 text-sm mb-6 text-black/50 font-sans font-normal mt-2">Please wait a few minutes whilst we configure your new home!</p>
                        <LoadingBar />
                    </div>
                </SetupCard>
            </div>
        </main>
    );
}

export default ConfiguringHome;