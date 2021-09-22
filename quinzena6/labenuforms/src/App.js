import React from 'react'
import Etapa1 from "./pages/Etapa1";
import Etapa2 from './pages/Etapa2';
import Etapa3 from './pages/Etapa3';
import Final from './pages/Final';
import styled from 'styled-components';
import './App.css'




class App extends React.Component {
  state = {
    etapa:"1",
  }
  redenrizarEtapa = () =>{
    switch(this.state.etapa){
      case "1":
        return <Etapa1/>
      case "2":
        return <Etapa2/>
      case "3":
        return <Etapa3/>
      case "4":
        return <Final/>
      
    }
  }
  onClickirParaProximaEtapa = () =>{
   this.setState({etapa:"2"})
  }
  
  
  render(){
  
    
    return (
      <div className="App">

        {this.redenrizarEtapa()}
       
      <Etapa1 />
      <Etapa2/>
      <Etapa3/>
      <Final/>
      
    </div>
    
    
  );

  }
}

export default App;
