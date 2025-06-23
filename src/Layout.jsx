import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import First_Year from "./components/Years/First_Year/First_Year";
import Year_Home from "./components/Years/Year_Home/Year_Home";
function Layout() {
    return ( <>
   <Header/>
   <Outlet/>
   <Footer/>
    </> )
}

export default Layout;