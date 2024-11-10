const express = require("express");
const app = express();
const User = require("./models/User.schema");
const Scan = require("./models/Scan.schema");
require("dotenv").config();
app.use(express.json());
// load environment variables from .env file
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
var spawn = require("child_process").spawn;
const { Configuration, OpenAI } = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
});
const DIR = path.join(__dirname, "/images");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      cb(null, DIR);
    } catch (err) {
      cb(err, file.originalname);
    }
  },
  filename: (req, file, cb) => {
    try {
      // implement getLoggedInUser() method which basically returns the current logged in user
      cb(null, Date.now().toString() + file.originalname);
    } catch (err) {
      cb(err, file.originalname);
    }
  },
});

const upload = multer({ storage });

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/create-user", (req, res) => {
  const { name, email, address } = req.body;
  const newUser = new User({
    name: name,
    email: email,
    address: address,
    balance: 0,
  });

  newUser
    .save()
    .then(() => {
      res.json({
        message: "User created successfully!",
        user: newUser,
      });
    })
    .catch((err) => {
      res.json({
        message: "Error creating user",
        error: err,
      });
    });
});

app.post("/get-scans", (req, res) => {
  const email = req.body.email;

  Scan.find({ email: email })
    .then((scans) => {
      res.json({
        scans: scans,
      });
    })
    .catch((err) => {
      res.json({
        message: "Error retrieving scans",
        error: err,
      });
    });
});

app.post("/user", (req, res) => {
  const { email } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      res.json({
        user: user,
      });
    })
    .catch((err) => {
      res.json({
        message: "Error retrieving user",
        error: err,
      });
    });
});

// create a image upload hander and save the image in a folder called images/ use the multer package

app.post("/save-post", upload.single("photo"), (req, res) => {
  res.send("Success!");
});

app.post("/create-scan", (req, res) => {
  const { email, score } = req.body;

  // run receiptScanner.py to get the list of items on the receipt and store it in an array

  // fix the score calculations later
  score = 5;
  items = ["Apple", "Banana", "Orange"];
  const newScan = new Scan({
    email: email,
    score: score,
    amountSol: score / 100,
    items: items,
  });

  newScan
    .save()
    .then(() => {
      // find the user by email
      return User.findOne({ email });
    })
    .then((user) => {
      user.balance += score / 5;
      return user.save();
    })
    .then(() => {
      res.json({
        message: "Scan created successfully and balance updated!",
        scan: newScan,
      });
    })
    .catch((err) => {
      res.json({
        message: "Error creating scan",
        error: err,
      });
    });
});

app.post("/test-route", async (req, res) => {
  const output = [];
  var child = require("child_process").exec("python3 receiptScanner.py");
  child.stdout.on("data", function (data) {
    const strings = data.toString().split("\n");
    strings.forEach((string) => {
      if (string !== "") {
        output.push(string);
      }
    });
  });

  child.on("exit", function () {
    console.log("finished");
    console.log(output);

    async function fix() {
      const outputString = output.join(", ");
      console.log(outputString);

      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `Can you give me a really rough estimate of a general score estimate for how eco-friendly(out of 10) without knowing about any detailed information of the following grocery items. Look for general eco friendliness items. It doesn't have to be completely accurate. Try your best. You can't not write the correct output. It will destroy the project. So print the right output no matter what. If you don't give a random number from 1-10. Also spell correct it to what u think is right. Here is the list: ${outputString}`,
          },
        ],
        model: "gpt-3.5-turbo",
      });

      console.log(chatCompletion.choices[0].message.content);
      res.json(chatCompletion.choices[0].message.content);
    }
    fix();
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

const express = require('express');
const walletConnection = require('./walletConnection');

app.use('/api', walletConnection);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});