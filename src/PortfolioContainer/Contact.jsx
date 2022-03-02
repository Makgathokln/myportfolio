import React from 'react'
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome,faBell, faUser, faBed, faUsers, faFolder } from '@fortawesome/free-solid-svg-icons';
import Contact2  from './images/contact2.jpg';

function Contact() {
  return (
    <div className='contact component__space' id="Contact">
        <div className="row">
            <div className="col__2">

                <div className="contact__box">
                    <div className="contact__meta">
                        <h1 className="hire__text">
                            Contact Me
                            </h1>      
                        <p className='hire__text white'>I am available for remote or freelance work.</p>    
                        {/* <p className='hire__text white'><strong>+27 247 6117</strong> or email <strong></strong></p>     */}
                                          </div>
                </div>

                <div className="input__box">
                <input type="text" className='contact name' placeholder='Leah Makgatho' disabled/>

                    <input type="text" className='contact email' placeholder='Makgathokln@gmail.com 079 247 6117' disabled/>
                
                    <input type="text" className='contact subject' placeholder='Application for Mobile App Developer Internship' disabled/>

                    <textarea name="message" id="message" placeholder='I hereby apply for the Mlab Mobile App Developer internship. I am interested in learning more frameworks, technologies and languages. I am also  interested in show casing my current skills that I have most in front end development.'></textarea>

                    <button className='btn contact pointer' type='submit'>Hire Me</button>
                
                </div>
            </div>

            <div className='col__2'>
                <img src={Contact2} alt="" className="contact__img" />
            </div>


        </div>
    </div>
  )
}

export default Contact