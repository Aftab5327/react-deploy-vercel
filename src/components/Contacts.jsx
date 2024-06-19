import React,{useState} from 'react'
import '../styles/Contacts.css';
import { Footer } from './Footer';
import { Modal } from './Modal';
export const Contacts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className='contactsContainer'>
        {/* <Modal/> */}
        <h2>Contact Us</h2>
        <div className='addressContainer'>
           
            <h5>Ecommerce Online Order Support</h5>
            <p><b>Email:</b> sasengineering@gmail.com</p>
            <p><b>For Online Order Realated Queries:</b> 7666299405</p>
            <p><b>To get Quote click here: <span onClick={handleOpenModal} className='clickable'>Click Here</span></b></p>
            <div className='dividerDiv'></div>
            <h4>Corporate Office - Pune</h4>
            <p><b>Address:</b> Shree Sant Dnyaneshwar Industrial Estate Plot 59,58, Unit no 08,
            Near Mohanagar Police Chowki, Mohan Nagar Main Rd, D-II Block, MIDC, Chinchwad Maharashtra 411019
            </p>
            <p><b>Phone:</b> 7756869619</p>
            <p><b>Email:</b> Contact@SasAutomation.in</p>
            <p><b>Gst No:</b> 27AATCS4445F1ZY</p>
        </div>
      {/* <Footer/> */}
      {isModalOpen && <Modal message="Please provide your details for a quote" onClose={handleCloseModal} />}
    </div>
  )
}
