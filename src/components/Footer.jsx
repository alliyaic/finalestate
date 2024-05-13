import logohor from "../assets/images/Estate-Logotype-Horizontal-Light.svg"
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer_icon">
                        <a href="#">
                            <img src={logohor} alt="Estate logo" />
                        </a>
                    </div>
                    <div className="footer_items">
                        <div className="footer_item">
                            <h3 className="footer_title">Pages</h3>
                            <ul>
                                <li><a href="">Start</a></li>
                                <li><a href="">Listings</a></li>
                                <li><a href="">Listings alt. 2</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Legal</a></li>
                            </ul>
                        </div>
                        <div className="footer_item">
                            <h3 className="footer_title">Company</h3>
                            <ul>
                                <li><a href="">About</a></li>
                                <li><a href="">Our team</a></li>
                                <li><a href="">Newsroom</a></li>
                            </ul>
                        </div>
                        <div className="footer_item">
                            <h3 className="footer_title">Utility</h3>
                            <ul>
                                <li><a href="">Instructions</a></li>
                                <li><a href="">Style guide</a></li>
                                <li><a href="">Licenses</a></li>
                                <li><a href="">Changelog</a></li>
                                <li><a href="">404</a></li>
                            </ul>
                        </div>
                        <div className="footer_email">
                            <h3 className="footer_title">Newsletter</h3>
                            <p>Subscribe to our (infrequent) newsletter where we share news about upcoming listings and projects.</p>
                            <div className="footer_form">
                                <input type="text" name="" id="" placeholder="Email" />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="footer_social_media">
                        <div className="footer_company">
                            <p>© Estate, LLC. All rights reserved. Powered by Webflow.</p>
                        </div>
                        <div className="footer_social_media_items">
                            <a href=""><img src="images/Frame.svg" alt="" /></a>
                            <a href=""><img src="images/IMAGE.svg" alt="" /></a>
                            <a href=""><img src="images/Instagram-Icon.svg" alt="" /></a>
                            <a href=""><img src="images/Twitter-Icon.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
