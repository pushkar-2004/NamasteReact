import { useState } from "react";
import AccordianBody from "./AccordianBody";

const Accordian = ({ item, showItems, setshowItems }) => {
  // console.log(item);
  const handleClick = () => {
    setshowItems();
  };

  return (
    <div className="flex">
      {/* header */}

      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg cursor-pointer">
            {item.title} ({item.temp.length})
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
        {showItems && <AccordianBody data={item.temp} />}
      </div>
    </div>
  );
};

export default Accordian;
