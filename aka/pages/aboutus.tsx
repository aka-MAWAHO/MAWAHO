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
      <p>jogeshwari, mumbai, india - 400104</p>
    </div>
    <div className="icons">
      <i className="fas fa-envelope" />
      <h3>email</h3>
      <p>shaikhanas@gmail.com</p>
      <p>anasbhai@gmail.com</p>
    </div>
    <div className="icons">
      <i className="fas fa-phone" />
      <h3>phone</h3>
      <p>+123-456-7890</p>
      <p>+111-222-3333</p>
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
    <iframe
      className="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1633431163028!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
    />
  </div>
</section>

    </div>
    
  );
}

export default aboutus;
