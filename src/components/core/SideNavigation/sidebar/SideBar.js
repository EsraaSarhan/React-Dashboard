import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faPaperPlane, faQuestion, faImage, faCopy, faUser, faTablet, faTrophy, faMap, faBell, faMapMarkedAlt, faList } from '@fortawesome/free-solid-svg-icons';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';

class SideBar extends Component {
  render() {

    return (
        <React.Fragment>
            <div className={classNames('sidebar', {'is-open': this.props.isOpen})}>
        <div className="sidebar-header">
          <h3>CREATIVE TIM</h3>
        </div>
          <Nav vertical className="list-unstyled pb-3">
         
            <NavItem className="active">
              <NavLink href="#"><FontAwesomeIcon icon={faList} className="mr-3"/>Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesomeIcon icon={faUser} className="mr-3"/>User Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesomeIcon icon={faTablet} className="mr-3"/>Table List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesomeIcon icon={faTrophy} className="mr-3"/>Typography</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesomeIcon icon={faTrophy} className="mr-3"/>Icons</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesomeIcon icon={faMapMarkedAlt} className="mr-3"/>Maps</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesomeIcon icon={faBell} className="mr-3"/>Notification</NavLink>
            </NavItem>
          </Nav>
          <div className="sidebar-bg"></div>
      </div>
        </React.Fragment>
    );
  }
}



export default SideBar;

