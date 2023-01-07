const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {

    let transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        service: 'smtp.hostinger.com',
        port: 587,
        secure: false,
        auth: {
            user: '${process.env.MAIL_USER}',
            pass: '${process.env.MAIL_PASSWORD}'
        }
    });
  
  const mailOptions = {
    from: 'alexandre@alexsantos.com.br',
    to: req.body.email,
    subject: 'Assunto do Email',
    text: req.body.message
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Ocorreu um erro ao enviar o email.');
    } else {
      console.log(`Email enviado: ${info.response}`);
      res.send('Email enviado com sucesso!');
    }
  });
});