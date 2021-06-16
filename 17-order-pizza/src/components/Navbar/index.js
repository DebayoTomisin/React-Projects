import React from "react"
import { Nav, NavIcon, NavLink, Bars } from "./NavbarElements"

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavLink to='/'>Pizza</NavLink>
            <NavIcon>
                <p>Menu</p>
                <Bars onClick= {toggle}/>
            </NavIcon>
        </Nav>
            
        </>
    )
}

export default Navbar;
