import React from 'react';
import Headers from '../Header/Headers';
import { Link } from 'react-router-dom';
import './stylesignup.css';

const SignUp = () => {
  return (
    <div>
      <Headers />
      <div className='mainssign'>
        <div className='SignUP'>
          <div>
            <h1>
              Create Account
            </h1>
          </div>

          <form>
            <div className='divs1'>
              <div>     <input type="text" name="name" id="name" placeholder='Enter Full Name' /></div>
              <div>     <input type="email" name="email" id="email" placeholder='email id' /></div>
              <div>     <input type="password" name="password" id="password" placeholder='Password' /></div>
              <div>     <input type="password" name="password" id="password1" placeholder='Conform Password' /></div>
              <div>   <input type="checkbox" name="validate" id="validate" required /> I accept the Terms of Use & Privacy Policy</div>
              <div>     <button type="button" id='SignUpbutton'>Sign Up</button></div>
            </div>
          </form>

          <div>
            <span>Have Already An Account ? </span>
            <a href=""><Link to="/Login">Sign In</Link></a>
          </div>


        </div>
        {/* <button type="button" id='post'>Post Ad</button> */}







      </div>





    </div >

  );
};

export default SignUp;