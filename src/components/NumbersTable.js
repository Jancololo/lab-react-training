import React, { Component } from 'react'

export default class NumbersTable extends Component {
    render() {
        let squares = []

        for(let i = 1; i <= this.props.limit; i++) {
            if(i % 2 === 0) {
                squares.push(<div key={i} className="number" style={{backgroundColor: 'red', color: 'white'}}>{i}</div>)
            } else {
                squares.push(<div key={i} className="number" style={{backgroundColor: 'white'}}>{i}</div>)
            }
        } 

        return (
            <div className="numbers-container">
                {squares}
            </div>
        )
    }
}


