import React, {useState, useEffect}from "react"
import {PageConteiner,CandidateConteiner,ListItem} from "./styles"
import axios from "axios"
import { BASE_URL } from "../Constants/baseUrl"




export const Matches =()=>{
    const [matchesList, setMetchesList] = useState([])

    const getMatchesList = ()=>{
        const URL=`${BASE_URL}/matches`
        axios.get(URL)
        .then((res)=>{
            setMetchesList(res.data.matches)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    const MapMaches = ()=>{
        const newList = matchesList.map((mat)=>{
            return (<ListItem> 
            <img src={mat.photo}/>
            <h3>{mat.name}</h3>
            </ListItem>)
            
        })
        return newList
    }
   
    useEffect(()=>{
        getMatchesList()
    },[MapMaches])
        
    return(
        <PageConteiner>
           <CandidateConteiner>
            {<MapMaches/>}
                
            </CandidateConteiner> 
         </PageConteiner>
    )
}

export default Matches