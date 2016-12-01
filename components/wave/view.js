import React from 'react';
require ('./wave.css');
// var LineChart = require('react-d3-basic').LineChart;
import LineChart  from './line.js';


export default class WaveView extends React.Component {
  static propTypes = {
    data: React.PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    var width = 500,
    height = 400,
    margins = {left: 5, right: 5, top: 5, bottom: 5},
    title="示波器";
    const {data}=this.props;
    const chart1={
        field: 'c1',
        name: 'ch1',
        color: '#ff7f0e'
      };
    const x = function(d) {
      return d.idx;
    };
    var wavedata=data.map((c1,idx)=>({c1,idx}));
    var chartSeries=[chart1];
    var xTickValues=_.range(0,1401,140);
    var yTickValues=_.range(0,257,32);

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

