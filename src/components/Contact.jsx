import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
      data-aos="zoom-in-up"
             data-aos-duration="1000"
      >
        <a href='https://www.instagram.com/unknown_abhishek_?igsh=djJ1NnRlNWFpbmc3&utm_source=qr' target='_blank' className="items">
          <FaInstagramSquare className='icons' />
        </a>
        <a href='https://www.facebook.com/share/qo9q2kct8G4cCqdE/?mibextid=kFxxJD' target='blank' className="items">
          <FaFacebook/>
        </a>
        <a href='https://www.linkedin.com/in/abhishek-nishad-9b0251234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='blank' className="items">
          <FaLinkedin className='icons' />
        </a>
        <a href='http' className="items">
          <FaXTwitter className='icons' />
        </a>
        <a href='https://github.com/abhisheknishad23' target='blank' className="items">
          <FaGithub className='icons' />
        </a>
        <a href='mailto:iabhisheku4@gmail.com' target='blank' className="items">
          <BiLogoGmail className='icons' />
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact