import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) =>{
    const {resData} = props;
    return (
        <div className="res-card">
            <img 
            className="res-img"
            src={CDN_URL+resData.info.cloudinaryImageId} alt="imglogo" />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.locality}</h4>
            <h4>{resData.info.areaName}</h4>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h3>{resData.info.avgRating}</h3>
        </div>
    )
}

export default RestaurentCard;