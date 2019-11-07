import React from 'react'

export default class Form extends React.Component{
    render(){
        return(
            <div style={{
            }}>
  <center>
        <div class="input-field col s12" style={{
          textAlign:"center",
          width:"600px"
        }}>
          <input id={this.props.type} type={this.props.type} class="validate" onChange={this.props.onChange} />
          <label for={this.props.type}>{this.props.placeholder}</label>
        </div>
        </center>
            </div>
        )
    }
}