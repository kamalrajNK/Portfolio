import React, { useRef } from "react";
import './contact.css';
import Walmart from '../../assets/walmart.png';
import FaceBook from '../../assets/facebook.png'
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import FaceBookIcon from '../../assets/facebook-icon.png';
import YouuTube from '../../assets/youtube.png';
import XSocialMedia from '../../assets/x-social-media-icon.png'
import Instagream from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = ()=>{

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xckaw09', 'template_xosjq3o', form.current, 'ZduWTP6DeJ2Xn3OZvm7uc')
          .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Email Sent ! ");
          }, (error) => {
                 console.log(error.text);
          });
      };
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPagTitel">My Clints</h1>
                <p className="clintsDec">
                    I have had the opportunity to work with a diverse group of companies 
                    some of notable companies i have worked with includes[NOTE this is all about show my skills i dont work with thes compines]

                </p>
                <div className="clintsImgs">
                    <img src={Walmart} alt="Walmart" className="clintesImg"/>
                    <img src={Adobe} alt="Adobe" className="clintesImg"/>
                    <img src={Microsoft} alt="Microsoft" className="clintesImg"/>
                    <img src={FaceBook} alt="FaceBook" className="clintesImg"/>
                </div>
            </div>
            <div id="contact">
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className="contactDesc">Please fill out the Form Below to disuss any work apportunities.</span>
                <form className="contactFarm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="from_name"/>
                    <input type="email"className="email" placeholder="Enter your Email" name="your_email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Opinion" ></textarea><br/>
                    <button type='submit' value='Send' className="submitbtn">Submit</button>
                    <div className="Links">
                        <img src={FaceBookIcon} alt="FaceBookIcon" className="link"/>
                        <img src={XSocialMedia} alt="XSocialMedia" className="link"/>
                        <img src={YouuTube} alt="YouTube" className="link"/>
                        <img src={Instagream} alt="Instagream" className="link"/>
                    </div>
                </form>
            </div>
        
        </section>
    )
}
export default Contact;