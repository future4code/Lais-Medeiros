import { useState, useEffect } from "react/cjs/react.development";
import React from "react";
import axios from "axios";
import { Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Box} from "@chakra-ui/react"
import { DetailsConteiner, Button, Personagem, DetalhesPersonagem, DetalhePlaneta,Planet } from "./styles";


const CharacterDetailPage = (props) =>{
  const [details, setDetails] = useState("")
  const [planet, setPlanet]= useState("")
  
  const getCharacterDetail =()=>{

      axios.get(props.url)
      .then((res)=>{
        setDetails(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

    const getPlanetDetails = async()=>{
      try{
        const response = await axios.get(details.homeworld)
        setPlanet(response.data)
        
      }catch(error){
        console.log(error.response)
      }
    }

    useEffect(()=>{
      getCharacterDetail()
    },[])
    
  
    useEffect(()=>{
      getPlanetDetails()
    },[details])
   

  return (
  <DetailsConteiner>        
    <Personagem>Detalhes de Personagem</Personagem>

      <DetalhesPersonagem>
        <li>Nome: {details.name}</li> 
        <li>Ano de Nascimento:{details.birth_year}</li>
      </DetalhesPersonagem>

        <DetalhePlaneta>
          <Accordion allowToggle>
            <AccordionItem>
              <h3>
                <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Planet>Planeta Natal:</Planet>
                  </Box>
                  <AccordionIcon/>
                  </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                  <h3>Planeta: {planet.name}</h3>
                  <h3>Clima : {planet.climate}</h3>
                  <h3>População: {planet.population}</h3>
                  <h3>Terreno: {planet.terrain}</h3>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </DetalhePlaneta>

          <Button onClick={()=> props.goToListPage()}>Voltar para página inicial</Button>
    </DetailsConteiner>
  );
}

export default CharacterDetailPage;