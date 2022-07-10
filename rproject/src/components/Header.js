import React, { Component } from 'react';
import P1 from './logo3.jpg';
import {NavLink} from 'react-router-dom';

 class Header extends Component {
  render() {
    return (
      <>
      <header>
        <nav>
          <ul>
            <img src={P1} alt=" This is logo" className="img1" />
            <h1 className="name">Happy Trip</h1>
            
            <li className="l1"><NavLink to="/" exact className="active">Home</NavLink></li>

            <li><NavLink to="about" className="active">About Us </NavLink></li>

             <li><NavLink to="login" className="active">Sign in </NavLink></li> 

            <li><NavLink to="register" className="active">Sign Up </NavLink></li>

            {/* <li><NavLink to="destn" className="active">Destn</NavLink></li>   */}
             <li><NavLink to="contact" className="active">Contact</NavLink></li>  
          </ul>
        </nav>
      </header>
      </>
    )
  }
}

export default Header;