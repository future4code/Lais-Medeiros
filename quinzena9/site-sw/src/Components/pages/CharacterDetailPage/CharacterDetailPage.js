import { useState, useEffect } from "react/cjs/react.development";
import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/baseUrl";



const CharacterDetailPage = (props) =>{
  const [details, setDetails] = useState("")

  const getCharacterDetail =()=>{
      axios.get()
      .then((res)=>{
        console.log()
        setDetails()
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  
    useEffect(()=>{
      getCharacterDetail()
    },[])


  return (
    <div>
        
        <h1>Detalhes de Personagem</h1>
        
        <div>
          
        </div>
        <button onClick={()=> props.goToListPage()}>Voltar para página inicial</button>
    </div>
  );
}

export default CharacterDetailPage;