import React from 'react';
import { Input, Checkbox } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  return (
    <div className="login-box">
      <form>
        <div className="user-box">
          <label className='title'>UserName or Email
            <span style={{ color: 'red' }}> *</span>
          </label>
          <Input className='input' placeholder="Your Name or Mail" prefix={<FontAwesomeIcon icon={faUser} />} />
        </div>
        <div className="user-box">
          <label className='title'>Password
            <span style={{ color: 'red' }}> *</span>
          </label>
          <Input.Password className='input' placeholder="input password" prefix={<FontAwesomeIcon icon={faLock} />} />
        </div>
        <div className='remember-forgot'>
          <Checkbox>Remember me</Checkbox>
          <a>
            <span>Lost Your Password?</span>
          </a>
        </div>
        <Link to='/' >
          <button className="btn-login" type="submit">Login</button>
        </Link>
      </form>
    </div>
  );
}
