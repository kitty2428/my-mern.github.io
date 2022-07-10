import React from "react";
import { useNavigate ,NavLink } from "react-router-dom";

const Menu =() => {
  const navigate = useNavigate();

  const destnPage=() =>{
    navigate("/destn")
  }
   
  const accomodPage=() =>{
    navigate("/accomodation")
  }

  const pckgPage=() =>{
    navigate("/package")
  }

  const offerPage=() =>{
    navigate("/offer")
  }

    return (
      <>
      <div className="wlcm">
     <button  className="bt2" onClick={destnPage}>Dstination</button>
          
          <br />
           <button className="bt2" onClick={accomodPage}> Accomodation</button>
          
          <br />
          <button className="bt2" onClick={pckgPage}> Packages</button>
           
          <br />
          <button className="bt2" onClick={offerPage}>Offers</button>
          
          
          
          <br />
          <NavLink to="/" className='return'>Back</NavLink>
        </div>
      </>
    );
  }


export default Menu;
