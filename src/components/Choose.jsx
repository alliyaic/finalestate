import imgchoose from "../assets/images/image-choose.webp"
import imgloc from "../assets/images/icon-location.svg"
import imgbuild from "../assets/images/icon-build.svg"
import imgdesign from "../assets/images/icon-design.svg"
function Choose() {
    return (
        <>
            <div className="choose">
                <div className="container">
                    <div className="title-wrap">
                        <span className="title__span">Our requirements</span>
                        <h2 className="title">How we choose our listings.</h2>
                        <p className="title__caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
                    </div>
                    <div className="second">
                        <div className="left_image">
                            <img src={imgchoose} alt="left image" />
                        </div>
                        <div className="choose_content">
                            <div className="three">
                                <img src={imgloc} alt="first" />
                                <span>stellar locations</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="three">
                                <img src={imgbuild} alt="second" />
                                <span>High quality builds</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="three">
                                <img src={imgdesign} alt="third" />
                                <span>Expert interior design</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Choose;
