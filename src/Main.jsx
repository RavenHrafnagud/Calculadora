import React, { useEffect, useState } from 'react'
import { Contenedor, Formula, Pantalla, Resultado, Teclado, Botones } from './Styles/style'

var temporal = "";
var operador = "";
var almacen = "";
var calculo = 0;

function Main() {

    const [valor, setValor] = useState("0");

    useEffect(() => {
        if (temporal === "") {
            console.log("valor: " + valor);
            document.getElementById("display").innerHTML = valor;
        }
    });

    const calcular = (c) => {

        if (calculo !== 0) {
            temporal = calculo.toString();
            console.log("temporal de calculo: " + temporal);
            calculo = 0;
        }

        if (operador === "/" && c.target.value === "-" || operador === "*" && c.target.value === "-" || operador === "+" && c.target.value === "-") {
            temporal = operador;
            operador = c.target.value;

        } else if (operador === "-" && c.target.value === "/" || operador === "-" && c.target.value === "*" || operador === "-" && c.target.value === "+") {
            operador = c.target.value;
            temporal = ""
        }

        if (c.target.value === "ac") {
            calculo = 0;
            almacen = "";
            temporal = "";
            operador = "";
            document.getElementById("display").innerHTML = valor;
            document.getElementById("formula").innerHTML = almacen;

        } else if (c.target.value === "=") {
            almacen = almacen + temporal
            calculo = eval(almacen);
            document.getElementById("formula").innerHTML = almacen;
            document.getElementById("display").innerHTML = calculo;
            almacen = "";
            temporal = "";
            operador = "";

        } else if (temporal.length === 0 && c.target.value === "/" || temporal.length === 0 && c.target.value === "*") {
            document.getElementById("display").innerHTML = c.target.value;
            document.getElementById("formula").innerHTML = almacen;

        } else if (c.target.value === "+" || c.target.value === "-" || c.target.value === "*" || c.target.value === "/") {
            if (temporal !== "/") {
                if (temporal !== "*") {
                    if (temporal !== "-") {
                        if (temporal !== "+") {
                            operador = c.target.value;
                            almacen = almacen + temporal
                            temporal = ""
                            document.getElementById("formula").innerHTML = almacen + operador;
                            document.getElementById("display").innerHTML = c.target.value;
                        }
                    }
                }
            }

        } else if (temporal.length < 24) {

            if (temporal.length === 1 && temporal === "0" && c.target.value !== ".") {
                temporal = c.target.value;
                document.getElementById("display").innerHTML = temporal;

            } else if (temporal.includes(".") && c.target.value === ".") {

            } else {
                temporal = temporal + operador + c.target.value;
                operador = "";
                document.getElementById("display").innerHTML = temporal;
                document.getElementById("formula").innerHTML = almacen;
            }
        }
    };

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
