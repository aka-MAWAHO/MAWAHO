import React from 'react'

const admin = () => {
  return (
    <>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Dashboard - SB Admin</title>
    <link
      href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css"
      rel="stylesheet"
    />
    <link href="css/styles.css" rel="stylesheet" />
    
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">

              <a className="nav-link" href="index.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt" />
                </div>
                Dashboard
              </a><a className="nav-link" href="index.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt" />
                </div>
                User
              </a><a className="nav-link" href="index.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt" />
                </div>
                Products
              </a>
             
              
              
              
              
            </div>
          </div>
          
        </nav>
      </div>
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            <h1 className="mt-4">Dashboard</h1>
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
            
            <div className="row">
              <div className="col-xl-6">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-area me-1" />
                    Area Chart Example
                  </div>
                  <div className="card-body">
                    {/* <canvas id="myAreaChart" width="100%" height={40} /> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-bar me-1" />
                    Bar Chart Example
                  </div>
                  <div className="card-body">
                    <canvas id="myBarChart" width="100%" height={40} />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </main>
        
      </div>
    </div>
  </>
  
  )
}

export default admin