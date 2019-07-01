import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardBody
} from "reactstrap";

   

class CardTableContainer extends Component {


  render() {
    
    var tableData = [{
        id: 1,
        name: "Product1",
        salary: 120,
        country: "niger"
    },{
        id: 1,
        name: "Product1",
        salary: 120,
        country: "niger"
    },
    {
        id: 1,
        name: "Product1",
        salary: 120,
        country: "niger"
    }];

      
    return (
      <React.Fragment>
        
        <div className="col-md-6">
          <Card className="card-table">
            <CardHeader className="orange">
            
                  <CardTitle>Employees Stats</CardTitle>
                  <CardSubtitle>New employees on 15th September, 2016</CardSubtitle>
            </CardHeader>
            <CardBody>
              <BootstrapTable stripped data={tableData}  hover  options={ { noDataText: 'This is custom text for empty data' } } bordered={ false }>
                <TableHeaderColumn isKey dataField="id">
                  ID
                </TableHeaderColumn>
                <TableHeaderColumn dataField="name">
                  Name
                </TableHeaderColumn>
                <TableHeaderColumn dataField="salary">
                  Salary
                </TableHeaderColumn>
                <TableHeaderColumn dataField="country">
                  Country
                </TableHeaderColumn>
              </BootstrapTable>
            </CardBody>

            <CardFooter />
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default CardTableContainer;
