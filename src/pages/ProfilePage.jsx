import { useState , useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const styles = `
  .container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
  }

  .profile {
    height: 400px;
    background-color: #2DEA8E;
    width: 400px;
    display: flex;
    gap: 15px;
    border-radius: 25px;
  }

  .avatar, .information {
    flex: 1;
  }

  .avatar {
    padding: 20px;
    text-align: center;
  }

  .avatar img {
    width: 90px;
    height: 90px;
  }
`;
const navigate = useNavigate()
const avatar = '.././src/assets/icons/avatar.svg'
const [user,setUser] = useState(false)
    useEffect(() => {
        const getUser = async () => {
            const access_token = localStorage.getItem('access_token');
            if (!access_token){
                // navigate('/login')
            }
            try {
                const response = await axios.get(`http://217.151.230.35:888/api/v1/regauth/user-info/`, {
                    headers: { 'Authorization': `Bearer ${access_token}` }
                });
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getUser();
    }, []);

    return (
        <div style={{backgroundColor:'beige',height:'100vh'}}>
            <style>{styles}</style>
            <main>
                <div className="container">
                    <div className="profile">
                        <div className="avatar"> <img src={avatar} />
                        </div>
                        <div className="information">
                            <div className="username">{user.username}</div>
                            <div className="email">{user.email}</div>
                            <div className="phone">{user.phone}</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default ProfilePage