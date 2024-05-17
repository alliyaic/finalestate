import { Link, useNavigate} from "react-router-dom";
import Detail from "../pages/Detail";


function Products(props) {
    console.log(props)
    const navigate = useNavigate()
    const idprod=props?.data
    function directbtn(){
      navigate(`/details/${props?.data?.id}`)
      console.log(idprod.data)
    }
  return (
    <div className="Products">
        <div className="imgBox">
            <img src={props?.data?.image} alt='' />
        </div>
        <div className="contentBox">
            <h3>{props?.data.title}</h3>
            <h2 className="price"><small>{props?.data?.price}</small>$</h2>
            <button className="buy" onClick={directbtn}>Buy Now</button>
        </div>
    </div>
    
  );
}

export default Products;