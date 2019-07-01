import React, { Component } from "react";
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import Footer from './../../Footer';
import CardContainer from './../../Cards/Cards';
import CardChartContainer from './../../Cards/CardChart';
import CardTableContainer from './../../Cards/CardTable';
import { library } from '@fortawesome/fontawesome-svg-core';


let cards = [
  {'id':0,
  'title': 'used space', 
    'icon': 'faCopy', 
    'number': 49,
    'maxNumber': 50, 
    'unit': 'GB',
    'footer': '<a href="#">get more space</a>'},
  {'id':1,
  'title': 'revenue', 
  'icon': 'faCopy', 
  'number': 34245,
  'maxNumber': null, 
  'unit': '$',
  'footer': 'last 24 hours'},
{'id':2,
'title': 'fixed issues', 
'icon': 'faCopy', 
'number': 75,
'maxNumber': null, 
'unit': null,
'footer': 'tracked from github'},
{'id':3,
'title': 'followers', 
'icon': 'faCopy', 
'number': 245,
'maxNumber': null, 
'unit': '+',
'footer': 'just updated'}
];


class Content extends Component {

  render() {
    return (
      <Container fluid className={classNames('content', {'is-open': this.props.isOpen})}>
        <NavBar toggle={this.props.toggle}/>
        <div className="container-fluid main-panel">
          <section className="row">
          <CardContainer cards={cards} />
          </section>

          <section className="row">
          <CardChartContainer />
          </section>

          <section className="row">
          <CardTableContainer />
          </section>
        </div>
        <Footer></Footer>
      </Container>
    );
  }
}

export default Content;
