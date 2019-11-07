import React from 'react';
import './App.css';
import Login from './Container/login'
import Home from './Container/home'
import Signup from './Container/signup'
import { signup,login } from './functions/function.jsx'
import { async } from 'q';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
      signup: false
    }
  }
  signupFunc = async (data) => {
    console.log(data);
    try {
      let user = await signup(data)
      console.log(user)
      this.setState({
        signup: true,
      })
    }
    catch (err) {
      alert(err.message)
    }
  }


  loginFunc = async (data) => {
    console.log(data);
    try {
      let user = await login(data)
      console.log(user)
      this.setState({
        login: true,
        email : user.email
      })
    }
    catch (err) {
      alert(err.message)
    }
  }
  logout=()=>{
   this.setState({
     login:false
   })
  }
  render() {
    return (
      <div>
        {this.state.login ?
          <Home email={this.state.email} func={this.logout} />
          :
          this.state.signup ?
            <div>
              <Login onClick={this.loginFunc}/>
              <center><p onClick={() => this.setState({ signup: false })}>Don't have account</p></center>
            </div>
            :
            <div>
              <Signup onClick={this.signupFunc} />
              <center><p onClick={() => this.setState({ signup: true })}>Already have account</p></center>

            </div>


        }
      </div>
    )
  }
}

export default App;
