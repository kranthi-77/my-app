import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

function TechnicianRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) => password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#\$%\^&\*]/.test(password);

    const handleRegister = async (e) => {
        e.preventDefault();
        let formErrors = {};

        if (!validateEmail(email)) formErrors.email = 'Invalid email format';
        if (!validatePassword(password)) formErrors.password = 'Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters';
        if (password !== confirmPassword) formErrors.confirmPassword = 'Passwords do not match';
        if (businessName.trim() === '') formErrors.businessName = 'Business name is required';

        if (Object.keys(formErrors).length === 0) {
            try {
                const response = await fetch('https://nviribackend.onrender.com/register/technician', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password, name: businessName }),
                });
                const data = await response.json();

                if (response.ok) {
                    console.log('Technician registered successfully:', data.token);
                    navigate('/landing-page');
                } else {
                    setErrors(data.error || 'Registration failed');
                }
            } catch (error) {
                setErrors('Server error');
            }
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className='form-container'>
        <form onSubmit={handleRegister} className='form'>
            <h2 className='form-heading'>Technician Registration</h2>
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
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
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
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            <div className='input-container'>
                <label className='label'>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                    placeholder='Re-enter password here..'
                    className='input'
                    />
                {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
            </div>
            <div className='input-container'>
                <label className='label'>Business Name:</label>
                <input
                    type="text"
                    value={businessName}
                    onChange={e => setBusinessName(e.target.value)}
                    required
                    placeholder='enter business name here..'
                    className='input'
                />
                {errors.businessName && <p style={{ color: 'red' }}>{errors.businessName}</p>}
            </div>
            {errors && typeof errors === 'string' && <p style={{ color: 'red' }}>{errors}</p>}
            <button type="submit" className='submit-btn'>Register</button>
            <p className='already-account-para'>Already have an account? <span onClick={() => navigate('/technician-login')} style={{ cursor: 'pointer', color: 'blue' }}>Login here</span></p>

        </form>
        </div>
    );
}

export default TechnicianRegister;