import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state = {
        clicked: false
    }

    clickHandler = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
 
    render() {
        return (
            <button onClick={this.clickHandler}><img src={this.state.clicked === false ? this.props.img : this.props.imgClicked} alt=""/></button>
        )
    }
}
