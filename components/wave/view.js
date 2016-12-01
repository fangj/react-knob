import React from 'react';
require ('./wave.css');
// var LineChart = require('react-d3-basic').LineChart;
import LineChart  from './line.js';
var _=require('lodash');

export default class WaveView extends React.Component {
  static propTypes = {
    data: React.PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    var width = 600,
    height = 400,
    margins = {left: 10, right: 10, top: 10, bottom: 10},
    title="示波器";
    const {data}=this.props;
    const chart1={
        field: 'c1',
        name: 'ch1',
        color: '#42ff4f'
      };
    const x = function(d) {
      return d.idx;
    };
    var wavedata=data.map((c1,idx)=>({c1,idx}));
    var chartSeries=[chart1];
    var xTickValues=_.range(0,1401,100); //横向100点一格
    var yTickValues=_.range(0,257,32); //纵向一共8格

    return (
      <div className='wave'>
         <LineChart
          showLegend={false}
          showXGrid= {true}
          showYGrid= {true}
          margins= {margins}
          title={title}
          data={wavedata}
          width={width}
          height={height}
          chartSeries={chartSeries}
          x={x}
          yDomain={[0,255]}
          xTickValues={xTickValues}
          yTickValues={yTickValues}
        />
      </div>
    );
  }
}

