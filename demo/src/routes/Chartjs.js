import React from 'react';

import {
  Row,
  Col,
  Panel,
  PanelBody,
  PanelContainer,
} from '@sketchpixy/rubix';

class ChartContainer extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{padding: 25}} className='text-center'>
            <h4>{this.props.name}</h4>
            <div><canvas id={this.props.id} width={this.props.width} height={this.props.height}></canvas></div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

export default class Chartjs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      legend: ''
    };
  }

  componentDidMount() {
    (() => {
      var ctx = $("#line-chart").get(0).getContext("2d");
      var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      };
      new Chart(ctx).Line(data);
    })();
    (() => {
      var ctx = $("#bar-chart").get(0).getContext("2d");
      var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      };
      new Chart(ctx).Bar(data);
    })();
    (() => {
      var ctx = $("#pie-chart").get(0).getContext("2d");
      var data = [
        {
          value: 300,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        },
        {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        },
        {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        }
      ]
      new Chart(ctx).Pie(data);
    })();

    (() => {
      var ctx = $("#donut-chart").get(0).getContext("2d");
      var data = [
        {
          value: 300,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        },
        {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        },
        {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        }
      ];
      new Chart(ctx).Doughnut(data);
    })();

    (() => {
      var ctx = $("#radar-chart").get(0).getContext("2d");
      var data = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      };
      new Chart(ctx).Radar(data);
    })();

    (() => {
      var ctx = $("#polar-chart").get(0).getContext("2d");
      var data = [
        {
          value: 300,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        },
        {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        },
        {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        },
        {
          value: 40,
          color: "#949FB1",
          highlight: "#A8B3C5",
          label: "Grey"
        },
        {
          value: 120,
          color: "#4D5360",
          highlight: "#616774",
          label: "Dark Grey"
        }
      ];
      new Chart(ctx).PolarArea(data);
    })();
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <ChartContainer id='line-chart' height='75' width='250' name='Line Chart' />
            <ChartContainer id='bar-chart' height='75' width='250' name='Bar Chart' />
            <ChartContainer id='radar-chart' height='75' width='250' name='Radar Chart' />
            <ChartContainer id='polar-chart' height='75' width='250' name='Polar Chart' />
            <PanelContainer>
              <Panel>
                <PanelBody style={{padding: 25}} className='text-center'>
                  <h4>Pie + Donut Chart</h4>
                  <div style={{width: '50%', display: 'inline-block'}}><canvas id='pie-chart'></canvas></div>
                  <div style={{width: '50%', display: 'inline-block'}}><canvas id='donut-chart'></canvas></div>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
        </Row>
      </div>
    );
  }
}
