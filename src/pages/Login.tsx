import { useEffect } from 'react';
import logo from '../assets/img/Controlly-Panel-Logo.svg';
import SetupCard from '../components/setup/SetupCard';
import PrimaryButton from '../components/ui/buttons/PrimaryButton';
import TextButton from '../components/ui/buttons/TextButton';
import CardFooter from '../components/ui/card/CardFooter';
import CardSpacer from '../components/ui/card/CardSpacer';
import TextInput from '../components/ui/input/TextInput';

const Login = () => {

    useEffect(() => {
        document.title = "Controlly - Login";
    });

    return (
        <main className="bg-backgroundColor h-full w-full animate__animated animate__fadeIn">
            <div className="pt-44 pb-10">
                <img src={logo} alt="Controlly Logo" className="w-96 block mx-auto" draggable="false" />
                <SetupCard title="Sign In">
                    <form>
                        <div className="px-12">
                            <TextInput type="text" label="Username or Email Address" id="Login_Username" name="Login_Username" />
                            <TextInput type="password" label="Password" id="Login_Password" name="Login_Password" />
                        </div>
                        <CardSpacer />
                        <CardFooter>
                            <PrimaryButton type="submit" id="Login_Submit" text="Sign In" classes="float-left" />
                            <TextButton text="Trouble Signing In?" href="https://docs.controlly.co.uk" />
                        </CardFooter>
                    </form>
                </SetupCard>
            </div>
        </main>
    );
}

export default Login;