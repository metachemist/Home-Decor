import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
   < div>

      {/* Right Section */}
      <div className='hero-container'>
      <div className="hero-box">

         {/* Left Section */}
      <div className='hero-left-div'>
         <h1>Discover Our Home Decor</h1>
        <p>Elevate Your Space with Timeless Furniture</p>
        <p>Designed for style, built for comfort, priced for you.</p>
        <p>Shop now and transform your home with quality craftsmanship.</p>
        </div>
        <div className="image-container">
  <Image
    src="/red3.jpg"
    width={400}
    height={350}
    alt="Home Decor"
    className="styled-image fade-in"
  />
</div>
      </div>
    </div>
  </div>

  );
};

export default Home;
