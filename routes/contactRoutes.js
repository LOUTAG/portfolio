const nodemailer = require('nodemailer');
const keys = require('../config/keys');

module.exports = (app) => {
  app.post("/api/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    
    //create the mail
    const mail = {
        from: email,
        to: keys.gmailID,
        subject: `Contact Form Submission - ${name}`,
        html:`<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`,
    };

    //config nodemailer
    const contactEmail = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: keys.gmailID,
            pass: keys.gmailPassword
        }
    });

    //cheking
    contactEmail.verify((error)=>{
        if(error){
            console.log(error);
        }else{
            console.log("Ready to Send");
        }
    });

    //send it
    contactEmail.sendMail(mail, (error)=>{
        if(error){
            res.status(400).send(error);
        }else{
            res.send("Message sent");
        }
    });
  });
};
