// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(
  cors({
    origin: "http://192.168.0.203:3000", // Adjust to match your frontend URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post("/api/contact", (req, res) => {
  const { subject, message, email, phone } = req.body;

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: "gmail", // or another service like 'yahoo', 'outlook'
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email || "no-reply@example.com",
    to: "sirenasadventures@gmail.com",
    subject: subject,
    text: `Message from ${email || phone}: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent successfully");
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
