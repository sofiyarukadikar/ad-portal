import React from 'react';
import Headers from '../Header/Headers';
import { Link } from 'react-router-dom';
import './stylelogin.css';

const Login = () => {
  return (
    <div>
    <Headers />
    <div className='mainssignin'>
      <div className='SignIn'>
        <div>
          <h1>
                Sign In
          </h1>
        </div>

        <form>
          <div className='divs10'>
            <div>     <input type="email" name="email" id="email1" placeholder='email id' /></div>
            <div>     <input type="password" name="password" id="password10" placeholder='Password' /></div>
            <div>     <input type="password" name="password" id="password11" placeholder='Conform Password' /></div>
            <div>     <button type="button" id='SignUpbutton1'>Sign In</button></div>
          </div>
        </form>
        <div>
          <a href="">Forget Password</a>
        </div>
        <div>
            <span>Don't Have An Account ? </span>
            <a href=""><Link to="/SignUp">Sign Up</Link></a>
          </div>

      

      </div>
    </div>
  </div >



   
  );
};

export default Login;
