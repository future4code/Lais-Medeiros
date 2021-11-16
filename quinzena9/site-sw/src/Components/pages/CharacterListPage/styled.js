import styled from "styled-components";

export const Name = styled.div`
    margin: 10px;
    text-align: center;
    text-decoration: underline;
    text-shadow: 1px 1px 5px wheat;
    font-size: 50px;
    display: flex;
    justify-content: center;
    color:#1C0E06;
    
`
export const ListConteiner=styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 600px;
    align-items: center;
    height: 500px;
    color:#1C0E06;
`


export const Lists = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    border: 1px solid black;
    border-radius: 12px;
    width: 350px;
    height: 40px;
    margin: 5px;
    &:hover {
        cursor: pointer;
        background-color:#A16E48;
    }
    font-size: 30px;
    
`