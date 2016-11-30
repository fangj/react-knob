import React from 'react';

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}

export default class Knob extends React.Component {
  static propTypes = {
    degree: React.PropTypes.number,
    R: React.PropTypes.number, //半径
    strokeWidth:React.PropTypes.number,//粗细
    bColor:React.PropTypes.string,//背景色
    fColor:React.PropTypes.string,//前景色
    text:React.PropTypes.string,
  };

  static defaultProps = {
    degree: 50,
    R: 100, //半径
    strokeWidth:30,
    bColor:"#EEEEEE",
    fColor:"#87CEEB",
  }

  constructor(props) {
    super(props);
    this.state={degree:props.degree}
  }

  render() {
    const {R,strokeWidth}=this.props;
    const {degree}=this.state;
    const c=R+strokeWidth/2;//中心位置
    const arcBack=describeArc(c, c, R, 0, 359.9);
    const arcFore=describeArc(c, c, R, 0, degree);
    const text=this.props.text||degree;
    return (
      <svg style={{width:"100%",height:"100%"}}>
      <path fill="none" stroke="#EEEEEE" strokeWidth={strokeWidth} d={arcBack} ></path>
      <path  fill="none" stroke="#87CEEB" strokeWidth={strokeWidth} d={arcFore}></path>
      <text x={c} y={c} fill="#87CEEB" fontSize="60" textAnchor="middle" alignmentBaseline="central" fontFamily="Arial" >
        {degree}
    </text>
  </svg>
    );
  }
}