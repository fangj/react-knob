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

import  Knob  from "../components/knob";
storiesOf('Knob', module)
  .add('Knob', () => (
    <Knob degree={100} onChange={(degree)=>toastr.info(degree)}/>
  ))
  .add('Knob with offset', () => (
    <div style={{height:"3000px"}}>
    <div style={{height:"2000px"}}/>
    <Knob degree={100}/></div>
  ))