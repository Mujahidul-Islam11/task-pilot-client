import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";


const LayOut = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="container mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;