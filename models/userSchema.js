const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  cpass: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// hashing the password
// here userSchema is the instance of mongoose

userSchema.pre("save", async function (next) {
  console.log("Hi from inside");

  if (this.isModified("pass")) {
    console.log('Hi I am pre pass')
    this.pass = await bcrypt.hash(this.pass, 12);
    this.cpass = await bcrypt.hash(this.cpass, 12);
  }
  next();
});

// generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat([{ token: token }]);
    await this.save();
     return token;

  } catch (err) {
    console.log(err);
  }
};

//collection creation
const User = mongoose.model("USER", userSchema);
module.exports = User;
