import React, { Component } from "react";
import "./India.css";
import D10 from "./india2.jpg"
import D1 from './Kashmir.webp';
import D2 from './Shimla.webp';
import D3 from './Sikkim.png';
import D4 from './Agra.jpg';
import D5 from './Rajasthan.jpg';
import D6 from './Punjab.jpg';
import D7 from './kerala.webp';
import D8 from './Manipur.jpg';
import D9 from './Goa.jpg';
import { NavLink } from "react-router-dom";

class Menu2 extends Component {
  render() {
    return (
      <>
        <div className="bgmenu2">
          <br/>

          <div className="divindia">
          <img src={D10} alt="India" className="Indiabg" width="550px" height="300px"/>
          <p>India is often referred to as a subcontinent of Southern Asia owing to its distinct and vast landmass. Surrounded by sea on three sides, the majestic Himalayas separates it from the rest of mainland Asia. India is famous for its ancient history, varied landscapes and diverse culture.
          Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation.

India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.

The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourists’ interest.

Along with the best nature sightseeing tours, India offers an opportunity to visitors to have a little adventure of their own. The numerous spell-binding and less-trodden trails give trekking tour opportunities in South Asia unlike any other.
          </p>
          </div>

<hr/>
          
          
          <div className="group">
              <div className="elements">
                  <img src={D1} alt="kashmir"className="img"  width='270px' height='170px'/>
                  <h4 className="h4">Kashmir</h4>
              </div>

              <div className="elements">
              <img src={D2} alt="Shimla" className="img" width='270px' height='170px'/>
              <h4 className="h4">Shimla</h4>
              </div>

              <div className="elements">
              <img src={D3} alt="Sikkim" className="img" width='270px' height='170px'/>
              <h4 className="h4">Sikkim</h4>
              </div>

              <div className="elements">
              <img src={D4} alt="Agra" className="img" width='270px' height='170px'/>
              <h4 className="h4">Agra</h4>
              </div>

              <div className="elements">
              <img src={D5} alt="Rajasthan" className="img" width='270px' height='170px'/>
              <h4 className="h4">Rajasthan</h4>
              </div>

              <div className="elements">
              <img src={D6} alt="Punjab" className="img" width='270px' height='170px'/>
              <h4 className="h4">Punjab</h4>
              </div>

              <div className="elements">
              <img src={D7} alt="Kerala" className="img" width='270px' height='170px'/>
              <h4 className="h4">Kerala</h4>
              </div>

              <div className="elements">
              <img src={D8} alt="Manipur" className="img" width='270px' height='170px'/>
              <h4 className="h4">Manipur</h4>
              </div>

              <div className="elements">
              <img src={D9} alt="Goa" className="img" width='270px' height='170px'/>
              <h4 className="h4">Goa</h4>
              </div>
          </div>

          <NavLink to='/destn' className="return2"> Back </NavLink>
        </div>
      </>
    );
  }
}
export default Menu2;
