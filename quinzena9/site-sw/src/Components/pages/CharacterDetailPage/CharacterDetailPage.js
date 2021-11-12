import { useState, useEffect } from "react/cjs/react.development";
import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/baseUrl";



const CharacterDetailPage = (props) =>{
  const [details, setDetails] = useState("")

  const getCharacterDetail =()=>{
    const URL= `${BASE_URL}people`

      axios.get(URL)
      .then((res)=>{
        console.log(res.data.results)
        setDetails(res.data.results)
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
          {details && details.map((detail)=>{
            return (<li>{detail.name}</li>)
          })}
        </div>
        <button onClick={()=> props.goToListPage()}>Voltar para página inicial</button>
    </div>
  );
}

export default CharacterDetailPage;