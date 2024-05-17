import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className={styles.headerNav}>
            <Link to="/" className={styles.logo}>Kelvin</Link>
            <nav id={styles.nav} className={isNavOpen ? `${styles.nav} ${styles.open}` : styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Link to="/" className={`${styles.navLink} ${styles.active}`}>Home</Link></li>
                    <li className={styles.navItem}><Link to="/login" className={styles.navLink}>Login</Link></li>
                    <li className={styles.navItem}><Link to="/store" className={styles.navLink}>Store</Link></li>
                    <li className={styles.navItem}><Link to="/request" className={styles.navLink}>Request</Link></li>
                    <li className={styles.navItem}><Link to="/shop" className={styles.navLink}>Shop</Link></li>
                </ul>
                <button id={styles.navBtn} className={styles.navButton} onClick={toggleNav}>
                    <img id={styles.navBtnImg} src={isNavOpen ? '../src/assets/icons/nav-close.svg' : '../src/assets/icons/nav-open.svg'} alt="Nav button" />
                </button>
            </nav>
        </div>
    );
}

export default Navbar;
