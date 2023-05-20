//منوی بالای صفحه 
import React from 'react';
import logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: rgb(113 113 122);
height: 60px;
overflow: hidden;

img{
    width: 70px;
    border-radius: 50%;
    padding: 10px;
    transition: 0.5s;
    

    &:hover{
        opacity:0.3;
        
    }
}
`
const Ul = styled.ul`

list-style:none;
display: flex;
justify-content:right;
background-color: rgb(113 113 122);

z-index: 15;
li{
    padding:18px 30px;
    color:#fff;
    transition: 0.5s;

    &:hover{
        color:#1565df;
    }
}

@media (max-width: 768px){
   
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    margin: 0; 
    flex-direction: column;
    background-color: rgb(113 113 122);
    opacity: 0.5;
    position:fixed;
    top: 0;
    right: 0;
    height:100vh;
    width:300px;
    padding-top:3.5rem;
    transition:  0.5s;
    li{
        color:#fff;
    }
   
}



`
const Navbar = ({open}) => {
    return (    
        <Div >
            <div>
            <Link to="/"> 
                <img src={logo}  alt="logo"/>
                </Link>
            </div>
            <div>
            <Ul open={open} >
                <li>
                    <Link to="/Homepage">Home </Link>
                </li>
                <li>
                    <Link to="/Dashboard">Dashboard </Link>
                </li>
                <li>
                    <Link to="/Aboutus">Aboutus </Link>
                </li>  
            </Ul>
            </div>       
        </Div>
    );
};

export default Navbar;