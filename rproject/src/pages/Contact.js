import React, { useEffect, useState } from "react";
import B1 from "./contbg.jpg";

const Contact = () => {
  
  const [userData, setUserData] = useState({fname:'',lname:'', email:'', message:''});

  const callContact = async() => {
    try {
      const res = await fetch ("/getdata",{
        method: "GET",
        headers: {
          "Content-type": "application/json"
         },
      });
      const data = res.json();
      console.log(data);
      setUserData(data);

      if(!res.status===200) {
     const error = new Error(res.error);
      throw error;
     }
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
     callContact();
  },[]);

  const HandleInputs = (e) => {
    console.log(e);
    const name = e.target.name;
   const value = e.target.value;

    setUserData({ ...userData, fname:userData.fname, lname:userData.lname, email:userData.email });
  };

    return (
      <>
        <div className="contpage">
          <div className="contsub">
            <div className="contbg">
              <img
                src={B1}
                alt="this is background"
                height="160px"
                width="650px"
              />
              <div className="heading">Contact Us</div>
            </div>
            <form className="contform">
              <label htmlFor="fname" className="contlabel">
                First Name
              </label>
              <br />
              <input type="text" className="continp" value={userData.fname}></input>
              <br />
              <br />
              <label htmlFor="lname" className="contlabel">
                Last Name
              </label>
              <br />
              <input type="text" className="continp" value={userData.lname}></input>
              <br />
              <br />
              <label htmlFor="email" className="contlabel">
                Email
              </label>
              <br />
              <input type="text" className="continp" value={userData.email}></input>
              <br />
              <br />

              <label htmlFor="message" className="contlabel">
                Write Messege
              </label>
              <br />
              <textarea className="continp" id="continpmsg"></textarea>
              <br />
              <br />
            </form>
            <br />
            <input type="submit" id="submsg" value="Send" onClick={HandleInputs} />
          </div>
        </div>
      </>
    );
  }
export default Contact;
