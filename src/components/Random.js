import React from 'react'

export default function Random(props) {
  const max = props.max;
  const min = props.min;
  const randomNumber = Math.floor(Math.random() * (max - min) + min)

  return (
    <div>
      <p>Random value between {props.min} and {props.max} = {randomNumber} </p>
    </div>
  )
}
