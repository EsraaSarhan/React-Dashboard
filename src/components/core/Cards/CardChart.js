import React, { Component } from "react";
import '../../../../node_modules/chartist/dist/chartist.css';
import ChartistGraph from "react-chartist";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardBody
} from "reactstrap";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faCopy
} from "@fortawesome/free-solid-svg-icons";

class CardChartContainer extends Component {
    
  render() {
    var data = {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
      series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
    };
    var options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      },
      showArea: true    };
    var lineChartOptions = {
      low: 0,
      showArea: true
    }
    //var type = "Line";

    return (
      <React.Fragment>

        <div className="col-md-4">
          <Card className="card-chart">
            <CardHeader className="orange">
              <div className="ct-chart">
                <ChartistGraph data={data} options={options} type={"Line"} />
              </div>
            </CardHeader>
            <CardBody>
              <CardTitle className="card-title">Daily Sales</CardTitle>
              <CardSubtitle className="card-category">
                <span className="text-success">
                  <i className="fa fa-long-arrow-up" /> 55%{" "}
                </span>{" "}
                increase in today sales.
              </CardSubtitle>
            </CardBody>
            <CardFooter>
              <div>
                <i className="material-icons">access_time</i> updated 4
                minutes ago
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="col-md-4">
          <Card className="card-chart">
            <CardHeader className="green">
              <div className="ct-chart">
                <ChartistGraph data={data} options={options} type={"Bar"} />
              </div>
            </CardHeader>
            <CardBody>
              <CardTitle className="card-title">Daily Sales</CardTitle>
              <CardSubtitle className="card-category">
                <span className="text-success">
                  <i className="fa fa-long-arrow-up" /> 55%{" "}
                </span>{" "}
                increase in today sales.
              </CardSubtitle>
            </CardBody>
            <CardFooter>
              <div>
                <i className="material-icons">access_time</i> updated 4
                minutes ago
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="col-md-4">
          <Card className="card-chart">
            <CardHeader className="red">
              <div className="ct-chart">
                <ChartistGraph data={data} options={lineChartOptions} type={"Line"} />
              </div>
            </CardHeader>
            <CardBody>
              <CardTitle className="card-title">Daily Sales</CardTitle>
              <CardSubtitle className="card-category">
                <span className="text-success">
                  <i className="fa fa-long-arrow-up" /> 55%{" "}
                </span>{" "}
                increase in today sales.
              </CardSubtitle>
            </CardBody>
            <CardFooter>
              <div>
                <i className="material-icons">access_time</i> updated 4
                minutes ago
              </div>
            </CardFooter>
          </Card>
        </div>
     
      </React.Fragment>
    );
  }
}

export default CardChartContainer;
