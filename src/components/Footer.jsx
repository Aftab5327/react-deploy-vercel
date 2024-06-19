import React from 'react'
import  '../styles/Footer.css';
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
export const Footer = () => {
  return (
    <>
    <div className='footerContainer'>
        <div className='div1'>
          <h3>Registered Office</h3><br/>
          <p><b>Head Office: 401, Rohan Tower,</b></p>
          <p><b>Opp.Megamart,Old Pune-Mumbai Highway,</b></p>
          <p><b>Dapodi, Pune- 411012</b></p><br/>
          <p><span><b>GSTIN Number: 27AATCS4445F1ZY</b></span></p>
          </div>
        <div className='div2'>
          <h3>About Us</h3><br/>
          <ul><li><IoIosArrowForward color={'lightgray'}/> <Link to='/'>Home</Link></li></ul>
          <ul><li><IoIosArrowForward color={'lightgray'}/> <Link to='/aboutUs'>About Us</Link></li></ul>
          <ul><li><IoIosArrowForward color={'lightgray'}/> <Link to='/contacts'>Contact Us</Link></li></ul>
          <ul><li> <Link to='/contacts'></Link></li></ul>
          <ul><li> <Link to='/contacts'></Link></li></ul>
          <ul><li> <Link to='/contacts'></Link></li></ul>
          <ul><li> <Link to='/contacts'></Link></li></ul>
          <ul><li> <Link to='/contacts'></Link></li></ul>
        </div>
        <div className='div3'>
          <h3>Business Enquiry</h3><br/>
          <p><b>For inquiries contact:</b></p>
          <p><b>Email: marketing@sasengineering.in</b></p>
          <p><b>Phone: 9850418036</b></p><br/>
          <h5>Connect With US</h5>
          <div className="socialIconsDiv">
            <div className="icon">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube color='red' size={30}/>
              </a>
            </div>
            <div className="icon">
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
             <FaWhatsappSquare color='#25D366' size={25}/>
             </a>
            </div>
            <div className="icon">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <FaLinkedin color='#0A66C2' size={25} />
             </a>
            </div>
          </div>
        </div>
    </div>
    <div className="copyrightDiv">
          <p>Copyright 2024 &copy; SAS Engineering. All Rights Reserved.</p>
        </div>
    </>
  )
}
