// 11. config/emailConfig.js
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// module.exports = transporter;
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // Use Mailosaur host
  port: process.env.SMTP_PORT, // Use the correct port for TLS/SSL
  secure: false, // Set to true if using port 465 (SSL), false for 587 (TLS)
  auth: {
    user: process.env.EMAIL, // Mailosaur server ID
    pass: process.env.EMAIL_PASSWORD, // Mailosaur API key
  },
});

module.exports = transporter;
