import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './index.css'
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            //const response = await fetch('https://nviribackend.onrender.com/login/user', {
            //    method: 'POST',
            //    headers: { 'Content-Type': 'application/json' },
            //    body: JSON.stringify({ email, password }),
            //});
            const response = await axios.post('http://localhost:3000/login')
            const data = await response.json();

            if (response.ok) {
                console.log('User logged in successfully:', data.token);
                navigate('/landing-page');
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
        <h2 className='form-heading'>User Login</h2>
        <div className='input-container'>
            <label className='label'>Email:</label>
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className='input'
                placeholder='enter email here..'
            />
        </div>
        <div className='input-container'>
            <label className='label'>Password:</label>
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className='input'
                placeholder='enter password here..'
            />
        </div>
        {errors && <p style={{ color: 'red' }}>{errors}</p>}
        <button type="submit" className='submit-btn'>Login</button>
    </form>
    </div>
);
}

export default Login;