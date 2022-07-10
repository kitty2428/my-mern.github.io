import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Accomodation extends Component {
  render() {
    return (
      <>
      {/* Accomodation ,pav */}
      <div className='backgrnd'>
      <div className='accom'>
      <div class="d1">
        <h1 className='live'>Where would you like to live?</h1>
        <div class="cp">
            <h5 class="cpa1">Customized Pack</h5>
            <h3 class="crcl2"> for Rs 18297 </h3>
            <h3 class="crcl">
                save Rs15297
            </h3>
            <p class="spl">Get family trip in 3 Star</p>
            <p class="sp1">AC rooms;serves unlimited breakfast,lunch & dinner. </p>
            <button class="butn3">Know More</button>
        </div>
        <br/>
        <div class="cp">
            <h5 class="cpa1">Customized Pack</h5>
            <h3 class="crcl2"> for Rs 18297 </h3>
            <h3 class="crcl">
                save Rs50297
            </h3>
            <p class="spl">Get family trip in 5 Star</p>
            <p class="sp1">AC rooms;serves unlimited breakfast,lunch & dinner. </p>
            <button class="butn3">Know More</button>
        </div><br/>
        <div class="cp">
            <h5 class="cpa1">Customized Pack</h5>
            <h3 class="crcl2"> for Rs8297 </h3>
            <h3 class="crcl"> save Rs44297</h3>
            <p class="spl">Get couple vacation time in 5 Star</p>
            <p class="sp1">AC rooms;beautiful viewpoints;serves unlimited breakfast,lunch & dinner. </p>
            <button class="butn3">Know More</button>
        </div>
        <br/>
        <div class="cp">
            <h5 class="cpa1">Customized Pack</h5>
            <h3 class="crcl2"> for Rs18297 </h3>
            <h3 class="crcl"> save Rs14297</h3>
            <p class="spl">Get Friends trip in 3 Star</p>
            <p class="sp1">AC rooms;serves unlimited breakfast,lunch & dinner. </p>
            <button class="butn3">Know More</button>
        </div>
        <br/>
            <NavLink to='/menu' className="bck">Back</NavLink>
    </div>
    </div>
</div>
      </>
    )
  }
}
