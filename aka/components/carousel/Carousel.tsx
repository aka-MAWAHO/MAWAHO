import React from 'react'

function Car() {
  return (

<div
  id="carouselVideoExample"
  className="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
 
  <div className="carousel-inner">
    {/* Single item */}
    <div className="carousel-item active">
      <video className="img-fluid" autoPlay={true}  >
        <source
          src="https://res.cloudinary.com/dn9qfvg2p/video/upload/c_scale,w_2200/v1671547320/H_M_Autumn_Collection_2012_-_The_Fashion_Family_qtaomv.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>

  {/* Controls */}
  <button
    className="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselVideoExample"
    data-mdb-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-mdb-target="#carouselVideoExample"
    data-mdb-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden" >Next</span>
  </button>
</div>

  );
}

export default Car;

