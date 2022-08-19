import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import PermissionError from '../pages/PermissionError';

const Main = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/permission-error' element={<PermissionError/>} />
        </Routes>
    );
}

export default Main;