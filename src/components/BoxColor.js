import React from 'react'

export default function BoxColor(props) {
    
    const myStyle = {
      height: '100px',
      backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      marginBottom: '10px',
      border: '1px solid black',
      color: 'white'
    }
    return (
        <div style={myStyle}>
          <p>rgb({props.r}, {props.g}, {props.b})</p>
        </div>
    )
}
