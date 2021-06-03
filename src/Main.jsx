import React, { useEffect, useState } from 'react'
import { Contenedor, Formula, Pantalla, Resultado, Teclado, Botones } from './Styles/style'

// var mostrar = "";
// var guardar = 0;
// var pantalla = 0;

var temporal = "";
var operador="";
var almacen = "";
var calculo = 0;

function Main() {

    const [valor, setValor] = useState("0");
    // const [cero, setCero] = useState();
    // const [uno, setUno] = useState();
    // const [dos, setDos] = useState();
    // const [tres, setTres] = useState();
    // const [cuatro, setCuatro] = useState();
    // const [cinco, setCinco] = useState();
    // const [seis, setSeis] = useState();
    // const [siete, setSiete] = useState();
    // const [ocho, setOcho] = useState();
    // const [nueve, setNueve] = useState();
    // const [Ac, setAc] = useState();
    // const [suma, setSuma] = useState();
    // const [resta, setResta] = useState();
    // const [multiplicacion, setMultiplicacion] = useState();
    // const [division, setDivision] = useState();
    // const [igualdad, setIgualdad] = useState();
    // const [decimales, setDecimales] = useState();
    // const [temporal, setTemporal] = useState("");
    // const [almacen, setAlmacen] = useState("");
    // const [calculo, setCalculo] = useState(0);


    // Clicks
    // const clear = (t) => { setValor(t.target.value); };
    // const add = (t) => { setValor(t.target.value); };
    // const subtract = (t) => { setValor(t.target.value); };
    // const multiply = (t) => { setValor(t.target.value); };
    // const divide = (t) => { setValor(t.target.value); };
    // const decimal = (t) => { setValor(t.target.value); };
    // const equals = (t) => { setValor(t.target.value); };
    // const zero = (t) => { setValor(t.target.value); };
    // const one = (t) => { setValor(t.target.value); 
    //     if(temporal===""){
    //         temporal=valor
    //     }else{
    //         temporal=temporal+valor;
    //     }
    //     console.log(temporal);
    //     document.getElementById("display").innerHTML = valor;
    // };
    // const two = (t) => { setValor(t.target.value); };
    // const three = (t) => { setValor(t.target.value); };
    // const four = (t) => { setValor(t.target.value); };
    // const five = (t) => { setValor(t.target.value); };
    // const six = (t) => { setValor(t.target.value); };
    // const seven = (t) => { setValor(t.target.value); };
    // const eight = (t) => { setValor(t.target.value); };
    // const nine = (t) => { setValor(t.target.value); };

    // eventos

    // useEffect(() => {
    //     console.log(valor);
    //     temporal=temporal+valor;
    //     document.getElementById("display").innerHTML = temporal;
    //     // document.getElementById("formula").innerHTML = mostrar;
    // });


    // return (
    //     <Contenedor>
    //         <Pantalla>
    //             <Formula id="formula"></Formula>
    //             <Resultado id="display">0</Resultado>
    //         </Pantalla>
    //         <Teclado>
    //             <Botones limpiador value="ac" id="clear" onClick={clear}>AC</Botones>
    //             <Botones dividir value="/" id="divide" onClick={divide}>/</Botones>
    //             <Botones multiplo value="*" id="multiply" onClick={multiply}>X</Botones>
    //             <Botones siete value="7" id="seven" onClick={seven}>7</Botones>
    //             <Botones ocho value="8" id="eight" onClick={eight}>8</Botones>
    //             <Botones nueve value="9" id="nine" onClick={nine}>9</Botones>
    //             <Botones resta value="-" id="subtract" onClick={subtract}>-</Botones>
    //             <Botones cuatro value="4" id="four" onClick={four}>4</Botones>
    //             <Botones cinco value="5" id="five" onClick={five}>5</Botones>
    //             <Botones seis value="6" id="six" onClick={six}>6</Botones>
    //             <Botones suma value="+" id="add" onClick={add}>+</Botones>
    //             <Botones uno value="1" id="one" onClick={one}>1</Botones>
    //             <Botones dos value="2" id="two" onClick={two}>2</Botones>
    //             <Botones tres value="3" id="three" onClick={three}>3</Botones>
    //             <Botones igualdad value="=" id="equals" onClick={equals}>=</Botones>
    //             <Botones cero value="0" id="zero" onClick={zero}>0</Botones>
    //             <Botones decimal value="." id="decimal" onClick={decimal}>.</Botones>
    //         </Teclado>
    //     </Contenedor>
    // )



    useEffect(() => {
        if (temporal === "") {
            console.log("valor: " + valor);
            document.getElementById("display").innerHTML = valor;
        }
        // else {
        //     // if(mostrar===""){
        //     //     document.getElementById("display").innerHTML = pantalla;
        //     // }else{
        //     //     document.getElementById("display").innerHTML = mostrar;
        //     // }
        //     //  document.getElementById("display").innerHTML = mostrar;
        // }
    });

    const calcular = (c) => {
        // setValor(c.target.value);

        // if (c.target.value === "ac") {
        //     guardar = 0;
        //     mostrar = "";
        //     pantalla = 0;
        //     document.getElementById("display").innerHTML = guardar;
        //     document.getElementById("formula").innerHTML = mostrar;
        // }
        // else if (c.target.value === "=") {
        //     console.log("guardar" + eval(guardar));
        //     pantalla = eval(guardar);
        //     document.getElementById("display").innerHTML = pantalla;
        //     guardar = 0;
        //     mostrar = "";
        // } else if (mostrar.length < 34) {
        //     console.log("tamaño:" + mostrar.length);
        //     if (mostrar.length === 1 && mostrar === "0" && c.target.value !== "." || mostrar.length === 1 && mostrar === "/" || mostrar.length === 1 && mostrar === "*") {
        //         mostrar = c.target.value;
        //         guardar = mostrar;
        //         document.getElementById("display").innerHTML = c.target.value;
        //         document.getElementById("formula").innerHTML = guardar;
        //     } else {
        //         if (pantalla !== 0) {
        //             mostrar = pantalla;
        //             pantalla = 0;
        //         }

        if (calculo !== 0) {
            temporal = calculo.toString();
            console.log("temporal de calculo: " + temporal);
            calculo = 0;
        }

        if(operador==="/" && c.target.value === "-" || operador==="*" && c.target.value === "-" || operador==="+" && c.target.value === "-"){
            temporal=operador;
            operador=c.target.value;
            console.log("temporal con operador: "+temporal);
            console.log("operador con target: "+operador);

        }else if(operador==="-" && c.target.value==="/" || operador==="-" && c.target.value==="*" || operador==="-" && c.target.value==="+"){
            operador=c.target.value;
            temporal=""
            console.log("operador: "+operador);
        }

        if (c.target.value === "ac") {
            calculo = 0;
            almacen = "";
            temporal = "";
            operador="";
            document.getElementById("display").innerHTML = valor;
            document.getElementById("formula").innerHTML = almacen;
            console.log("---------------------");

        } else if (c.target.value === "=") {
            almacen = almacen + temporal
            calculo = eval(almacen);
            console.log("calculo: " + calculo);
            document.getElementById("formula").innerHTML = almacen;
            document.getElementById("display").innerHTML = calculo;
            almacen = "";
            temporal = "";
            operador="";

        } else if (temporal.length === 0 && c.target.value === "/" || temporal.length === 0 && c.target.value === "*") {
            document.getElementById("display").innerHTML = c.target.value;
            document.getElementById("formula").innerHTML = almacen;

        } else if (c.target.value === "+" || c.target.value === "-" || c.target.value === "*" || c.target.value === "/") {
            if(temporal !== "/"){
                if(temporal !== "*"){
                    if(temporal !== "-"){
                        if(temporal !== "+"){
                            operador=c.target.value;
                            almacen = almacen + temporal
                            temporal = ""
                            // almacen = almacen + c.target.value;
                            console.log("almacen: " + almacen);
                            console.log("operador: "+operador);
                            document.getElementById("formula").innerHTML = almacen+operador;
                            document.getElementById("display").innerHTML = c.target.value;
                        }
                    }
                }     
            }

        } else if (temporal.length < 24) {
            console.log("tamaño:" + temporal.length);

            if (temporal.length === 1 && temporal === "0" && c.target.value !== ".") {
                temporal = c.target.value;
                document.getElementById("display").innerHTML = temporal;

            } else if (temporal.includes(".") && c.target.value === ".") {

            } else {
                temporal=temporal+operador + c.target.value;
                operador="";
                // temporal = temporal + c.target.value;
                console.log("temporal: " + temporal);

                document.getElementById("display").innerHTML = temporal;
                document.getElementById("formula").innerHTML = almacen;
            }
        }
        // temporal = temporal + c.target.value;
        // console.log("temporal" + temporal);
        // guardar = temporal;
        // document.getElementById("display").innerHTML = temporal;
        // document.getElementById("formula").innerHTML = almacen;
        //     }
        // }
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
