import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell} from '@fortawesome/free-solid-svg-icons';

class Header extends Component {

  render() {
    return (
      <React.Fragment>
        <header className="row panel-header">
          <div className="col-md-6">
            <h1 className="page-title">Material Dashboard</h1>
          </div>

          <div className="col-md-2 col-md-offset-2">
            <InputGroup>
              <Input placeholder="search" />
              <InputGroupAddon addonType="append">
                <Button className="search-btn"><FontAwesomeIcon icon={faSearch} className=""/></Button>
              </InputGroupAddon>
            </InputGroup>

            <span></span>
          </div>

          <div className="col-md-2">

          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
