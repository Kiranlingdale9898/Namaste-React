import { Link } from "react-router-dom";
import {IMG_CDN_URL} from '../assets/constants'

const Cards = (props) => {
  return ( 
    <div className="w-52 p-4 m-4 shadow-lg bg-pink-50">
      <Link style={{textDecoration:'none',color:'black'}} to={"/HotelDetails/" + props.data.id} className="card">
      <img
        alt="food-img"
        src={
          IMG_CDN_URL+
          props.data.cloudinaryImageId
        }
        key={props.id}
      ></img>
      <div className="container">
        <h2 className="font-bold text-xl" style={{textDecoration:'none'}} >{props.data.name}</h2>
        <h5 style={{textDecoration:'none'}} >{props.data.cuisines.join(", ")}</h5>
        <h5 >{props.data.lastMileTravelString} minuts</h5>
      </div>
    </Link>
    </div>
    
  );
};

export default Cards;
