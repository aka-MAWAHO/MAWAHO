import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../components/home/home.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../pages/about.css';
config.autoAddCss = false
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import jwt from 'jwt-decode'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function App({ Component, pageProps, ...appProps }: AppProps)  {
  const[user,setUser]=useState('')
  console.log(user)
useEffect (()=> { 
  const token = localStorage.getItem("token");
    if (token) {
      const user = jwt(token);

      if (!user) {
        localStorage.removeItem("token");
      } else {
        axios
          .get(`http://localhost:8080/user/${user.email}`)
          .then((res) => {
            setUser(res.data);
          });
      }
    }
  },[])


  const getContent = () => {
    if (!user && (["/"].includes(appProps.router.pathname))){ return <Component {...pageProps} />;}
else if(user.admin==true && ( (["/admin"].includes(appProps.router.pathname)))) { 
  return (
    <Layout>
      <Component {...pageProps} />{" "}
    </Layout>
  );
} 
else if (user.admin==false &&((["/shop"].includes(appProps.router.pathname)) ||(["/shop"].includes(appProps.router.pathname))|| (["/shop/[name]"].includes(appProps.router.pathname)) || (["/cart"].includes(appProps.router.pathname)) || (["/home"].includes(appProps.router.pathname))) || (["/checkOut"].includes(appProps.router.pathname))  )
    return (
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    );
    else if (user.admin==false &&((["/shop"].includes(appProps.router.pathname)) ||(["/aboutus"].includes(appProps.router.pathname))|| (["/shop/[name]"].includes(appProps.router.pathname)) || (["/cart"].includes(appProps.router.pathname)) || (["/home"].includes(appProps.router.pathname))) || (["/checkOut"].includes(appProps.router.pathname))  )
    return (
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    );
  };

  return getContent()
}

