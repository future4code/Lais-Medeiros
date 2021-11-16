import axios from "axios";
import React, { useEffect, useState } from "react";
import { Lists,Name,ListConteiner } from "./styled";
import { BASE_URL } from "../../constants/baseUrl";



const CharacterListPage = (props) =>{
    const [charecterList, setCharecterList] = useState("")

    const getCharacterList =()=>{
        const URL = `${BASE_URL}people`

        axios.get(URL)
        .then((res)=>{
            setCharecterList(res.data.results)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    
    useEffect(()=>{
        getCharacterList()

    },[])

   
  return (   
    <div>
        <Name>Lista de Personagens</Name>
        <ListConteiner>
            {charecterList && charecterList.map((list)=>{
                return(<Lists  onClick={()=>props.goToDetailsPage(list.url)}>{list.name}</Lists>)
            })}
        </ListConteiner> 
  </div>
  );
}

export default CharacterListPage;