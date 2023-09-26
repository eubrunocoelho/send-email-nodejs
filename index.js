const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});

let mailOptions = {
    from: 'email@example.com',
    to: 'email@example.com',
    subject: 'Nodemailer & Node.JS',
    text: 'Hello, world!'
};

transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log('Error ' + err);
    } else {
        console.log('Email sent successfully');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}...`);
});