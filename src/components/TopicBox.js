import React from 'react'
import './topicbox.css';

export default function TopicBox(props) {

  let favFood = "My favourite food is kottu"
  let favFood2 = "Rice"


  const x = 10
  const y = 20
  const z = x+y

  const foodprices = {
    "kottu" : 300,
    "rice" : 350,
  }
  return (
    <div>
        <div className='topicBox'>
            {/* <span className="text">{favFood} {favFood2}</span> <br/>
            <span className="text">{z}</span> <br/>
            <span className="text">{ alert('Hey you! JS is running') }</span> <br/>
            <span className="text">{ [10,20,30] }</span> <br/>
            <span className="text">{ foodprices.kottu }</span> <br/>
            <span>This has been typed using a varibale</span> */}

            <span className='text'> My favourite food is {props.food} {props.price}  {props.children}</span>
        </div>
    </div>
  )
}
