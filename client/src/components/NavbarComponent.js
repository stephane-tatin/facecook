import React, {Component} from 'react';
import { Nav, NavbarBrand, Navbar, NavItem, NavLink } from 'reactstrap';

class NavbarComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar color="secondary">
                    <NavbarBrand>FaceCook</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink>
                                Recipes
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
             
         );
    }
}
 
export default NavbarComponent;