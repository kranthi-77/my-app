import React from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';

function SelectionPage() {
    const navigate = useNavigate();

    const handleSelection = (role) => {
        if (role === 'user') {
            navigate('/user-register');
        } else if (role === 'technician') {
            navigate('/technician-register');
        }
    };

    return (
        <div className='selection-page'>
            <div className='main-container'>
            <h2>Are you a User or a Technician?</h2>
            <button onClick={() => handleSelection('user')} className='selection-btn'>
                <img src = "https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724839320/userImage_ehmnn2.png" className='user-icon' />
                <p className='user'>User</p>
            </button>
            <button onClick={() => handleSelection('technician')} className='selection-btn'>
                <img src = "https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724839355/technician_n0wl7w.jpg" className='tech-icon' />
                <p className='user'>Technician</p>
            </button>
            </div>
        </div>
    );
}

export default SelectionPage;