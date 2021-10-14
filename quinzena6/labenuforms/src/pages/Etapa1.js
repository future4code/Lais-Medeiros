import react from 'react'


class Etapa1 extends react.Component {

    render(){
        return(
            <div>
            <h1>ETAPA1 DADOS GERAIS</h1>
                <div>
                    <h3>1. Qual o seu Nome?</h3>
                    <input></input>
                </div>
                <div>
                    <h3>2. Qual sua idade?</h3>
                    <input></input>
                </div>    
                <div>
                    <h3>3. Qual seu e-mail?</h3>
                    <input>
            
                    </input>
                </div>
                <div>
                    <h3>4. Qual sua escolaridade?</h3>
                    <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                 <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                    </select>
                </div>
            
            </div>
                
            
        )
    }
    
}
export default Etapa1