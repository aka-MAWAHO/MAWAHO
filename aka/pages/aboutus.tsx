import React,{useState} from "react";
import axios from "axios";

function aboutus() {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [photo,setPhoto]=useState("")
const [message,setMessege]=useState("")
const Add=(add:any) =>{
  axios.post(`http://localhost:5000/prod/prod`,add)
}


  return (
<>

<section id="about">
  <br></br>
  <div></div>
  <br></br>
<div className="text-center container  ">
         <h4 className="">
          
         MAWAHO GROUP is one of the leading international fashion companies. It
         belongs to Inditex, one of the largest distribution groups in the world.
         
           The customer is at the center of our business model, which includes
           design, manufacturing, distribution and sales through an extensive
           network of branded stores.
         
       </h4></div>
       <br></br>
  <div className="container col align-items-center justify-content-center">
    <h3 className="text-center text-uppercase">contact us</h3>
   
    <div className="row">
      <div className="col">
        <div className="card border-0">
          <div className="card-body text-center">
            <i className="fa fa-phone fa-5x mb-3" aria-hidden="true" />
            <div>  <img src="https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_100/v1671726488/phone-call_kkakak.png"/>
            </div>
          
        <br></br>
        <div> <h4 className="text-uppercase mb-5">call us</h4></div>
           
            <p>+216 52303647</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0">
          <div className="card-body text-center">
            <i className="fa fa-map-marker fa-5x mb-3" aria-hidden="true" />
            <div>
              <img src="https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_100/v1671726727/location_xel02r.png" />
            </div>
            <br></br>
            <h4 className="text-uppercase mb-5">office loaction</h4>
            <address>TUNISIA : AZUR CITY P7G4+C9 Ben Arous </address>
          </div>
        </div>
      </div>
      
      <div className="col">
        <div className="card border-0">
          <div className="card-body text-center">
            <i className="fa fa-globe fa-5x mb-3" aria-hidden="true" />
             <div>
              <img src="https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_100/v1671726895/gmail_dcjbrl.png"/>
            </div>
            <br></br>
            <h4 className="text-uppercase mb-5">email</h4>
            <p>wamaho@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*Section: Contact v.2*/}
<section className=" container border-rounded">
  {/*Section heading*/}
  <div className="container col align-items-center justify-content-center border border-dark">
  <h2 className="h1-responsive font-weight-bold text-center my-4">
    Contact us
  </h2>
  {/*Section description*/}
 
  <div className="row">
    {/*Grid column*/}
    <div className="col">
      <form
        id="contact-form"
        name="contact-form"
        action="mail.php"
        method="POST"
      >
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-6">
            <div className="md-form mb-0"> 
            <label htmlFor="name" className="">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
              />
             
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-6">
            <div className="md-form mb-0">
            <label htmlFor="email" className="">
                Your email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="form-control"
              />
            
            </div>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
        {/*Grid row*/}
        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-0">
            <label htmlFor="subject" className="">
                Your photo
              </label>
              <input
                type="file"
                id="subject"
                name="subject"
                className="form-control"
              />
              
            </div>
          </div>
        </div>
        {/*Grid row*/}
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-12">
            <div className="md-form">
            <label htmlFor="message">Your message</label>
              <textarea
               
                id="message"
                name="message"
                rows={2}
                className="form-control md-textarea"
                defaultValue={""}
              />
          
            </div>
          </div>
        </div>
        
        {/*Grid row*/}
      </form>
      
      <br></br>
      <div className="status" />
    </div>
  
  </div>
  </div>
  <br></br>
  <div className="text-center text-md-left">
        <a
          className="btn btn-primary"
          
        >
          Send
        </a>
      </div>
      <br></br>
</section>
{/*Section: Contact v.2*/}

<div>
   
      
   <section className="contact" id="contact">   
   <br></br>
   
<div className="row">
 
<section>
<div className="row d-flex justify-content-center">
 <div className="col-md-10 col-xl-8 text-center">
   <h3 className="mb-4">Your Feedbacks</h3>
 </div>
</div>
<div className="row text-center">

 <div className="col-md-4 mb-5 mb-md-0">
   <div className="d-flex justify-content-center mb-4">
     <img
       src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
       className="rounded-circle shadow-1-strong"
       width={150}
       height={150}
     />
   </div>
   <h5 className="mb-3">Lisa Cudrow</h5>
   <h6 className="text-primary mb-3">Graphic Designer</h6>
   <p className="px-xl-3">
     <i className="fas fa-quote-left pe-2" />
     Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
     suscipit laboriosam, nisi ut aliquid commodi.
   </p>
   <ul className="list-unstyled d-flex justify-content-center mb-0">
     <li>
       <i className="fas fa-star fa-sm text-warning" />
     </li>
     <li>
       <i className="fas fa-star fa-sm text-warning" />
     </li>
     <li>
       <i className="fas fa-star fa-sm text-warning" />
     </li>
     <li>
       <i className="fas fa-star fa-sm text-warning" />
     </li>
     <li>
       <i className="fas fa-star fa-sm text-warning" />
     </li>
   </ul>
 </div>
</div>
</section>
 <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7435.469870560254!2d10.12012919230158!3d36.72970369538637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3a085c5e5683%3A0x40b9a9b1f68b7a29!2sTunis%20Ben%20Arous%20Azur%20City%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1633444969600!5m2!1sen!2sus" allowFullScreen={false}
 loading="lazy"></iframe>

</div>
</section>

 </div>

</>

  );
}

export default aboutus;
