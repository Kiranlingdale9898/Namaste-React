/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../../assets/constants";


const useHotelDetails = (id) => {
  const [hotelMenu, setHotelMenu] = useState([]);
  const [hotelInfo, setHotelInfo] = useState([]);
  

  useEffect(() => {
    getHotelDetails();
  }, []);

  async function getHotelDetails() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    let index = 1;
    if(json?.data?.cards.length === 3) {
      index = 2
    }
    setHotelMenu(json?.data?.cards[index]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);  
    setHotelInfo(json?.data?.cards[0]?.card?.card?.info);
   }
  return [hotelInfo,hotelMenu];
};

export default useHotelDetails;
