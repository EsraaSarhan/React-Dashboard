import React, { Component } from "react";
import { Card, CardHeader, CardFooter,
  CardTitle, CardSubtitle, CardLink } from 'reactstrap';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faCopy } from '@fortawesome/free-solid-svg-icons';


class CardContainer extends Component {
  
  render() {
    
    let elements = this.props.cards.map((element) => {
      var hasMaxNumber = false;
if(element.maxNumber){
  hasMaxNumber = true;
}
      return (
        <div className="col-lg-3 col-md-6 col-sm-6" key={element.id}>
          <Card className="border-0">
            <CardHeader>
              <div className="card-icon orange">
                <FontAwesomeIcon icon={faCopy} />
              </div>
              <CardTitle>{element.title}</CardTitle>
              <CardSubtitle>
              <span> {element.unit}</span>
                {element.number}
                <span>
                 
                  {hasMaxNumber ? (
                    '/'
                  ) : (
                    ''
                  )}
                   {element.maxNumber}
                </span>
               
              </CardSubtitle>
            </CardHeader>
            <CardFooter>{ReactHtmlParser(element.footer)}</CardFooter>
          </Card>
        </div>
      );
  })
    return (
      <React.Fragment>
        {elements}
      </React.Fragment>
    );
  }
}


export default CardContainer;
