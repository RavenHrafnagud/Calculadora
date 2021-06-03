import styled, { createGlobalStyle, css } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        font-size: 62.5%;
    }

    body{
        background-color:bisque;
    }
`;

export const Contenedor = styled.main`

    @import 'https://fonts.googleapis.com/css?family=Share+Tech+Mono';
    @font-face {
        font-family: 'Digital';
        src: url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot');
        src: url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot?#iefix')
        format('embedded-opentype'),
        url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff2')
        format('woff2'),
        url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff')
        format('woff'),
        url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.ttf')
        format('truetype'),
        url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.svg#Digital-7')
        format('svg');
    }


    background-color:black;
    display:flex;
    flex-wrap:wrap;
    margin:auto;
    margin-top:10%;
    width:32rem;
    border: 0.2rem;
    border-color:#47476b;
    border-style:solid;
`;

export const Pantalla = styled.section`
    width:31.5rem;
    margin-left:auto;
    margin-right:auto;
    height:4.9rem;
    margin-bottom:0.5rem;
`;

export const Formula = styled.div`
    width:31.5rem;
    margin-left:auto;
    margin-right:auto;
    height:2rem;
    font-family: 'Digital';
    font-size: 2rem;
    color: orange;
    text-align: right;
    vertical-align: text-top;
    line-height: 2rem;
`;

export const Resultado = styled.div`
    width:31.5rem;
    margin-left:auto;
    margin-right:auto;
    height:2.9rem;
    font-size: 2.9rem;
    font-family: 'Digital';
    color: white;
    text-align: right;
    line-height: 3.5rem;
`;

export const Teclado = styled.section`
    width:31.5rem;
    margin-left:auto;
    margin-right:auto;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
`;

export const Botones = styled.button`
    height: 6.5rem;
    /* width: 8rem; */
    background-color:#4d4d4d;
    color: white;
    outline: 0.1rem solid black;
    border: none;
    font-family: Share Tech Mono, monospace;
    font-size: 2rem;
    cursor: default;
    &:hover {
        color: black;
        outline: 0.05rem solid grey;
        z-index: 3;
    }

    ${props=>props.limpiador && css`
        background-color:red;
        grid-column:1/3;
        grid-row:1;
    `};

    ${props=>props.dividir && css`
        background-color:gray;
        grid-column:3;
        grid-row:1;
    `};

    ${props=>props.multiplo && css`
        background-color:gray;
        grid-column:4;
        grid-row:1;
    `};

    ${props=>props.siete && css`
        grid-column:1;
        grid-row:2;
    `};

    ${props=>props.ocho && css`
        grid-column:2;
        grid-row:2;
    `};

    ${props=>props.nueve && css`
        grid-column:3;
        grid-row:2;
    `};

    ${props=>props.resta && css`
        background-color:gray;
        grid-column:4;
        grid-row:2;
    `};

    ${props=>props.cuatro && css`
        grid-column:1;
        grid-row:3;
    `};

    ${props=>props.cinco && css`
        grid-column:2;
        grid-row:3;
    `};

    ${props=>props.seis && css`
        grid-column:3;
        grid-row:3;
    `};

    ${props=>props.suma && css`
        background-color:gray;
        grid-column:4;
        grid-row:3;
    `};

    ${props=>props.uno && css`
        grid-column:1;
        grid-row:4;
    `};

    ${props=>props.dos && css`
        grid-column:2;
        grid-row:4;
    `};

    ${props=>props.tres && css`
        grid-column:3;
        grid-row:4;
    `};

    ${props=>props.igualdad && css`
        height: auto;
        background-color:blue;
        grid-column:4;
        grid-row:4/6;
    `};

    ${props=>props.cero && css`
        grid-column:1/3;
        grid-row:5;
    `};

    ${props=>props.decimal && css`
        grid-column:3;
        grid-row:5;
    `};
`;