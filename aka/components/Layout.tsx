import Navbar from "./navbar/NavBar"
import Footer from "./footer/Footer"

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;