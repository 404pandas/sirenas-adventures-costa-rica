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
    origin: ["http://localhost:3000", "http://192.168.0.203:3000"], // Allow requests from both origins
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post("/api/contact", (req, res) => {
  const { message, firstName, lastName, startDate, endDate, email, phone } =
    req.body;

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: "gmail", // or another service like 'yahoo', 'outlook'
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },

    logger: true, // Add this line
    debug: true, // Add this line
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error("Error connecting to email service:", error);
    } else {
      console.log("Connected to email service:", success);
    }
  });

  const mailOptions = {
    from: email || "no-reply@example.com",
    to: "sirenasadventures@gmail.com",
    subject: subject,
    text: `Message from: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nStart Date: ${startDate}\nEnd Date: ${endDate}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send(`Error sending email: ${error.message}`); // Send error message back
    }
    res.status(200).send("Email sent successfully");
  });
});
// Hello world!
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
