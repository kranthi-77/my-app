// TechnicianLogin.js (Updated)
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import './index.css'

function TechnicianLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://nviribackend.onrender.com/login/technician', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (response.ok) {
                console.log('Technician logged in successfully:', data.token);
                navigate('./landing-page');
            } else {
                setErrors(data.error || 'Login failed');
            }
        } catch (error) {
            setErrors('Server error');
        }
    };

    return (
        <div className='form-container'>
        <form onSubmit={handleLogin} className='form'>
            <h2 className='form-heading'>Technician Login</h2>
            <div className='input-container'>
                <label className='label'>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder='enter email here..'
                    className='input'
                    />
            </div>
            <div className='input-container'>
                <label className='label'>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    placeholder='enter password here..'
                    className='input'
                />
            </div>
            {errors && <p style={{ color: 'red' }}>{errors}</p>}
            <button type="submit" className='submit-btn'>Login</button>
        </form>
        </div>
    );
}

export default TechnicianLogin;