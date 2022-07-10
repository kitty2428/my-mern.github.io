import React, { Component } from 'react';
import B1 from './India.jpg';
import B2 from './Japan.jpg';
import B3 from './greece.jpg';
import B4 from './England.jpg';
import B5 from './portugal.jpg';
import B6 from './new zelend.jpg';
import B7 from './france.jpg';
import B8 from './spain.jpg';
import B9 from './AUSTRIA.png';
import B10 from './THAILAND.png';
import { NavLink } from 'react-router-dom';

class Destn extends Component {
  render() {
    return (
      <>
      <div className='destn'>
      <NavLink to='/india'><img src={B1} alt="India" className="aimg" /></NavLink>
      <NavLink to='/japan'><img src={B2} alt="Japan" className="aimg" /></NavLink>
      <NavLink to='/greece'><img src={B3} alt="greece" className="aimg" /></NavLink>
      <NavLink to='/england'><img src={B4} alt="England" className="aimg" /></NavLink>
      <NavLink to='/portugal'><img src={B5} alt="portugal" className="aimg" /></NavLink>
      <NavLink to='/newzeland'><img src={B6} alt="new zelend" className="aimg" /></NavLink>
      <NavLink to='/france'><img src={B7} alt="france" className="aimg" /></NavLink>
      <NavLink to='/spain'><img src={B8} alt="spain" className="aimg" /></NavLink>
      <NavLink to='/austria'><img src={B9} alt="Austria" className="aimg" /></NavLink>
      <NavLink to='/thailand'><img src={B10} alt="Thailand" className="aimg" /></NavLink>
        <br/>
      
       
        <NavLink to='/menu' className="return2"> Back </NavLink>
        
      </div> 
     </>
    )
  }
}
export default Destn;