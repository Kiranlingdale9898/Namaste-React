import Cards from "./Cards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnline from "./utils/useOnline";


function filterData(search, hotelData) {
  return hotelData.filter((hotel) =>
    hotel.data.name.toLowerCase().includes(search.toLowerCase())
  );
}
const Body = () => {
  const [search, setSearch] = useState("");

  const isOnline = useOnline();

  const [hotelData, setHotelData] = useState(null);
  const [filteredHotelData, setFilteredHotelData] = useState(null);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5210634&lng=73.7727908&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setHotelData(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredHotelData(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!isOnline)
    return <h1>You are offline,please check your internet connection</h1>;

  if (filteredHotelData?.length === 0) return <h1>Hello Motherfucker</h1>;

  return hotelData === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
        className="p-2 m-2 focus:bg-pink-50"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
        className="p-2 m-2 bg-purple-900 text-white rounded-md bg-purple-500 hover:bg-purple-700"
          type="submit"
          onClick={() => {
            const data = filterData(search, hotelData);
            setFilteredHotelData(data);
            
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredHotelData.map((data) => {
          return <Cards {...data} key={data.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
