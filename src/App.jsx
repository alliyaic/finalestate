import Routers from "../src/app/Routers"
import { createContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';
import HomePage from './pages/HomePage.jsx'
export const AuthContext = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      axios.get('http://217.151.230.35:888/api/v1/regauth/idea/user-info/', {
        headers: { 'Authorization': `Bearer ${access_token}` }
      })
        .then(response => {
          console.log(response.data)
          setIsAuth(true);
        })
        .catch(error => {
          console.error('Ошибка:', error.message);
          localStorage.removeItem('access_token');
        });
    }
  }, []);
  return (
    <>
      <AuthContext.Provider value={[isAuth, setIsAuth]}>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  )
}

export default App
