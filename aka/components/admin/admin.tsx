import React from 'react'

const admin = ({products}:any) => {
  console.log(products);

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
               
          {products.map((e:any) => { return( 
              
            <div className="card-body" >
                  {/* Single item */}
                  <div className="card-header py-3">
                  {/* <h5 className="mb-0"><button onClick={()=>{axios.delete(`http://localhost:4000/api/cart/${e._id}`); window.location.reload()}}>  ✖️</button></h5> */}
                </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      {/* Image */}
                      <div 
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      ><span className="close ">{" "}</span>
                        <img
                          src={e.withoutModel
                          }
                          className="w-100"
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
                      <p>
                        <strong>{e.name}</strong>
                      </p>
                      <p>{e.description}</p>
                
                  <p>{e.gender}</p>
                      <div>{e.size}</div>

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
                    className="btn  btn-lg btn-outline-danger"
                  >
                  DELETE
                  </button>
                  </div>
                  <br></br>
                  <div>
                  <button
                    type="button"
                    className="btn pm1 btn-lg btn-outline-success"
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
                      <input type="text" />
                      <span></span>
                    </li>
                    <li className=" list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                      Price
                      <input type="text"  />
                      <span>  </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                      Products
                      <input type="text" />
                      <span> </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0  justify-content-center">
                      Products
                      <input type="text" />
                      <span> </span>
                    </li>
                    
                    <br></br>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-dark col-md-12 text-center"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  </>
  
  )
}

export default admin