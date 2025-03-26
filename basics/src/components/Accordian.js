import { useState } from "react";
import AccordianBody from "./AccordianBody";

const Accordian = (item) => {

  const [showItems,setshowItems] = useState(false);

  // console.log(item);
  const handleClick = () => {
    console.log("clicked")
    setshowItems(!showItems)
  }


  return (
    <div className="flex">
      {/* header */}

      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg cursor-pointer">
            {item.data.title} ({item.data.temp.length})
          </span>
          <span>
            {
              <img
                src="https://imgs.search.brave.com/BIKp9nF7lSvxWN9fYF_OBftVM6Jx7zzqzEgpXlv4MJg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzAzLzE4LzE1/LzM2MF9GXzQwMzE4/MTU0OF85NE5QMGI3/b29vd0pSekIyc3Jw/SWV3cFlJMHJZVENz/Uy5qcGc"
                alt="down arrow"
                className="w-6"
              />
            }
          </span>
        </div>
        {showItems && <AccordianBody data = {item.data.temp} />}
      </div>

      {/* body */}

      

      {/* <ul className="p-2 m-2">
        {recommended.map((item, index) => (
          <li
            key={index}
            className="border-2 border-solid border-black w-6/12 my-4 mx-auto p-2 bg-green-100"
          >
            <h1 className="font-bold m-2 p-2">{item.title}</h1>
            <ul>
              {item.temp.map((subItem, subIndex) => (
                <li key={subIndex} className="p-1 m-1">
                  {subItem.name} - {subItem.price / 100}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Accordian;
