// This is for Props practise 
import React from 'react'

const Fruits = (props) => {
  return (
    <div>{props.fruits.name}
      {props.fruits.colour}</div>
  )
}

export default Fruits