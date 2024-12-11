import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import TechnicianLogin from './components/TechnicianLogin/TechnicianLogin';
import UserRegister from './components/UserRegister/UserRegister';
import TechnicianRegister from './components/TechnicianRegister/TechnicianRegister';
import LandingPage from "./components/LandingPage/LandingPage"
import SelectionPage from './components/SelectionPage/SelectionPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<SelectionPage />} />
                    <Route path="/user-login" element={<Login />} />
                    <Route path="/technician-login" element={<TechnicianLogin />} />
                    <Route path="/user-register" element={<UserRegister />} />
                    <Route path="/technician-register" element={<TechnicianRegister />} />
                    <Route path="/landing-page" element={<LandingPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;