import axios from "axios";
import react, { useEffect } from "react";
import { BASE_URL } from "../../constants/baseUrl";

const ListTripsPage= () => {
  const [ listTrips, setListTrips] = ("")

  const getTrips = ()=>{
    const URL = `${BASE_URL}trips`

    axios(URL)
    .then((res)=>{
      console.log(res.data.trips)
      setListTrips(res.data.trips)
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
      <div>
      {listTrips && listTrips.map((list)=>{
          
      })}
      </div>
      

    </div>
  );
}

export default ListTripsPage;