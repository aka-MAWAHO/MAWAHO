import axios from 'axios';
import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import Image from 'next/image'
import Car from '../carousel/Carousel';
export const getStaticProps = async () => {
  const res = await axios.get('');
  const data = await res.data;

  return {
    props: { ninjas: data }
  }
}

const Home = ({ }) => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" content="Male_Fashion Template" />
      <meta name="keywords" content="Male_Fashion, unica, creative, html" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>AKA-Fashion </title>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      {/* Css Styles */}
      <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
      <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
      <link rel="stylesheet" href="css/elegant-icons.css" type="text/css" />
      <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />
      <link rel="stylesheet" href="css/nice-select.css" type="text/css" />
      <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" />
      <link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
      <link rel="stylesheet" href="css/style.css" type="text/css" />
      {/* Page Preloder */}
      <div id="preloder">
        <div className="loader" />
      </div>

      {/* Header Section End */}
      {/* Hero Section Begin */}
      <section className="hero">
        <Car></Car>
      </section>

      {/* Hero Section End */}
      {/* Banner Section Begin */}
      <section className="banner spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-4">
              <div className="banner__item">
                <div className="banner__item__pic">
                  <img src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670924731/aka/banner/banner-1_zjlwum.jpg" alt="" />
                </div>
                <div className="banner__item__text">
                  <h2>Clothing Collections 2023</h2>
                  <a href="shop">Shop now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner__item banner__item--middle">
                <div className="banner__item__pic">
                  <img src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670924731/aka/banner/banner-2_cthfg4.jpg" alt="" />
                </div>
                <div className="banner__item__text">
                  <h2>Accessories</h2>
                  <a href="shop">Shop now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner__item banner__item--last">
                <div className="banner__item__pic">
                  <img src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670924731/aka/banner/banner-3_xvgsjp.jpg" alt="" />
                </div>
                <div className="banner__item__text">
                  <h2>Shoes Spring 2023</h2>
                  <a href="shop">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      


    </>
  )
}

export default Home