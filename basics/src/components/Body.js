import RestaurentCard, { vegRestaurentCard } from "./RestaurentCard";
// import resInfo from "../utils/mock_data"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [listOfRestaurents1, setListOfRestaurents1] = useState([]);
  // const arr = listOfRestaurents;

  const [searchText, setsearchText] = useState("");

  const VegetarianRes = vegRestaurentCard(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurents(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurents1(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatues = useOnline();

  if (onlineStatues === false) {
    return <h1>Looks like you are offline!!!</h1>;
  }

  if (listOfRestaurents.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className=" search mx-4 px-4">
          <input
            type="text"
            className="border-2 border-black rounded"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 m-4 bg-green-100 border-2 rounded border-black"
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
        <div className=" search mx-4 px-4">
          <button
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
      </div>
      <div className="res-container flex flex-wrap">
        {listOfRestaurents.map((res, index) => {
          return (
            <Link key={res.info.id} to={"/restaurent/" + res.info.id}>
              {"veg" in res.info ? (
                <VegetarianRes resData={res} />
              ) : (
                <RestaurentCard resData={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
