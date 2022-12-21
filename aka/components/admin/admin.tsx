import React,{useState} from 'react'
import axios from 'axios';
const admin = ({products}:any) => {
  console.log(products);

  const [name,setName]=useState("")
  const [card,setCard]=useState('')
  const [price,setPrice]=useState(0)
  const [description,setDescription]=useState("")
  const [categorie,setCategories]=useState("")
  const [size,setSize]=useState("")
  const [brand,setBrand]=useState("")
  const [gender,setGender]=useState("")

console.log(gender);


  const Add=(add:any) =>{
    axios.post(`http://localhost:8080/product/add`,add)
  }
  const update=() =>{
    axios.put(`http://localhost:8080/product/${card._id}`,{name,price,categorie,description,withoutModel,brand,size,gender})
    .then(res=>axios.get(`http://localhost:8080/product/getAll`))
  }


  const[file,setFile]=useState(null)
  const [withoutModel,setImagee]=useState("")
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
    .then((res)=>{setImagee(res.url)
     console.log(res.url)})
    .catch((err)=>{console.log(err);})
  }
  
  const [show,setShow]=useState(false)
  // const[card,setCard]=useState('')
  console.log(card,'hello');
  console.log(price,'fffffff');
  
const toggle=()=>{
let she=!show
setShow(she)}
if (show===true) {
  return(
    
    
    
    
    <div className=" d-flex justify-content-center ">
      
    <div className="card col-md-6 ">
    <br></br>
    
                <div className="card-header py-3 ">
                  <h3 className="mb-0 text-center">UPDATE Product</h3>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className=" list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                      Name 
                     
                      <span> <input type="text" onChange= {(event)=>setName(event.target.value)} defaultValue={card.name}/></span>
                    </li>
                    <li className=" list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                      Price
                      
                      <span> <input type="text" onChange= {(event)=>setPrice(event.target.value)} defaultValue={card.price}/> </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                    description 
                      
                      <span><input type="text" onChange= {(event)=>setDescription(event.target.value)}  defaultValue={card.description}/> </span>
                    </li>
                    
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                      Size
                      
                      <span> <input type="text" onChange= {(event)=>setSize(event.target.value)} defaultValue={card.size} /></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                      brand
                     
                      <span>  <input type="text"onChange= {(event)=>setBrand(event.target.value)}  defaultValue={card.brand}/></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                    categorie
                      
                      <span> <input type="text" onChange= {(event)=>setCategories(event.target.value)}  defaultValue={card.categorie}/></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                    gender
                      
                      <span><select  name="rental-option" className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center" onChange={(event)=> setGender(event.target.value)}  defaultValue={card.gender}>
  <option className="addd" value="test"   >-----</option>

  <option value="Women"> Women </option>
  <option value="Kids"> Kids </option>
  <option value="Men"> Men </option>
  <option value="Baby"> Baby </option>
  

</select>
 </span>
                    </li>
                    {/* <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                    type
                      
                      <span> <input type="text"onChange= {(event)=>setType(event.target.value)} /></span>
                    </li> */}
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                    image
                      
                      <span > <input type="file" onChange={(event)=>setFile(event.target.files[0])}  className="justify-content-center"  />
                      <button
                    type="button"
                    className="btn  btn-sm btn-secondary col-md-4 text-center"
                    onClick={()=>{
               
                      uploadd();
                      
                        
                         }}
                  >
                    upload
                  </button></span>
                      
                    </li>
                    
                    <br></br>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-dark col-md-12 text-center"
                    onClick={()=>{update()
                      setTimeout(() => {window.location.reload()},3000);
                      
                      
                      ;}}
                  >
                    UPDATE 
                  </button>
                </div>
              </div></div>
  )
}
else {


  return (
    <>
    <section
        className="h-100 gradient-custom p-5 mb-2 "
        style={{ backgroundColor: "#D3D3D3" }}
      >
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
               
          {products.map((e:any  ,i : any) => { return( 
              
            <div className="card-body" >
                  {/* Single item */}
                  <div className="card-header py-3 text-center">
                      PRODUCT {i+1}
                  {/* <h5 className="mb-0"><button onClick={()=>{axios.delete(`http://localhost:4000/api/cart/${e._id}`); window.location.reload()}}>  ✖️</button></h5> */}
                </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      {/* Image */}
                      <div 
                        className="bg-image hover-overlay hover-zoom "
                        data-mdb-ripple-color="light"
                      ><span className="close ">{" "}</span>
                      <br></br>
                      <br></br>
                      <br></br>
                      
                      
                        <img
                          src={e.withoutModel
                          }
                          className="w-100 "
                        />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                      {/* Image */}
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      {/* Data */}
                      <br></br>
                      <p>
                       
                        <strong className="form-control rounded bg-white"><b>{e.name}</b></strong>
                      </p>
                      <p className="form-control rounded bg-white">{e.description}</p>
                
                  <p className="form-control rounded bg-white">{e.gender}</p>
                      <div className="form-control rounded bg-white">{e.size}</div>

                      {/* Data */}
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      {/* Quantity */}
                      <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                        
                      </div>
                      {/* Quantity */}
                      {/* Price */}
                      <p className="text-start text-md-center">
                        <div className="form-control rounded bg-white">
                          {" "}
                        {e.price  }  DT
                        </div>
                        <br></br>
                        <div >
                        <button
                    type="button"
                    className="btn  btn-sm btn-outline-danger"
                    onClick={()=>{console.log("hello");
      

      axios.delete(`http://localhost:8080/product/${e._id}`)
      .then(res=>axios.get(`http://localhost:8080/product/getAll`))
      setTimeout(() => {window.location.reload()},1000)
 
      
      

}
}
                  >
                  DELETE
                  </button>
                  </div>
                  <br></br>
                  <div>
                  <button
                    type="button"
                    className="btn pm1 btn-sm btn-outline-success"
                    onClick={()=>{toggle()
                      setCard(e)}}
                  >
                    UPDATE
                  </button>
                  </div>
                  
                      </p>
                      {/* Price */}
                    </div>
                    
                  </div>
                  {/* Single item */}
                </div>)})}
              </div>
             
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3 ">
                  <h3 className="mb-0 text-center">ADD Product</h3>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className=" list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                      Name 
                     
                      <span> <input type="text" onChange= {(event)=>setName(event.target.value)}/></span>
                    </li>
                    <li className=" list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                      Price
                      
                      <span> <input type="text" onChange= {(event)=>setPrice(event.target.value)} /> </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                    description 
                      
                      <span><input type="text" onChange= {(event)=>setDescription(event.target.value)}/> </span>
                    </li>
                    
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                      Size
                      
                      <span> <input type="text" onChange= {(event)=>setSize(event.target.value)} /></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                      brand
                     
                      <span>  <input type="text"onChange= {(event)=>setBrand(event.target.value)} /></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                    categorie
                      
                      <span> <input type="text" onChange= {(event)=>setCategories(event.target.value)}/></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                    gender
                      
                      <span><select  name="rental-option" className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center" onChange={(event)=> setGender(event.target.value)}>
  <option className="addd" value="test"   >-----</option>

  <option value="Women"> Women </option>
  <option value="Kids"> Kids </option>
  <option value="Men"> Men </option>
  <option value="Baby"> Baby </option>
  

</select>
 </span>
                    </li>
                    {/* <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                    type
                      
                      <span> <input type="text"onChange= {(event)=>setType(event.target.value)} /></span>
                    </li> */}
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                    image
                      
                      <span > <input type="file" onChange={(event)=>setFile(event.target.files[0])}  className="justify-content-center"/>
                      <button
                    type="button"
                    className="btn  btn-sm btn-secondary col-md-4 text-center"
                    onClick={()=>{
               
                      uploadd();
                        
                         }}
                  >
                    upload
                  </button></span>
                      
                    </li>
                    
                    <br></br>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-dark col-md-12 text-center"
                    onClick={()=>{
               
                        
                         Add({withoutModel,name,price,description,categorie,size,brand,gender}) ;
                       setTimeout(() => {window.location.reload()},500);}}
                  >
                    ADD
                  </button>  
                </div>1000
              </div>
              
            </div>
            
          </div>
          
        </div>
      </section>

  </>
  
  )
}}

export default admin