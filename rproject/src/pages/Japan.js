import React, { Component } from 'react';
import "./Japan.css"
import J1 from "./Japan1.jpg";
import J2 from "./Japan2.jpg";
import J3 from "./Japan3.jpg";
import J4 from "./Tokyo.jpg";
import J5 from "./Jhiroshima.jpg";
import J6 from "./Jkobe.jpg";
import J7 from "./Jkyoto.jpg";
import J8 from "./Jnagasaki.jpeg";

import { NavLink } from 'react-router-dom';


 class Japan extends Component {
  render() {
    return (
      <>
      <div className='Japan'>
      
       <div className='japan1'>
       <img src={J1} alt="Japan"  width="550px" height="520px"/>
      
      <p className='pjap'>
          Let Us Plan 
          <br/>You a
          
          <font color="red"> Perfect Holiday</font>
          <br/> with
          <br/> 
          <br/> 

          <p1> 
          * Best Packages <br/>
          * Lot of Comfort <br/>
          * Many things to explore <br/>
          * Trip with lots of memories
          </p1>
          </p>  
          </div>
          <br/>
          <hr/>
          <br/>
       
       <div className='japcity'>
      <h1 className='japh1'>Top City</h1>

      <div className='citypic'>
          <img src={J4} alt="Tokyo" width="300px" height="200px" className='japimg'/>
       <h4 className='japh4'>Tokyo</h4>
      </div>

      <div className='citypic'>
          <img src={J5} alt="Hiroshima" width="300px" height="200px" className='japimg'/>
       <h4 className='japh4'>Hiroshima</h4>
      </div>

      <div className='citypic'>
          <img src={J6} alt="Kobe" width="300px" height="200px" className='japimg'/>
       <h4 className='japh4'>Kobe</h4>
      </div>

      <div className='citypic'>
          <img src={J7} alt="Kyoto" width="300px" height="200px" className='japimg'/>
       <h4 className='japh4'>Kyoto</h4>
      </div>
    </div>
       <br/>
       <hr/>
       <br/>
       
       <div className='japcity'>
      <h1 className='japh1'>Nature Beauty</h1>

      <div className='citypic'>
          <img src={J2} alt="Tokyo" width="300px" height="200px"/>
       
      </div>

      <div className='citypic'>
          <img src={J3} alt="Hiroshima" width="300px" height="200px"/>
       
      </div>

      <div className='citypic'>
          <img src={J8} alt="Kobe" width="300px" height="200px"/>
       
      </div>

      <div className='citypic'>
          <img src={J1} alt="Kyoto" width="300px" height="200px"/>
        </div>
    </div>
    <br/>

<div className='japdivlinks'>
    <div className='japlinks'>
    * Best Packages <br/>
          * Lot of Comfort <br/>
          * Many things to explore <br/>
          * Trip with lots of memories<br/>
    * Best Packages <br/>
          * Lot of Comfort <br/>
          * Many things to explore <br/>
    </div>
    <br/>

    <h2 className='japh2'><b>
    Why Choose Us?
    </b>
    </h2>
More Than 20 Years Of Experience, Variety Of Tour Packages, Best Deals And Personalised Services.
<br/>


<p className='jah2'> <i>
Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean, and is bordered on the west by the Sea of Japan, while extending from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.<br/>
Japan is known worldwide for its traditional arts, including tea ceremonies, calligraphy and flower arranging. The country has a legacy of distinctive gardens, sculpture and poetry. Japan is home to more than a dozen UNESCO World Heritage sites and is the birthplace of sushi, one of its most famous culinary exports.<br/>
Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean, and is bordered on the west by the Sea of Japan.
</i>
</p>
    </div>
 
 <br/>
    
    <NavLink to='/destn' className="return2"> Back </NavLink>

</div>
      </>
    )
  }
}
export default Japan;