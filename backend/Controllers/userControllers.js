// import expressAsyncHandler from "express-async-handler";
// import User from "../Model/UserModel.js";
// import Story from "../Model/StoryModel.js";

// import mailgun from "mailgun-js";
// import generateToken from "../Utils/generateToken.js";
// import jwt from "jsonwebtoken";
// import crypto from "crypto";
// import fs from "fs";

const expressAsyncHandler =require("express-async-handler") ;
const User  =require("../Model/UserModel.js") ;
//const Story  =require( "../Model/StoryModel.js");

const mailgun  = require("mailgun-js") ;
const generateToken  = require("../Utils/generateToken.js") ;
const jwt  = require("jsonwebtoken") ;
const crypto  = require("crypto") ;
const fs  = require("fs");

const DOMAIN = "tvnetwork.io";
const mg = mailgun({
  apiKey: "de9a27721e5cfecb361283b6ac1dc1a9-29561299-c96b3191",
  domain: DOMAIN,
});

module.exports = getUsers = expressAsyncHandler(async (req, res) => {
  const firstname = req.query.firstname || "";
  const lastname = req.query.lastname || "";

  const firstnameFilter = firstname
    ? { firstname: { $regex: firstname, $options: "i" } }
    : {};
  const lastnameFilter = lastname
    ? { lastname: { $regex: lastname, $options: "i" } }
    : {};

  const users = await User.find({ ...firstnameFilter, ...lastnameFilter });

  if (users) {
    res.json(users);
  } else {
    throw new Error("Not Found");
  }
});

module.exports = getUserById = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    throw new Error("Not Found");
  }
});

module.exports = deleteUsers = expressAsyncHandler(async (req, res) => {
  await User.deleteMany();
  res.json("Users Deleted");
});

module.exports = upload = async (req, res) => {
  try {
    // to declare some path to store your converted image
    const path = __basedir + "/backend/images/" + Date.now() + ".png";

    const imgdata = req.body.base64image;

    // to convert base64 format into random filename
    const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, "");

    fs.writeFileSync(path, base64Data, { encoding: "base64" });

    return res.send(path);
  } catch (e) {
    console.log(e);
  }
};


module.exports = save = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const myStories = await Story.find({ user: req.user._id });

  if (user) {
    myStories.map((story) => {
      story.author.firstname = req.body.firstname || story.author.firstname;
      story.author.lastname = req.body.lastname || story.author.lastname;
      story.author.image = req.body.image || story.author.image;
      story.save();
    });
    user.firstname = req.body.firstname || user.firstname;
    user.lastname = req.body.lastname || user.lastname;
    user.age = req.body.age || user.age;
    user.region = req.body.region || user.region;
    user.image = req.body.image || user.image;
    user.email = req.body.email || user.email;
    // if (req.body.password) {
    //   if (req.body.password.length <= 7) {
    //     throw new Error("At least 8 chaaracters");
    //   }
    //   user.password = req.body.password;
    // }
    await user.save();

    res.json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      age: user.age,
      region: user.region,
      image: user.image,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

module.exports = register = expressAsyncHandler(async (req, res) => {
  const { firstname, lastname, age, region, email, password, image } = req.body;
  const path = __basedir + "/backend/images/" + Date.now() + ".png";

  const imgdata = image;

  // to convert base64 format into random filename
  const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, "");

  fs.writeFileSync(path, base64Data, { encoding: "base64" });

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  if (password.length <= 7) {
    throw new Error("At least 8 chaaracters");
  }
  const token = jwt.sign(
    { firstname, lastname, age, region, email, password, image },
    "secret",
    { expiresIn: "1h" }
  );
  const data = {
    from: "no-reply@tvnetwork.io",
    to: email,
    subject: "Verify Email",
    html: `
        <a href = 'http://localhost:3000/activate/${token}'>Confirm</a>
        `,
  };

  mg.messages().send(data, function (error, body) {});
  res.json("Email Sent");
});

