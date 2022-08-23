import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import PermissionError from '../pages/PermissionError';
import StepOne from '../pages/setup/step-one';
import StepThree from '../pages/setup/step-three';
import StepTwo from '../pages/setup/step-two';
import Devices from '../pages/Devices';
import DevicesFound from '../pages/Devices-Found';

const Main = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/setup/step-one' element={<StepOne/>} />
            <Route path='/setup/step-two' element={<StepTwo/>} />
            <Route path='/setup/step-three' element={<StepThree/>} />
            <Route path='/devices' element={<Devices />} />
            <Route path="/devices-found" element={<DevicesFound />} />
            <Route path='/permission-error' element={<PermissionError/>} />
        </Routes>
    );
}

export default Main;