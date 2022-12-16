import React from 'react'

const signup = () => {
  return (
    <>
  <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Landing PAGE Html5 Template" />
  <meta name="keywords" content="landing,startup,flat" />
  <meta name="author" content="Made By GN DESIGNS" />
  <title>aka</title>
  {/* // PLUGINS (css files) // */}
  <link
    href="assets/js/plugins/bootsnav_files/skins/color.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/bootsnav_files/css/animate.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/bootsnav_files/css/bootsnav.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/bootsnav_files/css/overwrite.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/owl-carousel/owl.carousel.css"
    rel="stylesheet"
  />
  <link href="assets/js/plugins/owl-carousel/owl.theme.css" rel="stylesheet" />
  <link
    href="assets/js/plugins/owl-carousel/owl.transitions.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/Magnific-Popup-master/Magnific-Popup-master/dist/magnific-popup.css"
    rel="stylesheet"
  />
  {/*// ICONS //*/}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
  {/*// BOOTSTRAP & Main //*/}
  <link
    href="assets/bootstrap-3.3.7/bootstrap-3.3.7-dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link href="assets/css/main.css" rel="stylesheet" />
  {/*======================================== 

     Preloader

    ========================================*/}
  <div className="page-preloader">
    <div className="spinner">
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </div>
  </div>
  {/*======================================== 

     Header

    ========================================*/}
  {/*//** Navigation** //*/}
  <nav
    className="navbar navbar-default navbar-fixed white no-background bootsnav navbar-scrollspy"
    data-minus-value-desktop={70}
    data-minus-value-mobile={55}
    data-speed={1000}
  >
    <div className="container">
      {/* Start Header Navigation */}
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#navbar-menu"
        >
          <i className="fa fa-bars" />
        </button>
        <a className="navbar-brand" href="#brand">
          <img src="assets/img/logo.png" className="logo" alt="logo" />
        </a>
      </div>
      {/* End Header Navigation */}
      {/* Collect the nav links, forms, and other content for toggling */}
      <div className="collapse navbar-collapse" id="navbar-menu">
        <ul className="nav navbar-nav navbar-right">
          <li className="active scroll">
            <a href="#home">Home</a>
          </li>
          <li className="scroll">
            <a href="#about">About</a>
          </li>
          <li className="scroll">
            <a href="#services">Services</a>
          </li>
          <li className="scroll">
            <a href="#price">Price</a>
          </li>
          <li className="scroll">
            <a href="#team">Team</a>
          </li>
          <li className="scroll">
            <a href="#clients">Clients</a>
          </li>
          <li className="scroll">
            <a href="#contact">Contact</a>
          </li>
          <li className="button-holder">
            <button
              type="button"
              className="btn btn-blue navbar-btn"
              data-toggle="modal"
              data-target="#SignIn"
            >
              Sign in
            </button>
          </li>
        </ul>
      </div>
      {/* /.navbar-collapse */}
    </div>
  </nav>
  {/*//** Banner** //*/}
  <section id="home">
    <div className="container">
      <div className="row">
        {/* Introduction */}
        <div className="col-md-6 caption">
          <h1>Welcome To AKA Clothes style</h1>
          <h2>
            we are
            <span className="animated-text" />
            <span className="typed-cursor" />
          </h2>
          <p>
            
          </p>
          <a href="#" className="btn btn-transparent">
            Get Started
          </a>
          <a
            className="btn btn-blue popup-youtube"
            href="https://www.youtube.com/watch?v=Q8TXgCzxEnw"
          >
            <i className="material-icons">play_circle_filled</i>Watch Video
          </a>
        </div>
        {/* Sign Up */}
        <div className="col-md-5 col-md-offset-1">
          <form className="signup-form">
            <h2 className="text-center">Signup Now</h2>
            <hr />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                required="required"
              />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-blue btn-block">
                Start Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/*======================================== 

     About Us

    ========================================*/}
  <section id="about" className="section-padding">
    <div className="container">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, optio.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="icon-box">
            <i className="material-icons">favorite</i>
            <h4>Simple To Use</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              minima, dicta quaerat sit cupiditate eum mollitia.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="icon-box">
            <i className="material-icons">flash_on</i>
            <h4>Powerful</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              minima, dicta quaerat sit cupiditate eum mollitia.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="icon-box">
            <i className="material-icons">settings</i>
            <h4>Easy To Customize</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              minima, dicta quaerat sit cupiditate eum mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*======================================== 

     Story

    ========================================*/}
  <section id="story">
    <div className="container-fluid">
      <div className="row">
        {/* Img */}
        <div className="col-md-6 story-bg"></div>
        {/* Story Caption */}
        <div className="col-md-6">
          <div className="story-content">
            <h2>Our Success Story</h2>
            <p className="story-quote">
              " Success is finding satisfaction in giving a little more than you
              take."
            </p>
            <div className="story-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis amet consequatur incidunt, alias odit quisquam laborum
                nemo nisi, vel, tempora eligendi enim voluptate accusamus libero
                voluptas commodi ex rerum dolorem!
              </p>
            </div>
            <a href="#" className="btn btn-white">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*======================================== 

     Services

    ========================================*/}
  <section id="services" className="section-padding">
    <div className="container">
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, optio.
      </p>
      <div className="row">
        <div className="col-md-3">
          <div className="icon-box">
            <i className="material-icons">thumb_up</i>
            <h4>Great Quality</h4>
            <p>
              Quality ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              quod error quis.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="icon-box">
            <i className="material-icons">euro_symbol</i>
            <h4>Best Price</h4>
            <p>
              Price ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              quod error quis.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="icon-box">
            <i className="material-icons">forum</i>
            <h4>24/7 Support</h4>
            <p>
              Support ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              quod error quis.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="icon-box">
            <i className="material-icons">view_carousel</i>
            <h4>UX/UI Design</h4>
            <p>
              Quality ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              quod error quis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*======================================== 

     Features

    ========================================*/}
  <section id="features">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Awesome Features</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
            repudiandae mollitia iure magni accusamus, alias veniam.
          </p>
          <hr />
          <div className="feat-media">
            {/* Feature */}
            <div className="media">
              <div className="media-left">
                <a href="#">
                  <i className="material-icons">monetization_on</i>
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Easy On Your Wallet</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti nam vel provident quae.
                </p>
              </div>
            </div>
            {/* Feature */}
            <div className="media">
              <div className="media-left">
                <a href="#">
                  <i className="material-icons">access_time</i>
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Time Saver</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti nam vel provident quae.
                </p>
              </div>
            </div>
            {/* Feature */}
            <div className="media">
              <div className="media-left">
                <a href="#">
                  <i className="material-icons">computer</i>
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Fully Responsive</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti nam vel provident quae.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Features Img */}
        <div className="col-md-6 col-md-push-2">
          <img
            src="assets/img/dashboard.png"
            className="img-responsive"
            alt="feature"
          />
        </div>
      </div>
    </div>
  </section>
  {/*======================================== 

     Price

    ========================================*/}
  <section id="price" className="section-padding">
    <div className="container">
      <h2>Choose Your Plan</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, optio.
      </p>
      <div className="row">
        {/* Pricing Start Here */}
        <div className="pricing-container">
          <div className="col-md-4">
            {/*== SINGLE USER: Plan ==*/}
            <div className="plan">
              <div className="pricing-header">
                <h3>Single User</h3>
                <h3>
                  <span className="currency">$</span>
                  <span className="amount">20</span>
                  <span className="period">/mo</span>
                </h3>
              </div>
              <div className="pricing-body">
                <ul className="list-unstyled">
                  <li>
                    <i className="material-icons">done</i>
                    <b>265MB</b> Memory
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>1</b> User
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>1</b> Website
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>1</b> Domain
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>Unlimeted</b> Bandwitch
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>24/7</b> Support
                  </li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#" className="btn btn-blue">
                  Select
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {/*== MULTIPLE USER: Plan ==*/}
            <div className="plan active">
              <div className="pricing-header">
                <h3>Multiple Users</h3>
                <h3>
                  <span className="currency">$</span>
                  <span className="amount">40</span>
                  <span className="period">/mo</span>
                </h3>
              </div>
              <div className="pricing-body">
                <ul className="list-unstyled">
                  <li>
                    <i className="material-icons">done</i>
                    <b>512MB</b> Memory
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>3</b> User
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>5</b> Website
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>7</b> Domain
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>Unlimeted</b> Bandwitch
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>24/7</b> Support
                  </li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#" className="btn btn-blue">
                  Select
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {/*== Developer: Plan ==*/}
            <div className="plan">
              <div className="pricing-header">
                <h3>Developer</h3>
                <h3>
                  <span className="currency">$</span>
                  <span className="amount">60</span>
                  <span className="period">/mo</span>
                </h3>
              </div>
              <div className="pricing-body">
                <ul className="list-unstyled">
                  <li>
                    <i className="material-icons">done</i>
                    <b>1024MB</b> Memory
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>5</b> User
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>10</b> Website
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>10</b> Domain
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>Unlimeted</b> Bandwitch
                  </li>
                  <li>
                    <i className="material-icons">done</i>
                    <b>24/7</b> Support
                  </li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#" className="btn btn-blue">
                  Select
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*======================================== 

     Team

    ========================================*/}
  <section id="team" className="section-padding">
    <div className="container">
      <h2>Team Of Professionals</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, optio.
      </p>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          {/***Team-Member***/}
          <div className="thumbnail team-member">
            <img
              src="assets/img/team-1.jpg"
              className="img-responsive img-circle"
              alt="team-1"
            />
            <div className="caption">
              <h4>Adam White</h4>
              <h6>Founder Ceo</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <hr />
              <div className="team-social">
                <ul className="liste-unstyled">
                  <li>
                    <a href="#facebook">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#twitter">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#linkedin">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#instagram">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          {/***Team-Member***/}
          <div className="thumbnail team-member">
            <img
              src="assets/img/team-2.jpg"
              className="img-responsive img-circle"
              alt="team-2"
            />
            <div className="caption">
              <h4>Jasmine Doe</h4>
              <h6>Web Designer</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <hr />
              <div className="team-social">
                <ul className="liste-unstyled">
                  <li>
                    <a href="#facebook">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#twitter">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#linkedin">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#instagram">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          {/***Team-Member***/}
          <div className="thumbnail team-member">
            <img
              src="assets/img/team-3.jpg"
              className="img-responsive img-circle"
              alt="team-3"
            />
            <div className="caption">
              <h4>Mike White</h4>
              <h6>Developer</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <hr />
              <div className="team-social">
                <ul className="liste-unstyled">
                  <li>
                    <a href="#facebook">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#twitter">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#linkedin">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#instagram">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          {/***Team-Member***/}
          <div className="thumbnail team-member">
            <img
              src="assets/img/team-4.jpg"
              className="img-responsive img-circle"
              alt="team-4"
            />
            <div className="caption">
              <h4>Jarl Doe</h4>
              <h6>Photographer</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <hr />
              <div className="team-social">
                <ul className="liste-unstyled">
                  <li>
                    <a href="#facebook">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#twitter">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#linkedin">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#instagram">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*======================================== 

     Clients

    ========================================*/}
  <section id="clients" className="section-padding">
    <div className="container">
      <div className="row">
        <h2>Clients Trust Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, optio.
        </p>
        {/*// Clients Images //*/}
        <div className="clients-images">
          <div id="owl-clients">
            <div className="item">
              <img
                src="assets/img/clients/c_logo01.png"
                className="center-block"
                alt="client"
              />
            </div>
            <div className="item">
              <img
                src="assets/img/clients/c_logo02.png"
                className="center-block"
                alt="client"
              />
            </div>
            <div className="item">
              <img
                src="assets/img/clients/c_logo03.png"
                className="center-block"
                alt="client"
              />
            </div>
            <div className="item">
              <img
                src="assets/img/clients/c_logo04.png"
                className="center-block"
                alt="client"
              />
            </div>
            <div className="item">
              <img
                src="assets/img/clients/c_logo05.png"
                className="center-block"
                alt="client"
              />
            </div>
            <div className="item">
              <img
                src="assets/img/clients/c_logo06.png"
                className="center-block"
                alt="client"
              />
            </div>
          </div>
        </div>
        {/*// Clients Testimonials //*/}
        <div id="owl-testimonials">
          <div className="item">
            <i className="material-icons">mood</i>
            <p className="quote">
              Vivamus quam neque, aliquet ac faucibus ut, vestibulum. Nulla quis
              laoreet diam. Donec sed egestas ex, nec facilisis ante. Vivamus
              imperdiet odio. Cras luctus interdum sodales. Quisque quis odio
              dui.
            </p>
            <h4>-John Doe, Company inc.</h4>
          </div>
          <div className="item">
            <i className="material-icons">mood</i>
            <p className="quote">
              Vivamus quam neque, aliquet ac faucibus ut, vestibulum. Nulla quis
              laoreet diam. Donec sed egestas ex, nec facilisis ante. Vivamus
              imperdiet odio. Cras luctus interdum sodales. Quisque quis odio
              dui.
            </p>
            <h4>-Jarl Doe, Company inc.</h4>
          </div>
          <div className="item">
            <i className="material-icons">mood</i>
            <p className="quote">
              Vivamus quam neque, aliquet ac faucibus ut, vestibulum. Nulla quis
              laoreet diam. Donec sed egestas ex, nec facilisis ante. Vivamus
              imperdiet odio. Cras luctus interdum sodales. Quisque quis odio
              dui.
            </p>
            <h4>-Adam Doe, Company inc.</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*======================================== 

     Newsletter

    ========================================*/}
  <section id="newsletter">
    <div className="container">
      <div className="row">
        <h3>Subscribe to get early access!</h3>
        <div className="form-container">
          <form className="form-inline">
            <input
              type="email"
              className="form-control"
              id="newsletter-form"
              placeholder="Email"
              required="required"
            />
            <button type="submit" className="btn btn-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/*======================================== 

     Contact

    ========================================*/}
  <section id="contact" className="section-padding">
    <div className="container">
      <h2>Contact Us</h2>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
      <p>
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua.
      </p>
    </div>
    {/* Contact Info */}
    <div className="container contact-info">
      <div className="row">
        <div className="col-md-4">
          <div className="icon-box">
            <i className="material-icons">place</i>
            <h4>Address</h4>
            <p>PABox 13592, Lorem Street Ipsum Dolor, Victoria 8007, USA</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="icon-box">
            <i className="material-icons">phone</i>
            <h4>Call Us On</h4>
            <p>1-834-527-6940</p>
            <p>1-834-527-6940</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="icon-box">
            <i className="material-icons">email</i>
            <h4>Email us on</h4>
            <p>lorem@xyz.com</p>
            <p>lorem@xyz.com</p>
          </div>
        </div>
      </div>
    </div>
    {/* Google Map */}
    <div id="map" />
    {/* Contact Form */}
    <div className="contact-forms">
      <div className="container">
        <h2>Drop us a Line</h2>
        <form className="contact-form">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required="required"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea
                className="form-control"
                rows={3}
                placeholder="Message"
                defaultValue={""}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-blue">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
  {/*======================================== 

     Footer

    ========================================*/}
  <footer>
    <div className="container">
      <div className="row">
        <div className="footer-caption">
          <img
            src="assets/img/logo.png"
            className="img-responsive center-block"
            alt="logo"
          />
          <hr />
          <h5 className="pull-left">Vortex, ©2016 All rights reserved</h5>
          <ul className="liste-unstyled pull-right">
            <li>
              <a href="#facebook">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#twitter">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#linkedin">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#instagram">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  {/*======================================== 

     Modal

    ========================================*/}
  {/* Modal */}
  <div
    className="modal fade"
    id="SignIn"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="myModalLabel"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <h4 className="modal-title text-center" id="myModalLabel">
            Sign In
          </h4>
        </div>
        <div className="modal-body">
          <form className="signup-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                required="required"
              />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-blue btn-block">
                signUp
              </button>
               <button type="submit" className="btn btn-blue btn-block">
                signUp
              </button>
            </div>
          </form>
        </div>
        <div className="modal-footer text-center">
          <a href="#">Forgot your password /</a>
          <a href="#">Signup</a>
        </div>
      </div>
    </div>
  </div>
  {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
  {/* Include all compiled plugins (below), or include individual files as needed */}
</>

  )
}

export default signup