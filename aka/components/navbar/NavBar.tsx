import React from 'react'

import Link from 'next/link'
import axios from 'axios'
const NavBar = () => {
  return (
    <> {/* Offcanvas Menu Begin */}
  <div className="offcanvas-menu-overlay" />
  <div className="offcanvas-menu-wrapper">
    <div className="offcanvas__option">
      <div className="offcanvas__links">
        <a href="#">Sign in</a>
        <a href="#">FAQs</a>
      </div>
      <div className="offcanvas__top__hover">
        <span>
          Usd <i className="arrow_carrot-down" />
        </span>
        <ul>
          <li>USD</li>
          <li>EUR</li>
          <li>USD</li>
        </ul>
      </div>
    </div>
    <div className="offcanvas__nav__option">
     
      <div className="price">$0.00</div>
    </div>
    <div id="mobile-menu-wrap" />
    <div className="offcanvas__text">
      <p>Free shipping, 30-day return or refund guarantee.</p>
    </div>
  </div>
  {/* Offcanvas Menu End */}
  {/* Header Section Begin */}
  <header className="header">
    <div className="header__top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7">
            <div className="header__top__left">
              <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="header__top__right">
              <div className="header__top__links">
                <a href="/" onClick={()=>{localStorage.clear()
                axios.delete('http://localhost:8080/cart.detetall')}}>Log Out</a>
                
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="header__logo">
            <a href="./index.html">
              {/* <img src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670925252/aka/logo/logo_zkivkb.png" alt="" /> */}
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <nav className="header__menu mobile-menu">
            <ul>
              <li className="active">
                <Link href='/home'>Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
             
              <li>
                <Link href="/aboutus">About Us</Link>
              </li>
              <li><div className="input-group rounded row">
                <div className='col'><input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" /></div>
  <div className='col-3'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
</svg>
</div>
 
</div></li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3 col-md-3 row">
          <div className='col-9'></div>
          
          <div className="header__nav__option btn col" onClick={()=>window.location.href='/cart'}>
           <svg style={{ height: 53, width: 36 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 29 24" stroke-width="0.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

           
          </div>
        </div>
      </div>
      <div className="canvas__open">
        <i className="fa fa-bars" />
      </div>
    </div>
  </header></>
  )
}

export default NavBar