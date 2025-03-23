import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenue from "../utils/useMenue";

const Menue = () => {
  const { resid } = useParams();

  const resInfo = useMenue(resid);

  const menueItems = [];

  if (resInfo.length == 0) {
    return <Shimmer />;
  }

  const { name, areaName, city, avgRating, cuisines, veg } =
    resInfo[2].card.card.info;
  const bigData = resInfo[4].groupedCard.cardGroupMap.REGULAR.cards;
  for (let i = 2; i < 3; i++) {
    const mediumData = bigData[i].card.card.categories;
    for (let j = 0; j < mediumData.length; j++) {
      const finalData = mediumData[j].itemCards;
      for (let k = 0; k < finalData.length; k++) {
        menueItems.push(finalData[k].card.info.name);
      }
    }
  }

  console.log("inside normal flow");
  return (
    <div>
      <h1>{name}</h1>
      <h4>{areaName}</h4>
      <h4>{"city : " + city}</h4>
      <h4>{"Average Rating : " + avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{"veg : " + veg}</h4>

      <h2>Menue</h2>
      <ul>
        {menueItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menue;
