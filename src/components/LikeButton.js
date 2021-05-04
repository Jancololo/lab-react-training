import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        counter: 0,
        color: ['purple','blue','green','yellow','orange','red']
    }

    clickHandler = () => {
        console.log('this')
        this.setState((state, props) => ({
            counter: state.counter + 1
        }))
    }
    
    render() {
        return (
            <button className="like-button" style={{backgroundColor: this.state.color[Math.floor(Math.random() * 6)]}} onClick={this.clickHandler}>{this.state.counter !== 1 ? `${this.state.counter} Likes` : `${this.state.counter} Like`}</button>
        )
    }
}
