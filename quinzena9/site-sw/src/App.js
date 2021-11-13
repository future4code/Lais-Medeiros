import React, { useState } from "react";
import CharacterDetailPage from "./Components/pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./Components/pages/CharacterListPage/CharacterListPage";


const App = () =>{
  const [currentPage, setCurrentPage] = useState("list")
  const [detailUrl, setDetailsUrl] = useState("")

  const selectPage =()=>{
    switch (currentPage) {
      case "list":
        return <CharacterListPage goToDetailsPage={goToDetailsPage}/>
      case "details":
        return <CharacterDetailPage goToListPage={goToDetailsPage} url={detailUrl}/>
      default:
        return <CharacterDetailPage goToListPage={goToDetailsPage}/>
       
    }
  }


  const goToDetailsPage= (url)=>{
    if(currentPage === "list"){
      setCurrentPage("details")
      setDetailsUrl(url)
    }else{
      setCurrentPage("list")
    }
  }

  

  return (
   <div>
      
      <h1>Star Wars</h1>
      {selectPage()}
      
    </div>
  );
}

export default App;
