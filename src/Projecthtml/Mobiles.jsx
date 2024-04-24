import React from 'react';
import Headers from '../Header/Headers';
import './stylemobiles.css';

const Mobiles = () => {
  return (
    <div>
      <Headers />

      <div className="containers">
     
        <header>
          <h1>Welcome to AdSale!</h1>
        </header>
      
        <section className="about">
          <h2>Our Story</h2>
          <p>Established in [year], AdSale was born out of a vision to revolutionize the way businesses connect with their target audience online. Founded by a team of seasoned experts in digital marketing, we understand the evolving landscape of online advertising and are dedicated to staying ahead of the curve.</p>
        </section>
       
        <section className="mission">
          <h2>Our Mission</h2>
          <p>Our mission is simple: Empower businesses of all sizes to reach their full potential through strategic and effective online advertising. We believe that every business deserves a chance to shine in the vast digital realm, and we're here to make that happen.</p>
        </section>
      
        <section className="sets-apart">
          <h2>What Sets Us Apart</h2>
          <ul>
            <li><strong>Tailored Strategies:</strong> No two businesses are alike, and neither are our strategies. We take the time to understand your unique needs and create customized solutions that deliver tangible results.</li>
            <li><strong>Proven Results:</strong> Our track record speaks for itself. We have helped countless businesses increase their online presence, drive traffic, and boost conversions, leading to measurable success.</li>
            <li><strong>Dedicated Support:</strong> When you partner with AdSale, you're not just a client—you're a valued member of our community. Our team of experts is here to provide ongoing support, guidance, and optimization to ensure your campaigns deliver the best possible outcomes.</li>
          </ul>
        </section>
      
        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li>Social Media Campaigns</li>
            <li>Display Advertising</li>
          </ul>
        </section>
      
        <section className="join">
          <h2>Join the AdSale Family</h2>
          <p>Whether you're a small startup or an established enterprise, AdSale is your partner in online success. Let's embark on this digital journey together and unlock new opportunities for your business.</p>
        </section>
       
        <section className="contact">
          <h2>Contact Us</h2>
          <p>Ready to elevate your online presence? Get in touch with us today to discuss your goals, and let's create a winning strategy for your brand.</p>
        </section>
     
      </div>











    </div>
  );
};

export default Mobiles;
