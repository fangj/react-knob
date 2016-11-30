import React from 'react';
import  Knob  from "../knob";

function render(degree,c){
  const level=Math.round(degree/30)
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
    this.state={degree:100};
  }

  render() {
    const {degree}=this.state;
    return (
     <Knob degree={degree} onChange={this.onChange} render={render}/>
    );
  }

  onChange(degree){
    const level=Math.round(degree/30)
    degree=level*30;
    if(degree==360){
      degree=359.9;
    }
    this.setState({degree});
  }
}
