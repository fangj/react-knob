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

function render(degree,c){
  const level=Math.round(degree/30)
 return <text x={c} y={c} fill="lightblue" fontSize="30" textAnchor="middle" alignmentBaseline="central" fontFamily="Arial" >{level}档
    </text>
}

import  Knob  from "../components/knob";
import ControlledKnob from "../components/controlled_knob"
import ControlledKnob2 from "../components/controlled_knob2"
storiesOf('Knob', module)
  .add('Knob', () => (
    <Knob degree={100} onChange={(degree)=>toastr.info(degree)}/>
  ))
  .add('Knob with render', () => (
    <Knob degree={100} onChange={(degree)=>toastr.info(degree)} render={render}/>
  ))
  .add('Knob with offset', () => (
    <div style={{height:"3000px"}}>
    <div style={{height:"2000px"}}/>
    <Knob degree={100}/></div>
  ))
  .add('ControlledKnob', () => (
    <ControlledKnob />
  ))
  .add('ControlledKnob2', () => (
    <ControlledKnob2 />
  ))

