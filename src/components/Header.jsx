import logo from "../assets/images/2svg.svg"
import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate('')
    return (
        <>
            <div className="menu">
                <div className="container">
                    <div className="menu_inner">
                        <a href=""><img src={logo} alt="" /></a>
                        <nav>
                            <ul>
                                <li onClick={()=>navigate('')}>Listings</li>
                                <li onClick={()=>navigate('')}>Newsroom</li>
                                <li onClick={()=>navigate('')}>Contact</li>
                                <li onClick={()=>navigate('')}>Our team</li>
                                <li onClick={()=>navigate('/login')}>Login</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
