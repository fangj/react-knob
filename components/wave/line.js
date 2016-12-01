"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Xaxis,
  Yaxis,
  Xgrid,
  Ygrid,
  Legend
} from 'react-d3-core';

import {
  Line,
  Chart
} from 'react-d3-shape';

import CommonProps from './commonProps';

export default class LineChart extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    showScatter: false,
    ...CommonProps
  }

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    chartSeries: PropTypes.array.isRequired
  }

  render() {

    const {
      width,
      height,
      margins,
      data,
      chartSeries,
      showXGrid,
      showYGrid,
      showLegend,
      showXaxis,
      showYaxis,
      categoricalColors
    } = this.props;

    var xgrid, ygrid,xaxis,yaxis;

    if(showXGrid) xgrid = <Xgrid {...this.props}/>
    if(showYGrid) ygrid = <Ygrid {...this.props}/>
    if(showXaxis) xaxis=<Xaxis {...this.props}/>
    if(showYaxis) yaxis=<Yaxis {...this.props}/>
    return (
<div>
        {showLegend?
          <Legend
            {...this.props}
            width= {width}
            margins= {margins}
            chartSeries= {chartSeries}
            categoricalColors= {categoricalColors}
          />
          : null
        }
        <Chart
          {...this.props}
          width= {width}
          height= {height}
          data= {data}
          chartSeries= {chartSeries}
          >
          <Line
            chartSeries= {chartSeries}
          />
          {xgrid}
          {ygrid}
          {xaxis}
          {yaxis}
          {this.props.children}
        </Chart>
      </div>
    )
  }
}

