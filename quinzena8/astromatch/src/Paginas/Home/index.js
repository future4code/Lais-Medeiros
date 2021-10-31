import React, {useState, useEffect}from "react"
import {PageConteiner,CandidateConteiner,Name,CandidateImg, Descripyion,Button} from "./styles"
import axios from "axios"
import { BASE_URL } from "../Constants/baseUrl"

export const Home = () =>{
    const [profile, setProfile] = useState({})

    const getProfile = ()=>{
        const URL = `${BASE_URL}/person`

        axios.get(URL)
        .then((res)=>{
            setProfile(res.data.profile)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

   
        const chossePerson = (boolean) =>{
            const URL = `${BASE_URL}/choose-person`     
            const body = {
                "id": profile.id,
                "choice": boolean
            }       
            axios.post(URL,body)
            .then((res)=>{
                getProfile()
            })
            .catch((err)=>{
                console.log(err)
            })

        }

        useEffect(()=>{
         getProfile() 
        },[])
        
    return(
        <PageConteiner>
            
            <CandidateConteiner>
                 
                <CandidateImg src={profile.photo}/>
                <Name>{profile.name}, {profile.age}</Name>
                        <Descripyion>{profile.bio}</Descripyion>
                        <div>
                            <Button onClick={()=>chossePerson(false)} >❌</Button>
                            <Button onClick={()=>chossePerson(true)} >💚</Button>
                         </div>   
            </CandidateConteiner>
        </PageConteiner>
    )
}


export default Home