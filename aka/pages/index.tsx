import React,{useState} from 'react'
import axios from 'axios'
import jwt from 'jwt-decode'
const signup = () => {
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const signup=(body)=>{
        axios.post('http://localhost:8080/user/signUp',body).then(res=>{
          localStorage.setItem("token", res.data)
          window.location.href='/home'

        } ).catch(err=>alert(err)
        )
    } 
    const SignIn=(body)=>{
        axios.post('http://localhost:8080/user/login',body).then(res=>{
          localStorage.setItem("token", res.data)
          window.location.href='/home'

        }
        ).catch(err=>alert(err)
        )
    }
  return (
    <>
  <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Landing PAGE Html5 Template" />
  <meta name="keywords" content="landing,startup,flat" />
  <meta name="author" content="Made By GN DESIGNS" />
  <title>AKA</title>
  {/* // PLUGINS (css files) // */}
  <link
    href="assets/js/plugins/bootsnav_files/skins/color.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/bootsnav_files/css/animate.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/bootsnav_files/css/bootsnav.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/bootsnav_files/css/overwrite.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/owl-carousel/owl.carousel.css"
    rel="stylesheet"
  />
  <link href="assets/js/plugins/owl-carousel/owl.theme.css" rel="stylesheet" />
  <link
    href="assets/js/plugins/owl-carousel/owl.transitions.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/Magnific-Popup-master/Magnific-Popup-master/dist/magnific-popup.css"
    rel="stylesheet"
  />
  {/*// ICONS //*/}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
  {/*// BOOTSTRAP & Main //*/}
  <link
    href="assets/bootstrap-3.3.7/bootstrap-3.3.7-dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link href="assets/css/main.css" rel="stylesheet" />

      
  {/*//** Banner** //*/}
  <section id="home">
    <div className="container">
      <div className="row">
        {/* Introduction */}
        <div  className="col-md-6 caption">
          <h1 style={{position:'relative',right:'100px'}}> AKA clothes style</h1>
         
       
        </div>
        {/* Sign Up */}
        <div className="col-md-5 col-md-offset-1">
          {/* <form className="signup-form"> */}
            {/* <h2 className="text-center">Signup </h2> */}
            <hr />
            <div className="form-group">
            
            </div>
            <div className="form-group">
              <input
              onChange={e=>setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Email Address"
               
              />
            </div>
            <div className="form-group">
              <input
              onChange={e=>setUsername(e.target.value)}

                type="text"
                className="form-control"
                placeholder="User Name"
               
              />
            </div>
            <div className="form-group">
              <input
              onChange={e=>setPassword(e.target.value)}

                type="password"
                className="form-control"
                placeholder="Password"
               
              />
            </div>
            <div className="form-group text-center">
              <button onClick={()=>signup({username,password,email})} className="btn btn-outline-light">
                SignUp
              </button> <button onClick={()=>SignIn({username,password,email})} className="btn btn-outline-light">
                SignIn
              </button>
            </div>
          
        </div>
      </div>
    </div>
  </section>
  
  {/*======================================== 

     Modal

    ========================================*/}
  {/* Modal */}
  
  {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
  {/* Include all compiled plugins (below), or include individual files as needed */}
</>

  )
}

export default signup