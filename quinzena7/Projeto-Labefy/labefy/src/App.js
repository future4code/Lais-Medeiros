import React from 'react'
import CriarPlayList from './components/CriarPlayList';
import VisualizarPlayList from './components/VisualizarPlayList';



export default class App extends React.Component {
  render(){
    return (
      <div >
       <CriarPlayList/>
       <VisualizarPlayList/>
      </div>
    )
  }
  
}

 
