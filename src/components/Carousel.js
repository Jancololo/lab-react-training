import React, { Component } from 'react'

export default class Carousel extends Component {
    state = {
        currentIndex: 0,
        img: this.props.imgs[0]
    }

    slideLeft = () => {
        const index = (this.state.currentIndex - 1 + this.props.imgs.length) % this.props.imgs.length;

        this.setState({
            currentIndex: index,
            img: this.props.imgs[index]
        })
    }

    slideRight = () => {
        const index = (this.state.currentIndex + 1) % this.props.imgs.length;

        this.setState({
            currentIndex: index,
            img: this.props.imgs[index]
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.slideLeft}>Left</button>
                <img style={{height: '200px'}} src={this.state.img} alt=""/>
                <button onClick={this.slideRight}>Right</button>
            </div>
        )
    }
}
