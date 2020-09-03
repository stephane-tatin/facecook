import React, {Component, Fragment} from 'react';
import { Nav, NavbarBrand, Navbar, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom"

class NavbarComponent extends Component {

    
    render() { 
        return ( 
            <div>
                <Navbar color="secondary">
                    <NavbarBrand>FaceCook</NavbarBrand>
                    <Nav>
                 
                        <NavItem>
                            <NavLink to="/api/recipes">
                                Recipes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/api/addrecipe">
                                Add a delicious Recipes
                            </NavLink>
                        </NavItem>
                   
                    </Nav>
                </Navbar>
            </div>
             
         );
    }
}
 
export default NavbarComponent;