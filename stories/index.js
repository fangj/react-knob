import React from 'react';
import { storiesOf, action } from '@kadira/storybook';


storiesOf('Button', module)
  .add('with text', () => (
  	<button type="button" className="btn btn-success" onClick={action('clicked')}>Success</button>
  ))
  .add('with some emoji', () => (
    <button onClick={()=>toastr.info('Are you the 6 fingered man?')}>😀 😎 👍 💯</button>
  ))
  .add('with pubsub', () => (
    <button onClick={()=>PubSub.publish('msg.error','something wrong')}>😀 😎 👍 💯</button>
  ));

function render(value,c){
  const level=Math.round(value/0.1)
 return <text x={c} y={c} fill="lightblue" fontSize="30" textAnchor="middle" alignmentBaseline="central" fontFamily="Arial" >{level}档
    </text>
}

import  Knob  from "../components/knob";
import ControlledKnob from "../components/controlled_knob"
import ControlledKnob2 from "../components/controlled_knob2"
storiesOf('Knob', module)
  .add('Knob', () => (
    <Knob value={0.2}/>
  ))
  .add('Knob range', () => (
    <Knob value={0.2} from={-150} to={150}/>
  ))
  .add('Knob with render', () => (
    <Knob value={0.3} render={render}/>
  ))
  .add('Knob with offset', () => (
    <div style={{height:"3000px"}}>
    <div style={{height:"2000px"}}/>
    <Knob value={0.3}/></div>
  ))
  .add('ControlledKnob', () => (
    <ControlledKnob />
  ))
  .add('ControlledKnob2', () => (
    <ControlledKnob2 />
  ));

import  Wave  from "../components/wave/view.js";
var data= require('./mock_wave_data');
storiesOf('Wave', module)
  .add('Wave', () => (
    <div style={{width:2000,height:1000,padding:20,backgroundColor:"#DFE0DD"}}>
    <Wave data={data}/>
    </div>
  ))

