const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

let mailOptions = {
    from: '"Your Name" <your-email@example.com>',
    to: 'alexmcs@gmail.com',
    subject: 'Subject',
    text: 'Text',
    html: '<b>HTML</b>'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});