import React from "react";


function aboutus() {
  return (
    <div className="about">
      <h6>
        MAWAHO GROUP is one of the leading international fashion companies. It
        belongs to Inditex, one of the largest distribution groups in the world.
        <p>
          The customer is at the center of our business model, which includes
          design, manufacturing, distribution and sales through an extensive
          network of branded stores.
        </p>{" "}
      </h6>
      <section className="contact" id="contact">
  <h1 className="heading">
    {" "}
    <span>contact</span> us{" "}
  </h1>
  <div className="icons-container">
    <div className="icons">
      <i className="fas fa-map-marker-alt" />
      <h3>address</h3>
      <p>TUNISIA : AZUR CITY P7G4+C9 Ben Arous</p>
    </div>
    <div className="icons">
      <i className="fas fa-envelope" />
      <h3>email</h3>
      <p>wamaho@gmail.com</p>
      
    </div>
    <div className="icons">
      <i className="fas fa-phone" />
      <h3>phone</h3>
      <p>+216 52303647 </p>
      <p>+216 37303647 </p>
    </div>
  </div>
  <div className="row">
    <form action="">
      <h3>get in touch</h3>
      <div className="inputBox">
        <input type="text" placeholder="your name" />
        <input type="email" placeholder="your email" />
      </div>
      <div className="inputBox">
        <input type="number" placeholder="your number" />
        <input type="text" placeholder="your subject" />
      </div>
      <textarea
        placeholder="your message"
        cols={30}
        rows={10}
        defaultValue={""}
      />
      <input type="submit" defaultValue="send message" className="btn" />
    </form>
    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7435.469870560254!2d10.12012919230158!3d36.72970369538637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3a085c5e5683%3A0x40b9a9b1f68b7a29!2sTunis%20Ben%20Arous%20Azur%20City%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1633444969600!5m2!1sen!2sus" allowFullScreen="" 
    loading="lazy"></iframe>

  </div>
</section>

    </div>
    
  );
}

export default aboutus;
