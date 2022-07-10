import React, { Component } from 'react';
import T1 from './founder1.jpg';
import T2 from './CEO1.jpg';
import T3 from './manager.jpg';
import T4 from './reason1.jpg';
import T5 from './reason2.jpg';
import T6 from './reason3.jpg';
import { NavLink } from 'react-router-dom';


class About extends Component {
  render() {
    return (
      <>
      <div className="body">
        <div className="mixdiv">
      <button className="back">
        <NavLink to='/'>
        <i className="fa fa-hand-o-left fa-2x" aria-hidden="true"> 
        </i></NavLink>
      </button>
      
      <div className="mdiv">
        <div className="about">
          <h1>About Us</h1>
          <br /><br />
        </div>
        
          <h2>Our Team</h2>

          <div className="img">
            <img src={T1} alt="founder of happytrip" className="limg" />
            <h3>Mr.Hit</h3>
            <p className="role">founder</p>
            <p className="descrip">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit or, sit
              amet consectetur adipisicing eli.
            </p>
            <p className="mail">
              mrhit@gmail.com <br /><button type="button" className="contb">
                Contact
              </button>
            </p>

            <img src={T2} alt="CEO of happytrip" className="limg" />
            <h3>Danny Doe</h3>
            <p className="role">Co-founder and CEO</p>
            <p className="descrip">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit or, sit
              amet consectetur adipisicing eli.
            </p>
            <p className="mail">
              Doedanny@gmail.com <br /><button type="button" className="contb">
                Contact
              </button>
            </p>

            <img src={T3} alt="Manger of happytrip" className="limg" />
            <h3>Ira Jannie</h3>
            <p className="role">Manager</p>
            <p className="descrip">
              Lorem ipsum dolor, sit amet consectetur adipisicing or, sit amet
              consectetur adipisicing eli elit.
            </p>
            <p className="mail">
              Irajanni4@gmail.com<br />
              <button type="button" className="contb">Contact</button>
            </p>
          </div>
      </div>
      </div>
      <div className="sdiv">
        <img src={T4} alt="Manger of happytrip" className="Timg" />
        <p className="Tdescrip">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          odit mollitia sed, earum officia necessitatibus nam cupiditate aliquam
          modi animi numquam dolore voluptates quaerat dolores est, quis veniam
          nihil recusandae! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Aperiam incidunt quibusdam animi itaque, deserunt delectus ut
          sint corrupti illum numquam vero maxime. Atque tenetur animi
          voluptatum, adipisci cum reprehenderit in. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dolore, laudantium, modi voluptatibus
          molestias ratione, quasi id beatae veritatis quia repellendus itaque
          nemo quam earum accusamus voluptates porro deserunt enim temporibus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          dolores, magni accusantium enim repellendus minus aperiam iusto dicta
          reiciendis sint ad quia laudantium officiis provident! Perspiciatis
          non similique rem harum! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur labore qui amet repellendus est alias
          natus veniam rem tenetur quo quia cupiditate fuga eos, delectus
          distinctio nesciunt in inventore mollitia? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Adipisci pariatur, ipsa rem illum saepe
          voluptate asperiores consectetur nesciunt molestias commodi soluta
          sapiente fugiat aspernatur excepturi nisi quisquam non officia cumque!
        </p>
        <br/>

        <img src={T5} alt="Manger of happytrip" className="Timg" />
        <p className="Tdescrip">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          odit mollitia sed, earum officia necessitatibus nam cupiditate aliquam
          modi animi numquam dolore voluptates quaerat dolores est, quis veniam
          nihil recusandae! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Aperiam incidunt quibusdam animi itaque, deserunt delectus ut
          sint corrupti illum numquam vero maxime. Atque tenetur animi
          voluptatum, adipisci cum reprehenderit in. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dolore, laudantium, modi voluptatibus
          molestias ratione, quasi id beatae veritatis quia repellendus itaque
          nemo quam earum accusamus voluptates porro deserunt enim temporibus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          dolores, magni accusantium enim repellendus minus aperiam iusto dicta
          reiciendis sint ad quia laudantium officiis provident! Perspiciatis
          non similique rem harum! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur labore qui amet repellendus est alias
          natus veniam rem tenetur quo quia cupiditate fuga eos, delectus
          distinctio nesciunt in inventore mollitia? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Adipisci pariatur, ipsa rem illum saepe
          voluptate asperiores consectetur nesciunt molestias commodi soluta
          sapiente fugiat aspernatur excepturi nisi quisquam non officia cumque!
        </p>
        <br/>

        <img src={T6} alt="Manger of happytrip" className="Timg" />
        <p className="Tdescrip">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          odit mollitia sed, earum officia necessitatibus nam cupiditate aliquam
          modi animi numquam dolore voluptates quaerat dolores est, quis veniam
          nihil recusandae! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Aperiam incidunt quibusdam animi itaque, deserunt delectus ut
          sint corrupti illum numquam vero maxime. Atque tenetur animi
          voluptatum, adipisci cum reprehenderit in. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dolore, laudantium, modi voluptatibus
          molestias ratione, quasi id beatae veritatis quia repellendus itaque
          nemo quam earum accusamus voluptates porro deserunt enim temporibus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          dolores, magni accusantium enim repellendus minus aperiam iusto dicta
          reiciendis sint ad quia laudantium officiis provident! Perspiciatis
          non similique rem harum! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur labore qui amet repellendus est alias
          natus veniam rem tenetur quo quia cupiditate fuga eos, delectus
          distinctio nesciunt in inventore mollitia? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Adipisci pariatur, ipsa rem illum saepe
          voluptate asperiores consectetur nesciunt molestias commodi soluta
          sapiente fugiat aspernatur excepturi nisi quisquam non officia cumque!
        </p>
      </div>
    </div>
    
      </>
    );

  }
}

export default About;