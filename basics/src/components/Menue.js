import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenue from "../utils/useMenue";

const Menue = () => {
  const { resid } = useParams();

  const resInfo = useMenue(resid);

  const menueItems = [];

  const recommended = [];

  if (resInfo.length == 0) {
    return <Shimmer />;
  }

  const { name, areaName, city, avgRating, cuisines, veg } =
    resInfo[2].card.card.info;

  const bigData = resInfo[4].groupedCard.cardGroupMap.REGULAR.cards;
  // console.log("bigData is")
  // console.log(bigData)

  // for(let i=0;i<bigData.length;i++){
  //   recommended.push(bigData[i].card.info.name);
  // }
  // console.log("big data is")
  // console.log(bigData)
  // for (let i = 2; i < 3; i++) {
  //   const mediumData = bigData[i].card.card.categories;
  //   for (let j = 0; j < mediumData.length; j++) {
  //     const finalData = mediumData[j].itemCards;
  //     for (let k = 0; k < finalData.length; k++) {
  //       menueItems.push(finalData[k].card.info.name);
  //     }
  //   }
  // }

  for(let i=1;i<bigData.length;i++){
    if(bigData[i].card.card.itemCards != undefined){
      const item = bigData[i].card.card.itemCards;
      const title = bigData[i].card.card.title;
      // console.log(i)
      // console.log(title)
      const temp = [];
      for(let j=0;j<item.length;j++){
        temp.push({
          name: item[j].card.info.name,
          price: item[j].card.info.defaultPrice || "N/A", // Handle missing price
        });
      }
      recommended.push({title,temp});
    }
  }
  // console.log("recommended array is")
  // console.log(recommended)

  console.log("inside normal flow");
  return (
    <div className="text-center">
      <div className="border-2 border-solid border-black my-4 mx-auto p-2 w-6/12">
        <h1 className="text-2xl font-bold my-6 underline">{name}</h1>
        <h4 className="text-lg">{areaName}</h4>
        <h4 className="text-lg">{"city : " + city}</h4>
        <h4 className="text-lg">{"Average Rating : " + avgRating}</h4>
        <h4 className="text-lg">{cuisines.join(", ")}</h4>
      </div>
      {/* <h4>{"veg : " + veg}</h4> */}

      {/* <h2>Recommended</h2> */}
      <ul className="p-2 m-2">
      {recommended.map((item, index) => (
        <li key={index} className="border-2 border-solid border-black w-6/12 my-4 mx-auto p-2 bg-green-100">
          <h1 className="font-bold m-2 p-2">{item.title}</h1>
          <ul>
            {item.temp.map((subItem, subIndex) => (
              <li key={subIndex} className="p-1 m-1">
              {subItem.name} - {subItem.price/100}
            </li>
            ))}
          </ul>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default Menue;
