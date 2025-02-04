import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className='about-container'>
      {/* Outer container */}
      <div className='about-box'>
        {/* Left section */}
        <div className='about-image-container'>
          <Image 
            src="/redgw.jpg"
            width={380}
            height={380}
            alt="picture"
             className="about-styled-image fade-in"
          />
        </div>

        {/* Right section */}
        <div className="about-right-div">
          <h2 className="fade-in">About Us</h2>
          <p className='about-para'>
          At Luxe Home Décor, we believe in transforming houses into homes with high-quality and affordable décor items. Our mission is to bring elegance to every corner your living space. We pride ourselves on offering carefully curated collection of furniture, lighting, artwork, and accessories that cater to a variety of tastes and styles.
          </p>
        </div>


        <div className='about-image2-container'>
          <Image 
            src="/redf.jpg"
            width={300}
            height={380}
            alt="picture"
             className="about-styled2-image fade-in"
          />
        </div>

      </div>
    </div>
  );
};

export default About;
