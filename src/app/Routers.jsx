import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NonePage from "../pages/NonePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";


function Routers() {
    return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/*" element={<NonePage />} /> */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />

            </Routes>
    );
}

export default Routers;
