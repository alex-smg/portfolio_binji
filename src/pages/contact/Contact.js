import React, { useState } from 'react';
import './Contact.scss';
import InputText from '../../components/inputText/InputText';
import InputTextarea from '../../components/inputTextarea/InputTextarea';
import emailjs from 'emailjs-com';


const Contact = () => {
  
  emailjs.init("user_PPiLZm7I7XzgFp7VDRKWM");

  const [messageState, setMessageState] = useState(
    {
      name: '',
      email: '',
      message: '',
    }
  )
  const [errorState, setErrorState] = useState(
    {
      errorName: '',
      errorEmail: '',
      errorMessage: '',
    }
  )

  const changeValue = (emp, value) => {
    setMessageState(prevState => {
      return { ...prevState, [emp] : value }
    });
  }

  var templateParams = {
    from_name: messageState.name,
    email: messageState.email,
    message: messageState.message,
};

const checkForm = () => {
  if (messageState.name === '' || messageState.email === '' || messageState.message === '') {
    if (messageState.name === '') {
      setErrorState(prevState => {
        return { ...prevState, errorName: 'Please fill in this field' }
      });
      console.log(errorState);
    }
    if (messageState.email === '') {
      console.log('2');
      setErrorState(prevState => {
        return { ...prevState, errorEmail: 'Please fill in this field' }
      });
    }
    if (messageState.message === '') {
      console.log('3');
      setErrorState(prevState => {
        return { ...prevState, errorMessage: 'Please fill in this field' }
      });
    }
    return false;
  } else {
    return true;
  }
}

 const sendMail = (e) => {
    e.preventDefault();
    console.log(checkForm());
    if (checkForm()) {
      emailjs.send('service_onz34mv', 'template_70l0c4m', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
      });
    }
 }

  return (
    <div id="contact">
        <div id="contact_title">
          <h2>Contact</h2>
        </div>
        <form onSubmit={(e) => sendMail(e)}>
          <div id="contact_container">
            <div id="contact_inputs">
              <InputText type="text" name="name" changeValue={changeValue} error={errorState.errorName} label="Your Name"></InputText>
              <InputText type="email" name="email" changeValue={changeValue} error={errorState.errorEmail} label="Your email (required)"></InputText>
              <InputTextarea name="message" label="Message (required)" changeValue={changeValue} error={errorState.errorMessage} placeholder="Message..."></InputTextarea>
            </div>
            <div id="contact_button">
              <button className="btn_primary dark_button" type='submit' >send email</button>
            </div>
          </div>
        </form>
    </div>
  );
}
  
export default Contact;
