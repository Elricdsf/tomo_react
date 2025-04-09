import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    /* html{
        &::-webkit-scrollbar{
            width:0.6rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color:darkgrey;
        }
        &::-webkit-scrollbar-track{
            background: white;
        }
    } */
    html,body{
        margin:0;
        padding:0;
        overflow-x: hidden;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width:100%；
    }
    h2{
        font-size: 3rem;
        font-family:'Abril Fatface', cursive;
        font-weight:lighter;
        color:#FFA46F;
    }
    h3{
        font-size:1.3rem;
        color:#FFA46F;
        padding:0.2rem 0rem 0.5rem 0rem;
    }
    p{
        font-size:1.2rem;
        line-height:200%;
        color:#696969;
    }
    img{
        display:block;
    }
    input{
        font-weight:bold;
        font-family:"Montserrat", sans-serif
    }
    a{
        text-decoration:none;
        color:inherit
    }
    
`;

export default GlobalStyles;
