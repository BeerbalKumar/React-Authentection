import React from 'react'

export default class Form extends React.Component{
    render(){
        return(
            <div>
            <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">REACT-AUTH</a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="#">{this.props.email}</a></li>
                <li>{this.props.btn}</li>
              </ul>
            </div>
          </nav>
        

          </div>
        )
    }
}