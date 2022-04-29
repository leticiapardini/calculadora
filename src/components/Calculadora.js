import { Container,Box } from '@mui/material';
//import { color } from '@mui/system';
import React, { useState } from 'react';
import { ContainerButton, Result, StyledButton, Title } from './styles';
import * as math from "mathjs";
import { CalculatorOutlined } from '@ant-design/icons';




const Calculadora = () => {

    const [number, setNumber] = useState(0);

    const inputNumber = (e) => {
       let input =e.target.value;

       if(number === 0){
           setNumber(input)
       } else{
        setNumber(number + input)
       }
    }
    const clear = () => {
        setNumber(0)
    }
    const porcentage = () => {
        setNumber(number / 100)
    }
        
    const operatorHandle = () => {

       if(number > 0) {
        setNumber(-number)
       } else{
           setNumber(Math.abs(number))
       }
    }
    const finishCalculate = () => {

        setNumber(math.evaluate(number))
        
    }
    
    return (
        <div>
            <Box m={5} />
            <Container maxWidth='xs'>
                <Title> CALCULATE<CalculatorOutlined/></Title>
                <ContainerButton>
                    <Box m={9} />
                    <Result>{number}</Result>
                    <StyledButton colorSecund onClick={clear}>AC</StyledButton>
                    <StyledButton colorSecund onClick={operatorHandle} value={"+/-"}>+/-</StyledButton>
                    <StyledButton colorSecund onClick={porcentage}>%</StyledButton>
                    <StyledButton color onClick={inputNumber} value={"/"}>/</StyledButton>
                    <StyledButton onClick={inputNumber} value={7}>7</StyledButton>
                    <StyledButton onClick={inputNumber} value={8}>8</StyledButton>
                    <StyledButton onClick={inputNumber} value={9}>9</StyledButton>
                    <StyledButton onClick={inputNumber} value={"*"} color>X</StyledButton>
                    <StyledButton onClick={inputNumber} value={4}>4</StyledButton>
                    <StyledButton onClick={inputNumber} value={5}>5</StyledButton>
                    <StyledButton onClick={inputNumber} value={6}>6</StyledButton>
                    <StyledButton onClick={inputNumber} value={"-"} color>-</StyledButton>
                    <StyledButton onClick={inputNumber} value={1}>1</StyledButton>
                    <StyledButton onClick={inputNumber} value={2}>2</StyledButton>
                    <StyledButton onClick={inputNumber} value={3}>3</StyledButton>
                    <StyledButton onClick={inputNumber} value={"+"} color>+</StyledButton>
                    <StyledButton onClick={inputNumber} value={0}>0</StyledButton>
                    <StyledButton onClick={inputNumber} value={"."}>,</StyledButton>
                    <StyledButton onClick={inputNumber} value={''} visible>,</StyledButton>
                    <StyledButton onClick={finishCalculate} value={"="} color>=</StyledButton>
                </ContainerButton>
            </Container>
        </div>
    )
}

export default Calculadora


