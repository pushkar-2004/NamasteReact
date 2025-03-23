import { useEffect, useState } from "react";
import { MENUE_URL } from "./constants";


const useMenue = (resid) => {
    const [resInfo,setresInfo] = useState([]);
    useEffect(()=>{
        fetchMenue();
    },[])
    const fetchMenue = async () => {

        console.log("resid : "+resid);
        const data = await fetch(
          MENUE_URL+resid
        );
        const json = await data.json();
        console.log("inside asyn function");
        console.log(json);
        setresInfo(json.data.cards);
      }; 
    return resInfo;
}

export default useMenue;