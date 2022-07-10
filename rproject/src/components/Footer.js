import React, { Component } from "react";
import P1 from './logo3.jpg';

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="foot">
            <h4 className="copryte">All rights are reserved @happytrip 2019</h4>
            <br />
            <div className="icon">
              <i className="fa fa-map-marker fa-2x" aria-hidden="true">
                Main Office: Sector-R24,Blossom colony,Flower Road,Pune.
              </i>
              <br />
              
              <i className="fa fa-phone fa-2x" aria-hidden="true">
                240-6734230 / 240-7847387
              </i>
              <br />
              
              <i className="fa fa-envelope fa-2x" aria-hidden="true">
                happytrip3453@gmail.com
              </i>
              <br />
            </div>
            <div className="symbol">
            <h5 className="follow">Follow us </h5>
              <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
              <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
              <img src={P1} alt=" This is logo" className="footimg" />
              </div>
              
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
