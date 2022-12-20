// import Carousel from 'react-bootstrap/Carousel';
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [

  {
    url:
      "https://res.cloudinary.com/drd0uckic/image/upload/v1671444987/xlj97wcbeqfvw13q4dae.jpg"
  },
  { url: "https://res.cloudinary.com/drd0uckic/image/upload/v1671444987/lwdefla8vlzwa7jvqpjx.jpg" },
  { url: "https://res.cloudinary.com/drd0uckic/image/upload/v1671444987/scw0kuurwpnthciozcst.jpg" }
];
function Car() {
  return (
    <div className="Appp">

      <SimpleImageSlider
        width={1519}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true}
        autoPlay={true}
      />
      <br></br>
    </div>

  );
}

export default Car;

