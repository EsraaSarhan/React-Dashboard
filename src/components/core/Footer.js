import React, { Component } from 'react';

class Footer extends Component {
  render() {

    return (
      <React.Fragment>
       <footer>
       <ul>
            <li><a>Home</a></li>
            <li><a>Company</a></li>
            <li><a>Portoflio</a></li>
            <li><a>Blog</a></li>
        </ul>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>  
       </footer>
      </React.Fragment>
    );
  }
}



export default Footer;
