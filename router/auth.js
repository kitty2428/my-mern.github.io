const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../models/userSchema");


//Using promises

// router.post('/register',(req, res) => {
//   //object destructuring
//   const { fname, lname, email, phone, pan, pass, cpass } = req.body;

//   if (!fname || !lname || !email || !phone ||  !pan || !pass || !cpass) {
//     return res.status(422).json({ error: "plz fill all the fields" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "already registered" });
//       }
//       const user = new User({
//         fname,
//         lname,
//         email,
//         phone,
//         pan,
//         pass,
//         cpass,
//       });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "registration successfull" });
//         })
//         .catch((err) => res.status(500).json(err));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//async and await
router.post("/register", async (req, res) => {
  //object destructuring
  const { fname, lname, email, phone, pass, cpass } = req.body;

  //condition if any field is not get filled
  if (!fname || !lname || !email || !phone || !pass || !cpass) {
    return res.status(422).json({ error: "plz fill all the fields" });
  }

  try {
    //wait for user whether registered or not
    const userExist = await User.findOne({ email:email, pass:pass });
    if (userExist) {
      //if registered then return
      return res.status(422).json({ error: "already registered" });
    } else if (pass != cpass) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      //if not registered then get the data in variable
      const user = new User({
        fname,
        lname,
        email,
        phone,
        pass,
        cpass
      });
      //secure password first by creating the middleware and then saving data

      await user.save(); // and save it in the new variable
      //if the it is saved then return the message
      return res.status(201).json({ message: "registration successfull" });
    }
  } catch (err) {
    console.log(err);
  }
});

//login route

router.post("/login", async (req, res) => {
  try {

    let token;
    const { email, pass } = req.body;

    if (!email || !pass) {
      return res.status(400).json({ error: "please fill the data" });
    }
    const userLogin = await User.findOne({ email: email });

    //console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(pass, userLogin.pass); //wait to match the pass with db pass

     token = await userLogin.generateAuthToken(); //generate token
      console.log(token);

      //and then store the token in cookies using cookie() method
      res.cookie('jwtoken',token,{
        expires:new Date(Date.now() + 25892000000),   // when to expire
        httpOnly:true  // where to add?  here, we are adding cookie at http 
      });
      res.cookie("jwtoken","login");
      if (!isMatch) {
        res.status(400).json({ error: "User error password " });
      } else {
        res.json({ message: "User logged in successfully " });
      }
    } else {
      res.status(400).json({ error: "User invalid " });
    }
  } catch (err) {
    console.log(err);
  }
});
//about us page

router.get('/about', authenticate,(req,res) => {
    console.log('hello');
       res.send(req.rootUser);
 });
  
 //get user data in contact and home page
 router.get('/getdata', authenticate,(req,res) => {
  console.log('hello');
  res.send(req.rootUser);
 })

module.exports = router;
