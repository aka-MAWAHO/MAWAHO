import React, { useState } from 'react'
import { GetStaticPaths,GetStaticProps ,NextPage} from 'next';
import axios from 'axios';
export const getStaticPaths:GetStaticPaths = async () => {
  const res = await axios.get('http://localhost:8080/product/getall');
  const data = await res.data;

  // map data to an array of path objects with params (id)
  const paths = data.map(product => {
    return {
      params: { name: product.name.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps:GetStaticProps = async (context:any) => {
  const name = context.params.name;
  console.log(name);
  
  const res = await fetch('http://localhost:8080/product/' + name);
  const data:any = await res.json();

  return {
    props: { product: data }
  }
}
const name :NextPage<{ product: any }> = ({product}) => {
  console.log(product,'product');
  const [bigimage,setBigImage]=useState(product.fullView)
  const [quantity,setQuantity]=useState(1)
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="description" content="Male_Fashion Template" />
  <meta name="keywords" content="Male_Fashion, unica, creative, html" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Male-Fashion | Template</title>
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
  
  {/* Shop Details Section Begin */}
  <section className="shop-details">
    <div className="product__details__pic">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="product__details__breadcrumb">
              <a href="./index.html">Home</a>
              <a href="./shop.html">Shop</a>
              <span>{product.name}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#tabs-1"
                  role="tab"
                >
                  <div onClick={()=>{setBigImage(product.closeView)}}
                    className="product__thumb__pic set-bg"
                    style={{
  backgroundImage: "url(" + product.closeView+  ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}
                  ></div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tabs-2"
                  role="tab"
                >
                  <div onClick={()=>{setBigImage(product.fullView)}}
                    className="product__thumb__pic set-bg"
                   style={{
  backgroundImage: "url(" + product.fullView+  ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}
                  ></div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tabs-3"
                  role="tab"
                >
                  <div onClick={()=>{setBigImage(product.withoutModel)}}
                    className="product__thumb__pic set-bg"
                    style={{
  backgroundImage: "url(" + product.withoutModel+  ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}
                  ></div>
                </a>
              </li>
              
            </ul>
          </div>
          <div className="col-lg-6 col-md-9">
            <div className="tab-content">
              <div className="tab-pane active" id="tabs-1" role="tabpanel">
                <div className="product__details__pic__item">
                  <img src={ bigimage} alt="" />
                </div>
              </div>
              
             
             
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="product__details__content">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="product__details__text">
              <h4>{product.name}</h4>
              
              <h3>
                {product.price} dt
              </h3>
              <p>
               {product.description}
              </p>
              <div className="product__details__option">
                <div className="product__details__option__size">
                  <span>Size:</span>
                  
                 {product.size.map((e:any,i:any)=>(<><label htmlFor="xxl">
                    {e}
                    <input type="radio" id="xxl" />
                  </label></>))}
                </div>
                <div className="product__details__option__color">
                  <span>Color:</span>
                  {product.color.map((e,i)=>(<>
                    <label key={i} className="" style={{backgroundColor:e}}>
                  
                  </label></>
                  ))}
                </div>
              </div>
              <div className="product__details__cart__option">
                <div className="quantity">
                  <div className="pro-qty">
                    <input onChange={(e)=>setQuantity(e.target.value)} type="text" defaultValue={1} />
                  </div>
                </div>
                <a href="#" className="primary-btn">
                  add to cart
                </a>
              </div>
             
              <div className="product__details__last__option">
                <h5>
                  <span>Guaranteed Safe Checkout</span>
                </h5>
                <img src="img/shop-details/details-payment.png" alt="" />
                <ul>
                 
                  <li className='p-5'>
                    <span>Categories:</span> {product.categorie}
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
        
             
          
        </div>
      
    </div>
  </section>
  {/* Shop Details Section End */}
 
   {/* Search Begin */}
  <div className="search-model">
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="search-close-switch">+</div>
      <form className="search-model-form">
        <input type="text" id="search-input" placeholder="Search here....." />
      </form>
    </div>
  </div>
  {/* Search End */}
  {/* Js Plugins */}
</>

  )
}

export default name