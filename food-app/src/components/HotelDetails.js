/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from '../assets/constants';
import useHotelDetails from "./utils/useHotelDetails";

const HotelDetails = () => {
  const params = useParams();
  const { id } = params;

  
const [hotelInfo, hotelMenu] = useHotelDetails(id); //custom hook 

if(!hotelInfo && !hotelMenu) return null;

  return (
    <div> 
      <div>     
        <h2>{hotelInfo.name}</h2>
        <img
          src={
            IMG_CDN_URL +
            hotelInfo.cloudinaryImageId
          }
          alt="Img"
        />
        <h3>{hotelInfo.areaName}</h3>
        <h3>{hotelInfo.city}</h3>
        <h3>{hotelInfo.avgRating} stars</h3>
        <h3>{hotelInfo.costForTwoMessage}</h3>
      </div>
      {hotelInfo && hotelMenu.length > 0 && (
        <div>
        <h1>Menu</h1>
        <ul>{
         hotelMenu.map((item)=><li key={item.card.info.id}>{item.card.info.name}</li>
          )
          }</ul>
      </div>
      )}
     {hotelMenu.length > 0 && console.log(hotelMenu[0].card.info.id)} 
    </div>
  );
};

export default HotelDetails;
