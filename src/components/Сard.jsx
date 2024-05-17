import { Link } from "react-router-dom";


function Card(props) {
    console.log(props)
  return (
    <div className="card">
        <div className="imgBox">
            <img src={props?.image?.image} alt='' />
        </div>
        <div className="contentBox">
            <h3>{props?.data}</h3>
            {/* <h2 className="price"><small>{props?.data?.price}</small>$</h2> */}
            <Link to={props?.image?.url} className="buy">See More</Link>
        </div>
    </div>
    
  );
}
export default Card;