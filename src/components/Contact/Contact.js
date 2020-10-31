import React from 'react';
import Navbar from '../Navbar/Navbar';
import emailjs from 'emailjs-com'
import './Contact.css'

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_nqem9sc', e.target, 'user_lXCrYTeKU7lV92HbtNAuO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center container-md">
                <div className="row mt-5  main-container">
                    <form className="form-container" onSubmit={sendEmail}>
                        <h1 style={{textAlign: 'center', fontSize: '50px', color: '#08fdd8'}} className="pb-3">Get in touch</h1>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control"aria-describedby="emailHelp" placeholder="Email" name="email"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Message" name="message"/>
                        </div>
                        <button type="submit" class="btn submit-btn form-control">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;