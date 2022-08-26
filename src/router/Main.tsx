import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import PermissionError from '../pages/PermissionError';
import StepOne from '../pages/setup/step-one';
import StepThree from '../pages/setup/step-three';
import StepTwo from '../pages/setup/step-two';
import Devices from '../pages/Devices';
import DevicesFound from '../pages/Devices-Found';
import Groups from "../pages/Groups";
import DevicesManual from '../pages/Devices-Manual';
import Integrations from '../pages/Integrations';
import DisabledIntegrations from '../pages/Disabled-Integrations';
import ConfiguringHome from '../pages/setup/configuring-home';
import IntegrationLogs from '../pages/Integration-Logs';
import EditGroup from '../pages/Edit-Group';

const Main = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/setup/step-one' element={<StepOne/>} />
            <Route path='/setup/step-two' element={<StepTwo/>} />
            <Route path='/setup/step-three' element={<StepThree/>} />
            <Route path='/setup/configuring-home' element={<ConfiguringHome />} />
            <Route path='/devices' element={<Devices />} />
            <Route path="/devices-found" element={<DevicesFound />} />
            <Route path='/devices-manual' element={<DevicesManual />} />
            <Route path='/groups' element={<Groups />} />
            <Route path="/edit-group" element={<EditGroup />} />
            <Route path='/integrations' element={<Integrations />} />
            <Route path='/integration-logs' element={<IntegrationLogs />} />
            <Route path='/disabled-integrations' element={<DisabledIntegrations />} />
            <Route path='/permission-error' element={<PermissionError/>} />
        </Routes>
    );
}

export default Main;