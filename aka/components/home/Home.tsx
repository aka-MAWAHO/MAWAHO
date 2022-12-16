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

const Home = ({}) => {
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
  {/* Banner Section End */}
  {/* Product Section Begin */}
  <section className="product spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <ul className="filter__controls">
            <li className="active" data-filter="*">
              Best Sellers
            </li>
            <li data-filter=".new-arrivals">New Arrivals</li>
            <li data-filter=".hot-sales">Hot Sales</li>
          </ul>
        </div>
      </div>
      <div className="row product__filter">
        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
          <div className="product__item">
            <div
              className="product__item__pic set-bg"
              data-setbg="https://res.cloudinary.com/dugewmeeh/image/upload/v1670924745/aka/shoping%20deta/thumb-3_jnkhnd.png"
            >
              <span className="label">New</span>
             
            </div>
            <div className="product__item__text">
              <h6>Piqué Biker Jacket</h6>
              <a href="#" className="add-cart">
                + Add To Cart
              </a>
              <div className="rating">
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
              </div>
              <h5>$67.24</h5>
              <div className="product__color__select">
                <label htmlFor="pc-1">
                  <input type="radio" id="pc-1" />
                </label>
                <label className="active black" htmlFor="pc-2">
                  <input type="radio" id="pc-2" />
                </label>
                <label className="grey" htmlFor="pc-3">
                  <input type="radio" id="pc-3" />
                </label>
              </div>
            </div>
          </div>
        </div>
        
        </div> 
    </div>
  </section>
  {/* Product Section End */}
 
  {/* Instagram Section Begin */}
  <section className="instagram spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="instagram__pic">
            <div
              className="instagram__pic__item set-bg"
              style={{  
  backgroundImage: "url(" + "https://res.cloudinary.com/dugewmeeh/image/upload/v1670925680/aka/hero/hero-1_olnrha.jpg" +  ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}} 
            />
            <div
              className="instagram__pic__item set-bg"
              data-setbg=""
            />
            <div
              className="instagram__pic__item set-bg"
              data-setbg="https://res.cloudinary.com/dqmhtibfm/image/upload/v1670924554/aka/insta/instagram-3_boktz7.jpg"
            />
            <div
              className="instagram__pic__item set-bg"
              data-setbg="/aka/img/instagram/instagram-4.jpg"
            />
            <div
              className="instagram__pic__item set-bg"
              data-setbg="/aka/img/instagram/instagram-5.jpg"
            />
            <div
              className="instagram__pic__item set-bg"
              data-setbg="/aka/img/instagram/instagram-6.jpg"
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="instagram__text">
            <h2>Instagram</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3>#Male_Fashion</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Instagram Section End */}

 
</>
  )
}

export default Home