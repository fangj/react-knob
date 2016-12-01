import React from 'react';
import  Knob  from "../knob";

function render(value,c){
  const level=Math.round(value/0.1)
 return <text x={c} y={c} fill="lightblue" fontSize="30" textAnchor="middle" alignmentBaseline="central" fontFamily="Arial" >{level}档
    </text>
}

export default class ControlledKnob extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.onChange=this.onChange.bind(this);
    this.state={value:0.1};
  }

  render() {
    const {value}=this.state;
    return (
     <Knob value={value} onChange={this.onChange} render={render}/>
    );
  }

  onChange(value){
    const step=0.1
    const level=Math.round(value/step)
    value=level*step;
    this.setState({value});
  }
}
