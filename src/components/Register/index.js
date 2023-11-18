import React from 'react';
import { Input, Checkbox } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Register.css';


function Register() {
    return (
        <div className="login-box">
            <form>
                <div className="user-box">
                    <label className='title'>Full Name
                        <span style={{ color: 'red' }}> *</span>
                    </label>
                    <Input className='input' placeholder="Your Name" prefix={<FontAwesomeIcon icon={faUser} />} />
                </div>
                <div className="user-box">
                    <label className='title'>User Name or Email
                        <span style={{ color: 'red' }}> *</span>
                    </label>
                    <Input className='input' placeholder="Your User Name or Email" prefix={<FontAwesomeIcon icon={faEnvelope} />} />
                </div>
                <div className="user-box">
                    <label className='title'>Password
                        <span style={{ color: 'red' }}> *</span>
                    </label>
                    <Input.Password className='input' placeholder="input password" prefix={<FontAwesomeIcon icon={faLock} />} />
                </div>
                <div className='remember-forgot'>
                    <Checkbox>I agree to the Privacy Policy and Terms and Conditions
                    </Checkbox>
                </div>
                <button className="btn-login" type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;