import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signup from "./signup.jpg";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    pass: "",
    cpass: "",
  });
  let name, value;

  const HandleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { fname, lname, phone, email, pass, cpass } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        fname,
        lname,
        phone,
        email,
        pass,
        cpass
      }),
    });
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("invalid Registration");
      console.log("invalid Registration");
    } else {
      window.alert(" Registration successfull");
      console.log(" Registration done");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="signup">
      <img src={signup} alt="sign up" className="signupimg" />
        <div className="sign">
          <h1 className="join"> Join with HAPPY TRIP</h1>
          <form method="POST" className="signupform">
            <label htmlFor="fname" className="Form">
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              autoComplete="off"
              value={user.fname}
              onChange={HandleInputs}
              placeholder="enter first name"
            />
            <br />
            <br />

            <label htmlFor="lname" className="Form">
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              autoComplete="off"
              value={user.lname}
              onChange={HandleInputs}
              placeholder="Enter last name"
            />
            <br />
            <br />

            <label htmlFor="phone" className="Form">
              phone no.
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              autoComplete="off"
              value={user.phone}
              onChange={HandleInputs}
              placeholder="Enter phone number"
            />
            <br />
            <br />

            <label htmlFor="email" className="Form">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              value={user.email}
              onChange={HandleInputs}
              placeholder="Enter email"
            />
            <br />
            <br />
            <label htmlFor="password" className="Form">
              password:
            </label>
            <input
              type="password"
              id="pass"
              name="pass"
              autoComplete="off"
              value={user.pass}
              onChange={HandleInputs}
              placeholder="Enter here"
            />
            <br />
            <br />

            <label htmlFor="cpassword" className="Form">
              Confirm password:
            </label>
            <input
              type="password"
              id="cpass"
              name="cpass"
              autoComplete="off"
              value={user.cpass}
              onChange={HandleInputs}
              placeholder="Confirm password"
            />
            <br />
            <br />
            <button className="sub" onClick={PostData}>
              Register
            </button>
            <button className="sub" id="sub">
              Reset
            </button>
          </form>
        </div>
         </div>
    </>
  );
};
export default Register;
