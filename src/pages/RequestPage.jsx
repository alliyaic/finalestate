import { Link } from "react-router-dom"
import styles from './RequestPage.module.css'
// import { IonIcon } from '@ionic/react';
// import { MenuOutline } from 'ionicons/icons';

const RequestPage = () => {
  return (
    <div>
      <section id={styles.hero}>
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.div_nav}>
                    <div className={styles.mobile_menu_icon}>
                        {/* <IonIcon icon={MenuOutline} className={styles.menu_icon}></IonIcon> */}
                    </div>
                    <div className={styles.nav_menu}>
                        <li className={styles.nav_list}>
                            <Link to="#" className={styles.nav_link}>Home</Link>
                        </li>
                        <li className={styles.nav_list}>
                            <Link to="#" className={styles.nav_link}>Login</Link>
                        </li>
                        <li className={styles.nav_list}>
                            <Link to="#" className={styles.nav_link}>Works</Link>
                        </li>
                        <li className={styles.nav_list}>
                            <Link to="#" className={`${styles.nav_link} ${styles.active}`}>Request</Link>
                        </li>
                    </div>
                </div>
            </div>
        </header>
        <div className={styles.rec_container}>
            <form action="/action_page.php">
                <label for="fname">First Name</label>
                <input type="text" id={styles.fname} name="firstname" placeholder="Your name.."/>

                <label for="lname">Surname</label>
                <input type="text" id={styles.lname} name="lastname" placeholder="Your surname.."/>

                <label for="lname">Phone number</label>
                <input type="text" id={styles.lname} name="lastname" placeholder="Your phone number.."/>

                <label for="lname">Mail</label>
                <input type="text" id={styles.lname} name="lastname" placeholder="Your email.."/>

                <label for="country">Tournaments</label>
                <select id={styles.country} name="country">
                    <option value="australia"></option>
                    <option value="canada"></option>
                    <option value="usa"></option>
                </select>


                <input type="submit" value="Submit"/>
            </form>
        </div>
    </section>
    <div className={styles.caja_results}>
        <h1></h1>
    </div>
    <footer>
        <div className={styles.footer_main}>
            <div className={styles.tag}>
                <h1>Contact</h1>
                <Link to="#"><i className={`${styles.fa_solid} ${styles.fa_house}`}></i>Bishkek</Link>
                <Link to="#"><i className={`${styles.fa_solid} ${styles.fa_phone}`}></i>+996 553 771 777</Link>
                <Link to="#"><i className={`${styles.fa_solid} ${styles.fa_envelope}`}></i>raianaabd@gmail.com</Link>
            </div>
            <div className={styles.tag}>
                <h1>Follw Us</h1>
                <Link to="#"><i className={`${styles.fa_solid} ${styles.fa_facebook}`}></i>Us in FaceBook</Link>
                <Link to="#"><i className={`${styles.fa_solid} ${styles.fa_instagram}`}></i>Us in Instagram</Link>
                <Link to="#"><i className={`${styles.fa_solid} ${styles.fa_twitter}`}></i>Us in Twitter</Link>
            </div>
        </div>
    </footer>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="./card.js"></script>
    </div>
  )
}

export default RequestPage
