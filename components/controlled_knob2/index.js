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

  onChange(nextValue){
    const step=0.1
    var {value}=this.state;
    console.log(value,"=>",nextValue)

    if(nextValue>value){
      value=value+0.1;
    }else if(nextValue<value){
      value=value-0.1;
    }
    if(value>1){
      value=1;
    } else if(value<0){
      value=0;
    }
    console.log(value)
    this.setState({value});
  }
}
