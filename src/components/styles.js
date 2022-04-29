import styled from "styled-components";

export const StyledButton = styled.button`
    width: 3em;
    height: 3em;
    font-size: 1.5em;
    border: none;
    border-radius: 2em;
    margin: 0.3em;
    background: #505050;
    color: white;

    &:hover{
        cursor:pointer;
    }

    ${({color})=> color &&`
        background: #FF9500;
        color: white;
  
  `}
  ${({colorSecund})=> colorSecund &&`
  background: white;
  color: black;

`}
${({visible})=> visible &&`
background: #1C1C1C;
color: #1C1C1C;

`}
`

export const ContainerButton = styled.div`
    background:#1C1C1C;
    border-radius: 1em;
    padding:1em;
    text-align: center;

`

export const Result = styled.div`
    color: white;
    text-align: end;
    height: 80px;
    font-size: 35px;
    align-items: center;
    margin-right: 1.5em;
`
export const Title = styled.h2`
    text-align: center;
    font-size: 30px;
    letter-spacing: 5px;
    background: #A9A9A9;
    border-radius: 6px;
    box-shadow: -2px -2px 5px #a9a9a9, 2px 2px 5px #a9a9a9;

    
`
