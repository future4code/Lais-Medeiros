import axios from "axios";
import react, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/baseUrl";
import {List} from "./Styled"

const ListTripsPage= () => {
  const [ listTrips, setListTrips] = useState ("")

  const getTrips = ()=>{
    const URL = `${BASE_URL}trips`

    axios(URL)
    .then((res)=>{
      console.log(res.data)
      setListTrips(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getTrips()
  },[])

  return (
    <div>

      <hi> ListTripsPage</hi>
    
      <List></List>
      

    </div>
  );
}

export default ListTripsPage;