import imag from "../assets/images/imag.jpg"
import im3 from "../assets/images/im3.jpg"
import im2 from "../assets/images/im2.jpg"
import pathsvg from "../assets/images/Path.svg"

function Newsroom() {
    return (
        <>
            <div className="newsroom">
                <div className="container">
                    <div className="newsroom__content">
                        <div className="title_wrap">
                            <span className="title__span">Newsroom</span>
                            <h2 className="title">Writing from Estate.</h2>
                        </div>
                        <div className="newsroom_items">
                            <div className="newsroom_item">
                                <div className="newsroom_item_block">
                                    <div className="newsroom_item_block_image">
                                        <img src={imag} alt="house img" />
                                    </div>
                                    <div className="newsroom_item_block_text">
                                        <span className="newsroom__span">Press release</span>
                                        <h3 className="newsroom_item">Market watch: are condos still a good investment?</h3>
                                        <p className="newsroom__data__another">August 12, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="newsroom_item">
                                <div className="newsroom_item_block">
                                    <div className="newsroom_item_block_image">
                                        <img src={im3} alt="" />
                                    </div>
                                    <div className="newsroom_item_block_text">
                                        <span className="newsroom__span">Announcement</span>
                                        <h3 className="newsroom_item">The history of great design</h3>
                                        <p className="newsroom__data">August 12, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="newsroom_item">
                                <div className="newsroom_item_block">
                                    <div className="newsroom_item_block_image">
                                        <img src={im2} alt="" />
                                    </div>
                                    <div className="newsroom_item_block_text">
                                        <span className="newsroom__span">Company news</span>
                                        <h3 className="newsroom_item">Designers who changed everything</h3>
                                        <p className="newsroom__data">August 12, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="" className="newsroom__arrow">
                            <span className="title__arrow">
                                Newsroom
                            </span>
                            <img src={pathsvg} alt="arrow" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Newsroom;
