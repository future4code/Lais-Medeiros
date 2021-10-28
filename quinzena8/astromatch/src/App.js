import React from 'react';
import Home from './Paginas/Home'
import Matches from './Paginas/Matches'
import { useState } from 'react';
import axios from "axios"




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

  //const cleanMatches =()=>{}

  
 
  return (
    <div>
    {getPage()}
    <button onClick={changePage}>{pageName === "home" ? "Ir para Matches" : "Ir para Home"}</button>
    <button>Limpar Matches</button>
    
    </div>
  );
}

export default App;
