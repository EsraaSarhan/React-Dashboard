import React, { Component } from 'react';
import SideBar from './sidebar/SideBar';
import Content from './content/Content';

class SideNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    }
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div className="main-content  wrapper">
        <SideBar toggle={this.toggle} isOpen={this.state.isOpen}/>
        <Content toggle={this.toggle} isOpen={this.state.isOpen}/>
      </div>
    );
  }
}

export default SideNavigation;