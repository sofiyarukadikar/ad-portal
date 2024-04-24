import React from 'react';
import './Headers.css';

const Headers = () => {
  return (

    <div className="headermain1">


      <div class="ad-sale">
        <h1>AdSale</h1>
      </div>

      <div className="header-tops">
        <span ><a className='account' href="/Home">Home</a></span>
        <span ><a className='account' href="/Login">Sign In </a></span>
        <span ><a className='account' href="/SignUp">Sign Up </a></span>
        <span ><a className='account' href="/Mobiles" >About Us </a></span>
        <span ><a className='account' href="/ContactPages">Contact Us</a></span>
      </div>


    </div>
  );
};





export default Headers;
