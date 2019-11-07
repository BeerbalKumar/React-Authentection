import React from "react"
import Navbar from "../Components/navbar";
import Button from  '../Components/button'

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar btn={<Button value="Logout" onClick={()=>this.props.func()} />} email={this.props.email} />
            
            </div>
        )
    }
}