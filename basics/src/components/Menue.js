import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenue from "../utils/useMenue";
import Accordian from "./Accordian";
import { useState } from "react";

const Menue = () => {
  const { resid } = useParams();

  const resInfo = useMenue(resid);

  const [showItems, setshowItems] = useState(-1);

  const recommended = [];

  if (resInfo.length == 0) {
    return <Shimmer />;
  }

  const { name, areaName, city, avgRating, cuisines, veg } =
    resInfo[2].card.card.info;

  const bigData = resInfo[4].groupedCard.cardGroupMap.REGULAR.cards;

  for (let i = 1; i < bigData.length; i++) {
    if (bigData[i].card.card.itemCards != undefined) {
      const item = bigData[i].card.card.itemCards;
      const title = bigData[i].card.card.title;

      const temp = [];
      for (let j = 0; j < item.length; j++) {
        temp.push({
          name: item[j].card.info.name,
          price: item[j].card.info.defaultPrice || "N/A", // Handle missing price
        });
      }
      recommended.push({ title, temp });
    }
  }

  return (
    <div className="text-center">
      <div className="my-4 mx-auto p-2 w-6/12">
        <h1 className="text-2xl font-bold my-6 underline">{name}</h1>
        <h4 className="text-lg">{areaName}</h4>
        <h4 className="text-lg">{"city : " + city}</h4>
        <h4 className="text-lg">{"Average Rating : " + avgRating}</h4>
        <h4 className="text-lg">{cuisines.join(", ")}</h4>
      </div>

      {recommended.map((item, index) => {
        return (
          <Accordian
            key={index}
            item={item}
            showItems={index === showItems ? true : false}
            setshowItems={
              index !== showItems
                ? () => {
                    setshowItems(index);
                  }
                : () => {
                    setshowItems(-1);
                  }
            }
          />
        );
      })}
    </div>
  );
};

export default Menue;
