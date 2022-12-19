import Carousel from 'react-bootstrap/Carousel';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

// const images = [
  
//   {
//     url:
//       "https://res.cloudinary.com/drd0uckic/image/upload/v1671444987/xlj97wcbeqfvw13q4dae.jpg"
//   },
//   {url:"https://res.cloudinary.com/drd0uckic/image/upload/v1671444987/lwdefla8vlzwa7jvqpjx.jpg"},
//   {url:"https://res.cloudinary.com/drd0uckic/image/upload/v1671444987/scw0kuurwpnthciozcst.jpg"}
// ];

 
 
        
          
        
function Car() {
  return (
//    <div
//   id="carouselExampleControls"
//   className="carousel slide"
//   data-ride="carousel"
// >
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//         <SimpleImageSlider
//             width={1519}
//             height={600}
//             images={images}
//             showBullets={true}
//             showNavs={true}
//             loop={true}
//              autoPlay={true}
//           />
//        <div style={{position:'relative',bottom:'400px' ,left:'100px'}}>
//                                 <h6>Summer Collection</h6>
//                                 <h2>Fall - Winter Collections 2030</h2>
//                                 <div className='row'>
//                                     <div className='col-4'> <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
//                                 commitment to exceptional quality.</p></div>
//                                </div>
//                                 <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
//                                 <div className="hero__social">
//                                     <a href="#"><i className="fa fa-facebook"></i></a>
//                                     <a href="#"><i className="fa fa-twitter"></i></a>
//                                     <a href="#"><i className="fa fa-pinterest"></i></a>
//                                     <a href="#"><i className="fa fa-instagram"></i></a>
//                                 </div>
//                             </div>
//     </div>
    
//   </div>

// </div>
<div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-ride="carousel"
>
  <ol className="carousel-indicators">
    <li
      data-target="#carouselExampleIndicators"
      data-slide-to={0}
      className="active"
    />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://res.cloudinary.com/drd0uckic/image/upload/v1671444987/xlj97wcbeqfvw13q4dae.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://res.cloudinary.com/drd0uckic/image/upload/v1671444987/lwdefla8vlzwa7jvqpjx.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://res.cloudinary.com/drd0uckic/image/upload/v1671444987/scw0kuurwpnthciozcst.jpg" alt="Third slide" />
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

  );
}

export default Car;

