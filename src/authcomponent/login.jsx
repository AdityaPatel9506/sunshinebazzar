// LoginPage.js
import React from 'react';
import CustomSlider from './slider'; // Import the CustomSlider component
import './login.css'; // Import the CSS file for styling

const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="slider">
                <CustomSlider /> {/* Use the CustomSlider here */}
            </div>
            <div className="login-form">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>

        </div>
    );
};

export default LoginPage;
