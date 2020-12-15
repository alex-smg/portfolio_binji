import React from 'react';
import './Contact.scss';
import InputText from '../../components/inputText/InputText';
import InputTextarea from '../../components/inputTextarea/InputTextarea';

const Contact = () => {
  const nodemailer = require("nodemailer");

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'b.humer.portfolio@gmail.com', // sender address
      to: "b.humer.portfolio@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
    return (
      <div id="contact">
          <div id="contact_title">
            <h2>Contact</h2>
          </div>
          <div id="contact_container">
            <div id="contact_inputs">
              <InputText name="name" label="Your Name"></InputText>
              <InputText name="email" label="Your email (required)"></InputText>
              <InputTextarea name="message" label="Message (required)" placeholder="Message..."></InputTextarea>
            </div>
            <div id="contact_button">
              <button className="btn_primary dark_button" onClick={() => main()}>send email</button>
            </div>
          </div>
      </div>
    );
}
  
export default Contact;
