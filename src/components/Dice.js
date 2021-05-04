import React, { Component } from 'react'

export default class Dice extends Component {   
    state = {
        img: true
    }

    clickHandler = () => {
        this.setState({
            img: false
        })     
        
        const changeState = () => {
            this.setState({
                img: true
            })
        }

        setTimeout(changeState, 1000) 
    }

    render() {
        return (
            <button onClick={this.clickHandler} style={{border: 'none', background: 'none'}}><img style={{height: '200px'}} src={this.state.img == true ? `/img/dice${Math.floor(1 + Math.random() * 5)}.png` : '/img/dice-empty.png'} alt=""/></button>           
        )
    }
}

