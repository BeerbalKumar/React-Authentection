import React from 'react'
import Navbar from '../Components/navbar'
import Button from '../Components/button'
import Form from '../Components/form'

export default class Signup extends React.Component{
    constructor(){
      super()
      this.state={
          name:"",
          phone:"",
          email:"",
          password:""
      }
        
    }
    render(){
        console.log(this.state)
        return(
            <div>
            <Navbar />
            <center>
            <h2>SIGN UP</h2>

            <Form type="text"  placeholder="Enter Name" onChange={(e)=>this.setState({name:e.target.value})}/>
            <Form type="number"  placeholder="Enter Phone Number" onChange={(e)=>this.setState({phone:e.target.value})}/>
            <Form type="email"  placeholder="Enter Email" onChange={(e)=>this.setState({email:e.target.value})}/>
            <Form type="password"  placeholder="Enter password" onChange={(e)=>this.setState({password:e.target.value})}/>

            <Button value="sign up" onClick={()=>this.props.onClick(this.state)} />
            </center>
            </div>
        )
    }
}


