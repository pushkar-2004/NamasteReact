import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) =>{
    const {resData} = props;
    return (
        <div className="m-4 p-4 w-[200px] border-2 border-black rounded" style={{backgroundColor: "#f0f0f0"}}>
            <img 
            className="res-img"
            src={CDN_URL+resData.info.cloudinaryImageId} alt="imglogo" />
            <h3 className="font-bold">{resData.info.name}</h3>
            <h4>{resData.info.locality}</h4>
            <h4>{resData.info.areaName}</h4>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h3>{resData.info.avgRating}</h3>
        </div>
    )
}

export const vegRestaurentCard = (RestaurentCard) => {
    return (props)=>{
        return (
            <div>
                <label>Veg</label>
                <RestaurentCard {...props} />
            </div>
        )
    }
}

export default RestaurentCard;