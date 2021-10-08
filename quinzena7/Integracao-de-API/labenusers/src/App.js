
import React from 'react';
import './App.css';
import Pagina1 from './Components/Pagina1'
import Pagina2 from './Components/Pagina2';

export default class App extends React.Component {
  state ={
    pagina: 1,
     
  }

  renderizacaoDePaginas = ()=>{
    switch(this.state.pagina){
      case 1:
        return <Pagina1/>
          case 2:
            return <Pagina2/>
              default:
                return
    }
  }
  proximaPagina = ()=>{
    this.setState({pagina: this.state.pagina + 1})
  }
  render(){
    
    return (
      <div className = "App">
        {this.renderizacaoDePaginas()}
        {this.state.pagina !== 3 && 
        (<button onClick={this.proximaPagina}>Trocar de página</button>)}
        
      </div>
    );
  }
  
}


