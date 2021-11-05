import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../constants/baseUrl";

const CharacterListPage = () =>{
    const [characterlist, setCharacterList] = useState ({})

const getCharacterList = () =>{
    const URL = `${BASE_URL}/people `

    axios.get(URL)
    .then((res) =>{
        console.log(res.data.characterlist)
    })
    .catch((err)=>{
        console.log(err)
    })
    
}


  return (
    <div>
       
        <h1>Lista de Personagem</h1>
    </div>
  );
}

export default CharacterListPage;