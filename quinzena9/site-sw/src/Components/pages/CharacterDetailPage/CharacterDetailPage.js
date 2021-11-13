import { useState, useEffect } from "react/cjs/react.development";
import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/baseUrl";



const CharacterDetailPage = (props) =>{
  const [details, setDetails] = useState("")
  const [planet, setPlanet]= useState("")

  const getCharacterDetail =()=>{

      axios.get(props.url)
      .then((res)=>{
        console.log(res.data)
        setDetails(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }


    const getPlanetDetails =()=>{
      const URL = `https://swapi.dev/api/planets/1/`

      axios.get(URL)
      .then((res)=>{
        console.log(res.data)
        setPlanet(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }

   
 
    useEffect(()=>{
      getCharacterDetail()
      getPlanetDetails()
    },[planet.name])


  return (
    <div>
        
        <h1>Detalhes de Personagem</h1>
        
        <div>
             <p>Altura: {details.height}</p>
             <p>Ano de Nascimento: {details.birth_year}</p>
             <p>Criado: {details.created}</p>
             <p>Planeta Natal:{planet.name}</p>   
        </div>
              
        <button onClick={()=> props.goToListPage()}>Voltar para página inicial</button>
    </div>
  );
}

export default CharacterDetailPage;