import React,{useEffect, useState} from "react";
import axios from "axios";

function aboutus() {


const [image,setIamge]=useState("")
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [message,setMessage]=useState("")
const [allFeedBacks,setAllFeedBacks]=useState([])
console.log("data",allFeedBacks);
const Add = (add:any) => {
 
  axios
    .post('http://localhost:8080/feed/addfeed', add)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error("hedhi err",err);
    });
};

  // axios.get("http://localhost:8080/feed/getfeed").then(res => {
  //                  setAllFeedBacks(res.data)
                   
  //                 })
  
  console.log("hii",allFeedBacks);

    useEffect(() => {
      axios.get("http://localhost:8080/feed/getfeed").then(res => {
      console.log(res.data,'merue');

      setAllFeedBacks(res.data)

      })
    }, [])
const[file,setFile]=useState(null)
const uploadd= ()=>{
  const form = new FormData()
    form.append('file',file)
    form.append("upload_preset","abderahimt")
    form.append("cloud_name","dqz0n291c")
    fetch(" https://api.cloudinary.com/v1_1/dqz0n291c/image/upload ",{
    method:"post",
    body:form
    })
    .then((res)=>res.json())
    .then((res)=>{setIamge(res.url)
     console.log(res.url)})
    .catch((err)=>{console.log(err);})
  }


  return (
<>

<section id="about">
  <br></br>
  <div></div>
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
              className="form-control"
                type="text"
                id="name"
                name="name"
                onChange={(e)=>{setName(e.target.value)}}
               
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
              className="form-control"
                type="text"
                id="email"
                name="email"
              
               onChange={(e)=>setEmail(e.target.value)}
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
                onChange={(e)=>{setFile(e.target.files[0])}}
              />
               <div className="text-center text-md-left" >
      <a
          className="btn btn-primary"onClick={()=>uploadd()}
        >
          Upload
        </a>
        </div>
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
              
                onChange={(e)=>setMessage(e.target.value)}
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
  
  <div className="d-flex justify-content-around">
  <div className="text-center text-md-left" >
        <a
          className="btn btn-primary"onClick={()=>{Add({name,image,email,message}) ;
          setTimeout(() => {window.location.reload()},500);}}
        >
          Send
        </a>
        <div></div>
      </div>
        </div>
      <br></br>
</section>
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
 {allFeedBacks.slice(-3).reverse().map((e: any) =>{ return (
  <>
 <div className="col-md-4 mb-5 mb-md-0">

 <div className="d-flex justify-content-center mb-4">
     <img
       src={e.image}
       className="rounded-circle shadow-1-strong"
       width={150}
       height={150}
     />
   </div>
   <h5 className="mb-3">{e.name}</h5>
   <h6 className="text-primary mb-3">{e.email}</h6>
   <p className="px-xl-3">
     <i className="fas fa-quote-left pe-2" />
    {e.message}
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
   </>)})}
  

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
