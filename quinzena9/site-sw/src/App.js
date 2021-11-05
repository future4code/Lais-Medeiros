import React, { useState } from "react";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";

 

const App = () =>{
  const [currentPage, setCurrentPage] = useState("list")

  const selectPage =()=>{
    switch (currentPage) {
      case "list":
        return <CharacterListPage/>
      case "details":
        return <CharacterDetailPage/>
      default:
        return <CharacterDetailPage/>
    }
  }


  const pageChoice = ()=>{
    if(currentPage === "list"){
      setCurrentPage("details")
    }else{
      setCurrentPage("list")
    }
  }


  return (
   <div>
      
      <h1>Star Wars</h1>
      {selectPage()}
      <button onClick={pageChoice}>{currentPage === "list" ? "Ir Para Destalhes" : "Ir Para Lista"}</button>
      
    </div>
  );
}

export default App;
