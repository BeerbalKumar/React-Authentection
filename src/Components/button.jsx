import React from 'react'

export default class Button extends React.Component{
    render(){
        return(
            <button onClick={this.props.onClick} class="btn waves-effect waves-light"  name="action">{this.props.value}</button>
        )
    }
}