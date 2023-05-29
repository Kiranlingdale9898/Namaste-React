import {useState,useEffect} from 'react';


export const useRestaurantsList = () =>{
    const [hotelData, setHotelData] = useState([]);
    const [filteredHotelData, setFilteredHotelData] = useState([]);

    useEffect(()=>{
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5210634&lng=73.7727908&page_type=DESKTOP_WEB_LISTING"
          );
          const json = await data.json();
          setHotelData(json?.data?.cards[2]?.data?.data?.cards);
          setFilteredHotelData(json?.data?.cards[2]?.data?.data?.cards);
    }
    return [hotelData,filteredHotelData];
};


export default useRestaurantsList;
