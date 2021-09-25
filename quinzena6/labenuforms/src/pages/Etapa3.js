import React from 'react'




class Etapa3 extends React.Component{
    render(){
        return(
            <div className = "Etapa3">
                <h1>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <div>
                    <h3> 5. Por que você não terminou um curso de graduação?</h3>
                    <input></input>
                </div>
                <div>
                    <h3>6. Você fez algum curso  complementar?</h3>
                    <select>
                        <option>Nenhum</option>
                        <option>Curso técnico</option>
                        <option>Curso de inglês</option>
                    </select>
                </div>
            </div>
        )

    }
    
}

export default Etapa3