import React, {Component} from 'react'

class InputBar extends Component {
    constructor() {
        super()
        this.state = {
        
            userinput: ''
        }
    }

    handleChange = (val) => {
        this.setState({
            userinput: val
        })

    }

    render () {
            return (
             <div>
            <input 
            onChange={ e => this.handleChange(e.target.value)}
            type="text"/>
            <h1>{this.state.userinput}</h1>
            </div>
            )
        }
    }

export default InputBar