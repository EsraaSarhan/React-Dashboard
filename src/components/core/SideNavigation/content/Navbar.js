import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faAddressBook, faUser, faBell, faSearch, faList } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink ,InputGroup, InputGroupAddon, Input} from 'reactstrap';


class NavBar extends Component {

  constructor(props) {
    super(props);

   this.toggle = this.toggle.bind(this);
   this.state = {
     isOpen: false
   };
 }

 toggle() {
   this.setState({
     isOpen: !this.state.isOpen  // navbar collapse
   });
 }

  render(){
    return (
      <Navbar light className="navbar navbar-expand-lg navbar-transparent navbar-absolute" expand="md">
        <Button onClick={this.props.toggle} className="d-lg-none d-md-none">
          <FontAwesomeIcon icon={faAlignLeft}/>
        </Button>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
         <Nav className="ml-auto" navbar>
         <InputGroup className="search-container">
              <Input placeholder="search" className=""/>
              <InputGroupAddon addonType="append">
                <Button className="search-btn p-0 m-2"><FontAwesomeIcon icon={faSearch} className=""/></Button>
              </InputGroupAddon>
            </InputGroup>
           <NavItem>
             <NavLink href="#"><FontAwesomeIcon icon={faList}/></NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="#"><FontAwesomeIcon icon={faBell}/></NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="#"><FontAwesomeIcon icon={faUser}/></NavLink>
           </NavItem>
          
        </Nav>
       </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