module.exports= activateAccount = expressAsyncHandler(async (req, res) => {
  const { token } = req.body;

  if (token) {
    const decoded = await jwt.verify(token, "secret");
    if (!decoded) {
      throw new Error("Link expired");
    } else {
      const {
        firstname,
        lastname,
        age,
        region,
        image,
        email,
        password,
      } = decoded;
      const user = await User.findOne({ email });
      if (user) {
        throw new Error("User already exists");
      } else {
        const newUser = new User({
          firstname,
          lastname,
          age,
          region,
          image,
          email,
          password,
        });
        await newUser.save();
        res.json({
          _id: newUser._id,
          firstname: newUser.firstname,
          lastname: newUser.lastname,
          age: newUser.age,
          region: newUser.region,
          image: newUser.image,
          email: newUser.email,
          token: generateToken(newUser._id),
        });
      }
    }
  }
});

module.exports = login = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const stories = await Story.find({ user: user._id });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      age: user.age,
      region: user.region,
      image: user.image,
      email: user.email,
      followings: user.followings,
      followers: user.followers,
      isAuthor: user.isAuthor,
      // stories: stories,

      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

module.exports =updateProfile = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const myStories = await Story.find({ user: req.user._id });

  if (user) {
    myStories.map((story) => {
      story.author.firstname = req.body.firstname || story.author.firstname;
      story.author.lastname = req.body.lastname || story.author.lastname;
      story.author.image = req.body.image || story.author.image;
      story.save();
    });
    user.firstname = req.body.firstname || user.firstname;
    user.lastname = req.body.lastname || user.lastname;
    user.age = req.body.age || user.age;
    user.region = req.body.region || user.region;
    user.image = req.body.image || user.image;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      if (req.body.password.length <= 7) {
        throw new Error("At least 8 chaaracters");
      }
      user.password = req.body.password;
    }
    await user.save();

    res.json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      age: user.age,
      region: user.region,
      image: user.image,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

module.exports = userDelete = expressAsyncHandler(async (req, res) => {
  const user = await User.findOne(req.user._id);

  if (!user) {
    throw new Error("User not found");
  }
  await Story.find({ user: req.user._id }).deleteMany();
  await user.remove();

  res.json("User Deleted");
});

module.exports = userFollow = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.body.userId);

  const alreadyFollowed = user.followers.includes(req.user._id);

  if (alreadyFollowed) {
    res.json("Followed");
  }

  user.followers.push(req.user._id);
  const newUser = await user.save();

  const userFollower = await User.findById(req.user._id);
  userFollower.followings.push(req.body.userId);
  await userFollower.save();
  res.json("Followed");
});

module.exports = userUnfollow = expressAsyncHandler(async (req, res) => {
  User.findByIdAndUpdate(
    req.body.userId,
    {
      $pull: { followers: req.user._id },
    },
    {
      new: true,
    },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      User.findByIdAndUpdate(
        req.user._id,
        {
          $pull: { followings: req.body.userId },
        },
        { new: true }
      )
        .select("-password")
        .then((result) => {
          res.json("Unfollowed");
        })
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    }
  );
});

module.exports = resetPassword = expressAsyncHandler(async (req, res) => {
  crypto.randomBytes(32, async (err, buffer) => {
    if (err) {
      throw new Error(err);
    }
    const token = buffer.toString("hex");
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("User not found");
    }
    user.resetToken = token;
    user.expireToken = Date.now() + 3600000;
    const newUser = await user.save();
    const data = {
      from: "no-reply@tvnetwork.io",
      to: newUser.email,
      subject: "Reset Password",
      html: `
            <a href = 'http://localhost:3000/new-password/${token}'>Reset</a>
            `,
    };

    mg.messages().send(data, function (error, body) {});
    res.json("Please check your email");
  });
});

module.exports = newPassword = expressAsyncHandler(async (req, res) => {
  const { token, password } = req.body;

  const user = await User.findOne({
    resetToken: token,
    expireToken: { $gt: Date.now() },
  });
  if (!user) {
    throw new Error("Link expired");
  }
  user.password = password;
  user.resetToken = undefined;
  user.expireToken = undefined;
  await user.save();
  res.json("Password updated");
});
