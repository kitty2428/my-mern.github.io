import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

 class Offer extends Component {
  render() {
    return (
      <>
      <div className="backgrndo">
          <div className="offer">
          <div className="d4">
        <h1 className='liveo'>Offers for you..!!</h1>
        <div className="cpo">
            <h5 className="cpo1">Customized Pack</h5>
            <h3 className="crclo2"> for Rs 18297 </h3>
            <h3 className="crclo">
                save Rs15297
            </h3>
            <p className="splo">Get trip in 3 Star + shipment to travel in your trip</p>

            <button className="butno3">Know More</button>
        </div>
        <br/>
        <div className="cpo">
            <h5 className="cpo1">Customized Pack</h5>
            <h3 className="crclo2"> for Rs 18297 </h3>
            <h3 className="crclo">
                save Rs50297
            </h3>
            <p className="spl">Get family trip in 5 Star + shipment to travel in your trip</p>

            <button className="butno3">Know More</button>
        </div><br/>
        <div className="cpo">
            <h5 className="cpo1">Customized Pack</h5>
            <h3 className="crclo2"> for Rs8297 </h3>
            <h3 className="crclo"> save Rs44297</h3>
            <p className="spl">Get couple vacation time in 5 Star + shipment to travel in your trip</p>

            <button className="butno3">Know More</button>
        </div>
        <br/>
        <div className="cpo">
            <h5 className="cpo1">Customized Pack</h5>
            <h3 className="crclo2"> for Rs18297 </h3>
            <h3 className="crclo"> save Rs14297</h3>
            <p className="spl">Get Friends trip in 3 Star + shipment to travel in your trip + a local guide</p>

            <button className="butno3">Know More</button>
        </div>
        <br/>
            <NavLink to='/menu' className="bcko">Back</NavLink>
    </div>
    </div>
    </div>
      </>
    )
  }
}
export default Offer;
