import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Package extends Component {
  render() {
    return (
      <>
        <div className="backgrndp">
          <div className="package">
            <div class="d2">
              <h2 className="livep"> Our packages include:</h2>
              <div className="cp1">
                <h5 className="cp2">Customized Pack</h5>
                <p className="sp">
                  Get family trip for @<del>Rs20796</del>
                  <ins> Rs15499</ins> per person
                </p>
                <h3 className="crclp1"> save Rs5297 </h3>
                <h3 className="crclp">save Rs5297</h3>
                <p className="sp1">
                  88% people got this have availed this offer
                </p>
                <button className="butnp">Know More</button>
              </div>
              <br />
              <div className="cp1">
                <h5 className="cp2">Family-Journey Pack</h5>
                <p className="sp">
                  5 member family pack @<del>Rs76679</del>
                  <ins> Rs70499</ins>
                </p>
                <h3 className="crclp1"> save Rs6180</h3>
                <h3 className="crclp">save Rs6180</h3>
                <p className="sp1">
                  25% people got this have availed this offer
                </p>
                <button className="butnp">Know More</button>
              </div>
              <br />
              <div className="cp1">
                <h5 className="cp2">Couple-Trip Pack</h5>
                <p className="sp">
                  Special viewpoint habitation for 1 week @<del>Rs40579</del>
                  <ins> Rs34499</ins>
                </p>
                <h3 className="crclp1"> save R1297 </h3>
                <h3 className="crclp">save Rs6080</h3>
                <p className="sp1">
                  55% people got this have availed this offer
                </p>
                <button className="butnp">Know More</button>
              </div>
              <br />
              <div className="cp1">
                <h5 className="cp2">Friends Trip Pack</h5>
                <p className="sp">
                  Get all 20 courses @<del>Rs14679</del>
                  <ins> Rs4499</ins>
                </p>
                <h3 className="crclp1"> save R1297 </h3>
                <h3 className="crclp">save Rs10180</h3>
                <p className="sp1">
                  75% people got this have availed this offer
                </p>
                <button className="butnp">Know More</button>
              </div>
              <br/>
                <NavLink to='/menu' className="bckp">Back</NavLink>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}
