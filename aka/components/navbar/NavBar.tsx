import React from 'react'
import Link from 'next/link'
import axios from 'axios'
const NavBar = () => {
  return (

    <div className=''>

      <div className="col-lg-6 col-md-5">
        <div className="header__top__right">
          <div className="header__top__links">
            <a href="/" onClick={() => {
              localStorage.clear()
              axios.delete('http://localhost:8080/cart.detetall')
            }}>Log Out</a>

          </div>

        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-body fixed-top ">
        {/* <img src='https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_70/v1671096775/lougou-removebg-preview_j5u6df.png' /> */}
        <div className="container-fluid">
          <a className="navbar-brand text-dark" href="/home"> <b> MAWAHO</b></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span> </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='position-absolute top-50 start-50 translate-middle'>
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
              
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/home">Home</a> </li>

                <li className="nav-item">
                  <a className="nav-link text-dark" href="/shop">Shop</a> </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/about">About Us</a> </li>

            </ul>
</div>
            <div className='position-absolute top-0 end-0'>
              <button className="btn  text-dark" type="submit" title="SHOP LIST" onClick={() => { location.href = "/cart" }}>
                <img src='https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_33/v1671035218/bag_ppahl3.png' />
              </button>
              <button className="btn  text-dark" type="submit" title="LOGIN">
                <img src='https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_33/v1671035073/user_xzrvuk.png' />
              </button>
              <button className="btn  text-dark" type="submit" title="WISH LIST" onClick={() => { location.href = "/wishlist" }}>
                <img src='https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_30/v1671038723/heart_y4chdf.png' />
              </button></div>


          </div>
        </div>
      </nav>

    </div>
  )
}

export default NavBar