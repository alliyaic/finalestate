import styles from '../LoginPage.module.css';
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../App';

const LoginPage = () => {
  const [isAuth, setIsAuth] = useContext(AuthContext)
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(prevActive => !prevActive);
  };

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  })
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const sendLoginData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://217.151.230.35:888/api/v1/regauth/login`, loginForm)
      if (response.status === 200) {
        console.log(response.data)
        setIsAuth(true)
        localStorage.setItem('access_token', response.data.access)
      }
    } catch (e) {
      console.log(e);
    }
  }

  const sendRegisterData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://217.151.230.35:888/api/v1/regauth/register`, registerForm)
      if (response.status === 200) {
        console.log(response.data)
        setIsAuth(true)
        localStorage.setItem('access_token', response.data.access)
      }
    } catch (e) {
      console.log(e);
    }
  }
  const handleLoginChange = (e) => {
    { setLoginForm({ ...loginForm, [e.target.name]: e.target.value }) }
  }
  const handleRegisterChange = (e) => {
    { setRegisterForm({ ...registerForm, [e.target.name]: e.target.value }) }
  }

  return (
    <div className={styles.body}>
      <div className={`${styles.container} ${styles.container_adaptive}`}>
        <div className={`${styles.form_container} ${styles.sign_up}`}>
          <form onSubmit={sendRegisterData}>
            <h1>Create Account</h1>
            <input type="text" placeholder="Username" name='name' value={registerForm.name} onChange={handleRegisterChange} />
            <input type="email" placeholder="Email" name='email' value={registerForm.email} onChange={handleRegisterChange} />
            <input type="password" placeholder="Password" name='password' value={registerForm.password} onChange={handleRegisterChange} />
            <input type="password" placeholder="Confirm Password" name='confirm_password' value={registerForm.confirm_password} onChange={handleRegisterChange} />
            <button type='submit'>Sign Up</button>
          </form>
        </div>
      </div>
      <div className={`${styles.container} ${styles.container_adaptive}`}>
        <div className={`${styles.form_container} ${styles.sign_in}`}>
          <form onSubmit={sendLoginData}>
            <h1>Sign In</h1>
            <input type="text" placeholder="Username" name='username' value={loginForm.username} onChange={handleLoginChange} />
            <input type="password" placeholder="Password" name='password' value={loginForm.password} onChange={handleLoginChange} />
            <button type='submit'>Sign In</button>
          </form>
        </div>
      </div>
      <div className={`${styles.container} ${active ? styles.active : ''}`} id={styles.container}>
        <div className={`${styles.form_container} ${styles.sign_up}`}>
          <form onSubmit={sendRegisterData}>
            <h1>Create Account</h1>
            <input type="text" placeholder="Username" name='name' value={registerForm.name} onChange={handleRegisterChange} />
            <input type="email" placeholder="Email" name='email' value={registerForm.email} onChange={handleRegisterChange} />
            <input type="password" placeholder="Password" name='password' value={registerForm.password} onChange={handleRegisterChange} />
            <input type="password" placeholder="Confirm Password" name='confirm_password' value={registerForm.confirm_password} onChange={handleRegisterChange} />
            <button type='submit'>Sign Up</button>
          </form>
        </div>

        <div className={`${styles.form_container} ${styles.sign_in}`}>
          <form onSubmit={sendLoginData}>
            <h1>Sign In</h1>
            <input type="text" placeholder="Username" name='username' value={loginForm.username} onChange={handleLoginChange} />
            <input type="password" placeholder="Password" name='password' value={loginForm.password} onChange={handleLoginChange} />
            <button type='submit'>Sign In</button>
          </form>
        </div>

        <div className={styles.toogle_container}>
          <div className={styles.toogle}>
            <div className={`${styles.toogle_panel} ${styles.toogle_left}`}>
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button className={styles.hidden} id={styles.login} onClick={toggleActive}>Sign In</button>
            </div>
            <div className={`${styles.toogle_panel} ${styles.toogle_right}`}>
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all site features</p>
              <button className={styles.hidden} id={styles.register} onClick={toggleActive}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
