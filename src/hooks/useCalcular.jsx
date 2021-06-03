import { useEffect, useState } from 'react'

var temporal = "";
var operador = "";
var almacen = "";
var calculo = 0;

export default function useCalcular() {

    const [valor, setValor] = useState("0");

    useEffect(() => {
        if (temporal === "") {
            document.getElementById("display").innerHTML = valor;
        }
    });

    const calcular = (c) => {

        if (calculo !== 0) {
            temporal = calculo.toString();
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

    return { calcular }
}
