import React, { useEffect, useState } from 'react'


import { GetStaticProps,NextPage } from 'next'
import axios from 'axios';
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get("http://localhost:8080/cart/getAll");
  const  results : any = await res.data;


  return {
    props: {
      cart: results,
    },
  };
};
const cart :NextPage<{ cart: any }> = ({ cart }) => {
  const [total,setTotal]=useState(cart.reduce(function(accumulator:any, currentValue:any) {
    console.log(currentValue);
    
    return accumulator + currentValue.price;
  }, 0))
  const [discountedPrice, setDiscountedPrice] = useState(total * (1 - 0.25));

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
  
  {/* Shopping Cart Section Begin */}
  <section className="shopping-cart spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="shopping__cart__table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th />
                </tr>
              </thead>
              <tbody>
               
               {cart.map(e=>(<tr>
                  <td className="product__cart__item">
                    <div  className="product__cart__item__pic">
                    <img src={e.image} alt=""  height="150px"/>
                    </div>
                    <div className="product__cart__item__text ">
                      <h6 className='p-5'>{e.nameArticle}</h6>
                   
                    </div>
                  </td>
                  <td className="quantity__item">
                    <div className="quantity">
                      <div className="pro-qty-2">
                        <input type="number" defaultValue={e.quantity} />
                      </div>
                    </div>
                  </td>
                  <td className="cart__price">{e.price} dt</td>
                  <td className="cart__close">
                    <i className="fa fa-close" />
                  </td>
                </tr>
               ))}
                
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="continue__btn">
                <a href="/shop">Continue Shopping</a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="continue__btn update__btn">
                <a href="#">
                  <i className="fa fa-spinner" /> Update cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="cart__discount">
            <h6>Discount codes</h6>
            <form action="#">
              <input type="text" placeholder="Coupon code" />
              <button type="submit">Apply</button>
            </form>
          </div>
          <div className="cart__total">
            <h6>Cart total</h6>
            <ul>
             
              <li>
                Total : <span>${total}</span>
              </li>
              <li> Discounted Price 25%: <span>  ${discountedPrice} </span>
              </li>
            </ul>
            <a href="checkOut" className="primary-btn">
              Proceed to checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Shopping Cart Section End */}
  
</>

  )
}

export default cart