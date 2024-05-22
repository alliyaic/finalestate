import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NonePage from "../pages/NonePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import CategoryPage from "../pages/CategoryPage";
import Electronics from '../pages/Electronics.jsx';
import Jewelery from '../pages/Jewelery.jsx';
import Womens from '../pages/Womens.jsx';
import Mens from '../pages/Mens.jsx';
import Shop from '../pages/Shop.jsx';
import Detail from '../pages/Detail.jsx';


function Routers() {
    return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/*" element={<NonePage />} /> */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="store/electronics" element={<Electronics/>} />
                <Route path="store/jewelery" element={<Jewelery/>} />
                <Route path="store/mens" element={<Mens/>} />
                <Route path="store/womens" element={<Womens/>} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/details/:id" element={<Detail/>}/>
            </Routes>
    );
}

export default Routers;
