import React from 'react';
import Home from './Paginas/Home'
import Matches from './Paginas/Matches'
import { useState, useEffect } from 'react';
import axios from "axios"
import { BASE_URL } from './Paginas/Constants/baseUrl';
import styled from 'styled-components';

const NewButtons = styled.button`
  
`

const App = () => {
  
  const [pageName, setPageName] = useState ("home")

  const getPage = ()=>{
    switch(pageName){
      case "home":
        return <Home/>
      case "matches":
        return <Matches/>
      default:
        return <Home/>
    }

  }

  const changePage = () =>{
    if (pageName === "home"){
      setPageName("matches")
    }else{
      setPageName("home")
    }
  }

  const cleanMatches =()=>{
    const URL = `${BASE_URL}/clear`
      axios.put(URL)
      .then((res)=>{
        alert("Tudo limpo")
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  
 
  return (
    <div>
    {getPage()}
    
    <NewButtons onClick={changePage}>{pageName === "home" ? "Ir para Matches" : "Ir para Home"}</NewButtons>
    <NewButtons onClick={cleanMatches}>Limpar Matches</NewButtons>
    
    </div>
  );
}

export default App;
