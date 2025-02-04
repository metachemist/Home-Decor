import React from 'react'



const Contact = () => {
  return (
    <div className="contact-div">
      {/* Image outside the form */}
      <img className="background-image" src="/resize5.jpg" alt="Background" />

      <section className="contact-form">
        <h2 className="fade-in">Contact Us</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Phone Number" />
          <textarea placeholder="Your Message" rows={5} required />
          <button  className='contact-button' type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
