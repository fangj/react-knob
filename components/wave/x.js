import React from 'react';
var Xaxis = require('react-d3-core').Xaxis;
var _=require('lodash');

export default class x extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    var width = 500,
    // setting your svg height
    height = 100,
    // setting your margins of your svg
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    // your x Axis accessor
    // set your x domain
    xDomain = _.range(100),
    // set your x range
    xRange = [0, width - margins.left - margins.right],
    // your scale type 'linear', 'ordinal', 'time'... etc.
    xScale = 'ordinal',
    // set your label name
    xLabel = "Month";
    var xTickValues=[1,13,56];
    console.log(xDomain);
    return (
      <svg width={width} height={height}>
      <Xaxis
        width= {width}
        height= {height}
        margins= {margins}
        xDomain= {xDomain}
        xTickValues={xTickValues}
        xScale= {xScale}
        xLabel= {xLabel}
      />
    </svg>
    );
  }
}
