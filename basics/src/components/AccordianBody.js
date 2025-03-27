import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const AccordianBody = (props) => {
  // console.log(props.data);

  const dispatch = useDispatch();

  const handleAddItems=(data)=>{
    console.log(data);
    dispatch(addItem(data));
  }
  return (
    <div>
      {props.data.map((item, index) => (
        <div key={index} className="p-2 border-b border-gray-300">
          <span className="font-medium">{item.name}</span> -{" "}
          <span className="text-gray-600">
            {item.price ? (item.price / 100).toFixed(2) : "N/A"}
          </span>
          <div>
            <button
              className="border-2 rounded p-2 m-2 bg-black text-white border-solid border-black"
              onClick={()=>handleAddItems(item.name)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordianBody;
