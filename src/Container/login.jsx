import React from 'react'
import Navbar from '../Components/navbar'
import Form from '../Components/form'
import Button from '../Components/button'



export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }
    render(){
        console.log(this.state);
        return(
            <div>
            <Navbar />
            <center>

            <h2>LOG IN</h2>
            <Form type="email"  placeholder="Enter Email" onChange={(e)=>this.setState({email:e.target.value})}/>
            <Form type="password" placeholder="Enter Password" onChange={(e)=>this.setState({password:e.target.value})}/>
            <Button value="Login"  onClick={()=>this.props.onClick(this.state)} />
            </center>
            </div>
            )
    }
}

