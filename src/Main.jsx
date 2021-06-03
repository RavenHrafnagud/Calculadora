import React from 'react';
import { Contenedor, Formula, Pantalla, Resultado, Teclado, Botones } from './Styles/style';
import useCalcular from './hooks/useCalcular';


function Main() {

    const { calcular } = useCalcular();

    return (
        <Contenedor>
            <Pantalla>
                <Formula id="formula"></Formula>
                <Resultado id="display">0</Resultado>
            </Pantalla>
            <Teclado>
                <Botones limpiador value="ac" id="clear" onClick={calcular}>AC</Botones>
                <Botones dividir value="/" id="divide" onClick={calcular}>/</Botones>
                <Botones multiplo value="*" id="multiply" onClick={calcular}>X</Botones>
                <Botones siete value="7" id="seven" onClick={calcular}>7</Botones>
                <Botones ocho value="8" id="eight" onClick={calcular}>8</Botones>
                <Botones nueve value="9" id="nine" onClick={calcular}>9</Botones>
                <Botones resta value="-" id="subtract" onClick={calcular}>-</Botones>
                <Botones cuatro value="4" id="four" onClick={calcular}>4</Botones>
                <Botones cinco value="5" id="five" onClick={calcular}>5</Botones>
                <Botones seis value="6" id="six" onClick={calcular}>6</Botones>
                <Botones suma value="+" id="add" onClick={calcular}>+</Botones>
                <Botones uno value="1" id="one" onClick={calcular}>1</Botones>
                <Botones dos value="2" id="two" onClick={calcular}>2</Botones>
                <Botones tres value="3" id="three" onClick={calcular}>3</Botones>
                <Botones igualdad value="=" id="equals" onClick={calcular}>=</Botones>
                <Botones cero value="0" id="zero" onClick={calcular}>0</Botones>
                <Botones decimal value="." id="decimal" onClick={calcular}>.</Botones>
            </Teclado>
        </Contenedor>
    )
}

export default Main
