import React from 'react'
import Link from 'next/link'
import axios from 'axios'
const OneProduct = ({e}:any) => {
  const addToCart=(body:any)=>[
axios.post('http://localhost:8080/cart/add',body).then(res=>{
  console.log('success');
  
}).catch(err=>console.log(err)
)
  ]
  return (
    <> <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <Link href={'/shop/' + e.name} ><div 
                    className="product__item__pic set-bg"
                    style={{
  backgroundImage: "url(" + e.withoutModel+  ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}
                  >
                  
                  </div></Link>
                  <div className="product__item__text">
                    <h6>{e.name}</h6>
                    <a onClick={()=>{
                      addToCart({nameArticle:e.name,
                      quantity:1,
                    price:e.price,
                  image:e.withoutModel})
                      window.location.reload()  }}
                 
                    className="btn add-cart">
                      + Add To Cart
                    </a>
                   
                    <h5>{e.price} dt</h5>
                   
                  </div>
                </div>
              </div></>
  )
}

export default OneProduct