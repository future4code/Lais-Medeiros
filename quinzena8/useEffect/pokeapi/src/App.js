
import React,{useState, useEffect} from "react" 
import axios from "axios"
import './App.css';

export const App = ()=> {
  const [pokeList, setPokeList] = useState ([])
  const [pokeName, setPokeName] = useState ("")

  useEffect(()=>{
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((res)=>{
      setPokeList (res.data.results)
    })
    .catch(err=>{
      console.log(err)
    })
  })
  const pokeNames = (event) =>{
    setPokeName(event.target.valeu)
  }
  return (
    <div className="App">
      <select onChange={pokeNames}/>
    </div>
  );
}

export default App;
