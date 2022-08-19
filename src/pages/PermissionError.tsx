import { useEffect } from "react";
import logo from '../assets/img/Controlly-Panel-Logo.svg';
import PrimaryButton from "../components/ui/buttons/PrimaryButton";

const PermissionError = () => {

    useEffect(() => {
        document.title = "Controlly - Permission Denied";
    });

    return (
        <main className="bg-backgroundColor h-full w-full">
            <div className="pt-44 pb-10">
                <img src={logo} alt="Controlly Logo" className="w-96 block mx-auto" draggable="false" />
                <h1 className="text-white font-sans font-extrabold text-center pt-20 text-2xl">Permission Denied</h1>
                <p className="text-white/50 font-sans font-normal text-center text-sm pt-3">You do not have permission to view this page. Please try again later</p>
                <div className="text-center">
                    <PrimaryButton text="Login Page" id="login_page" url="/login" classes="mx-auto mt-6 inline-block" />
                </div>
            </div>
        </main>
    )

}

export default PermissionError;