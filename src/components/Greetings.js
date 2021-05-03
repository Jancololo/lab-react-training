import React, { Component } from 'react'

export default class Greetings extends Component {
    
    language() {
        if (this.props.lang === 'de') {
            return 'Hallo'
        }
        if (this.props.lang === 'fr') {
            return 'Bonjour'
        }
    }
    
    render() {
        return (
            <div>
                <p>{this.language()} {this.props.children}</p>
            </div>
        )
    }
}
