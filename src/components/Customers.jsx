import star2 from "../assets/images/2star.svg"
import star from "../assets/images/star.svg"

function Customers() {
    return (
        <>
            <div className="customers">
                <div className="container">
                    <div className="title_wrap">
                        <span className="title__span">Testimonials</span>
                        <h2 className="title">What our customers say.</h2>
                    </div>
                    <div className="customers_items">
                        <div className="customers_item">
                            <div className="customer_item_img">
                                <img src={star2} alt="stars" />
                                <img src={star2} alt="stars" />
                                <img src={star2} alt="stars" />
                                <img src={star2} alt="stars" />
                                <img src={star2} alt="stars" />
                            </div>
                            <div className="customers_item_content">
                                <h3>We found the perfect home!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                <span className="customers_person_title">Nate Davidsson</span>
                            </div>
                        </div>
                        <div className="customers_item">
                            <div className="customer_item_img">
                                <img src={star2} alt="stars" />
                                <img src={star2} alt="stars" />
                                <img src={star2} alt="stars" />
                                <img src={star2} alt="stars" />
                                <img src={star} alt="stars" />
                            </div>
                            <div className="customers_item_content">
                                <h3>We're so happy with Estate.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                <span className="customers_person_title">Laura Paulie</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Customers;
