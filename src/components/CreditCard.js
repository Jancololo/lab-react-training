import React from 'react'

export default function CreditCard(props) {
    
  const cardStyle = {
    backgroundColor: props.bgColor,
    height: '200px',
    width: '400px',
    margin: '10px 20px',
    borderRadius: '20px',
    color: 'white'   
  }

  const secretNumber = () => {
    const num = props.number;
    return [...num].map((number, i, arr) => i < arr.length - 4 ? '*' : number)
      .map((num, i) => i % 4 === 0 && i != 0 ? ' ' + num : num)
  }

  const expirationYear = props.expirationYear.toString().slice(2);

  return (
      <div style={cardStyle}>
        <p>{props.type}</p>
        <p>{secretNumber()}</p>
        <p>Expires {props.expirationMonth}/{expirationYear}</p>
        <p>{props.owner}</p>
      </div>
  )
}

