import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  
  {
    url:
      "https://res.cloudinary.com/dugewmeeh/image/upload/v1670925680/aka/hero/hero-2_qnu7hz.jpg"
  },
  {url:"https://res.cloudinary.com/dugewmeeh/image/upload/v1670925680/aka/hero/hero-1_olnrha.jpg"}
];

 
 
        
          
        
function Car() {
  return (
   <div
  id="carouselExampleControls"
  className="carousel slide"
  data-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
        <SimpleImageSlider
            width={1519}
            height={600}
            images={images}
            showBullets={true}
            showNavs={true}
            loop={true}
             autoPlay={true}
          />
       <div style={{position:'relative',bottom:'400px' ,left:'100px'}}>
                                <h6>Summer Collection</h6>
                                <h2>Fall - Winter Collections 2030</h2>
                                <div className='row'>
                                    <div className='col-4'> <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                commitment to exceptional quality.</p></div>
                               </div>
                                <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                                <div className="hero__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
    </div>
    
  </div>

</div>

  );
}

export default Car;

