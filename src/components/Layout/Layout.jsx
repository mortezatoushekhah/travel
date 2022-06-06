import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./layout.css";

const Layout = () => {
    return(
        <>
         <Navbar />
         <Outlet />
         <Footer />
        </>
    )
}
export default Layout;