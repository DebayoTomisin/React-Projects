import styled from 'styled-components'
import { NavLink as Link } from "react-router-dom"
import {FaPizzaSlice} from "react-icons/fa"

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration:none;

    cursor: pointer;

    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;
    }
`

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-wieght: bold;
        &:hover {
            transition: 0.5s ease-in-ease-out;
            cursor: pointer;
            color: #ffc500;;
        }   
    }
    &:hover {
        transition: 0.5s ease-in-ease-out;
        cursor: pointer;
        color: #ffc500;;
    }
`

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform : translate(-50%, -15%);
`