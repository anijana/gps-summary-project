import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
        <div className='wrap'>
            <h2 style={{textAlign: 'center', color:'blueviolet'}}>Login Form</h2>
            <input type="text" name='username' placeholder='Username' autoComplete='off'/>
            <input type="password" name='password' placeholder='Password' autoComplete='off'/>
            <Link to='/summary' style={{color:'#fff', textDecoration:'none'}}>
            <button className='btn-login'>
                Login
            </button>
            </Link>
        </div>
    </>
  )
}
export default Login;
