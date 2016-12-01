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
    value: React.PropTypes.number,
    R: React.PropTypes.number, //半径
    strokeWidth:React.PropTypes.number,//粗细
    bColor:React.PropTypes.string,//背景色
    fColor:React.PropTypes.string,//前景色
    text:React.PropTypes.string,
    onChange:React.PropTypes.func,
    render:React.PropTypes.func,
    from: React.PropTypes.number, //起始角度
    to: React.PropTypes.number, //结束角度
  };

  static defaultProps = {
    value: 50,
    R: 100, //半径
    strokeWidth:30,
    bColor:"#EEEEEE",
    fColor:"#87CEEB",
    from:0,
    to:359.9
  }

  constructor(props) {
    super(props);
    const {R,strokeWidth,value}=this.props;
    const c=R+strokeWidth/2;//中心位置
    this.state={value,c};
    this.onChange=this.onChange.bind(this);
  }

  render() {
    const {R,strokeWidth,render,from,to}=this.props;
    const {value,c}=this.state;
    const range=to-from;
    const degree=Math.round(value*range);
    const arcBack=describeArc(c, c, R, from, to);
    const arcFore=describeArc(c, c, R, from, from+degree);
    var text;
    if(typeof render=='function'){
      text=render(value,c);
    }else{
      var txt=this.props.text||value.toPrecision(2);
      text=<text x={c} y={c} fill="#87CEEB" fontSize="60" textAnchor="middle" alignmentBaseline="central" fontFamily="Arial" >
        {txt}
    </text>
    }
    return (
      <svg style={{width:"100%",height:"100%"}} ref="svg">
      <path fill="none" stroke="#EEEEEE" strokeWidth={strokeWidth} d={arcBack} onClick={this.onChange}></path>
      <path  fill="none" stroke="#87CEEB" strokeWidth={strokeWidth} d={arcFore} onClick={this.onChange}></path>
      {text}
  </svg>
    );
  }

  onChange(e){
    // console.log(e.pageX,e.pageY)
    var el=this.refs.svg;
    var offset = $(el).offset(); 
    var x=e.pageX-offset.left;
    var y=e.pageY-offset.top;
    // console.log(x,y);
    const {c}=this.state;
    var dx=x-c;
    var dy=c-y;
    console.log(dx,dy)
    var hudu=Math.atan2(dx,dy);
    const {from,to}=this.props;
    const range=to-from;
    var degree=Math.round(hudu*180.0/Math.PI)-from;
    if(degree<0){
      degree+=360;
    }
    console.log(degree);
    const value=degree/range;
    if(typeof this.props.onChange =="function"){
      this.props.onChange(value)
    }else{
      this.setState({value})
    }
  }

  componentWillReceiveProps(nextProps) {
    const {value}=nextProps;
    this.setState({value})
  }

}
