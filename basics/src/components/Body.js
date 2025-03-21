import RestaurentCard from "./RestaurentCard";
// import resInfo from "../utils/mock_data"
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [listOfRestaurents1, setListOfRestaurents1] = useState([]);
  // const arr = listOfRestaurents;

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4271656&lng=81.7719141&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurents(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurents1(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (listOfRestaurents.length === 0) {
    return (
      <div className="spinner">
        <h1 className="loading"></h1>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurents = listOfRestaurents1.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              if (filteredRestaurents.length != 0)
                setListOfRestaurents(filteredRestaurents);
              else alert("No restaurent found");
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("clicked");
            const restaurentInfo = listOfRestaurents.filter((res) => {
              return res.info.avgRating >= 4.5;
            });
            setListOfRestaurents(restaurentInfo);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((res, index) => {
          return <RestaurentCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
