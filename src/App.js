import React,{useState} from 'react'
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Products } from './components/Products';
import {CarouselSlider} from './components/CarouselSlider';
import { Brands } from './components/Brands';
import { Subcategory } from './components/Subcategory';
import {Router} from './components/Router';
import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import { Modal } from './components/Modal';
import { Cart } from './components/Cart';
import { CartProvider } from './CartContext';
import { ProductsProvider } from './ProductsProvider';
import { Contacts } from './components/Contacts';
import { AboutUs } from './components/AboutUs';
// import { Brands } from './components/Brands';
function App() {
  const {encodedName} = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleContactClick = (descriptions) => {
    const concatenatedDescriptions = descriptions.join(', ');
    setModalMessage(concatenatedDescriptions);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <BrowserRouter>
    <CartProvider>
      <ProductsProvider>
    <div className="App">
      <Navbar toggleModal={toggleModal} handleContactClick={handleContactClick}/>
      {/* <Navbar2/> */}
    <Routes>
    <Route path="/" element={<Router/>}/>
    <Route path="/subcategory/:encodedName" element={<Subcategory toggleModal={toggleModal}/>}/>
    <Route path = "/cart" element={<Cart handleContactClick={handleContactClick}/>}/>
    <Route path = "/contacts" element = {<Contacts/>}/>
    <Route path = "/aboutUs" element = {<AboutUs/>}/>
     </Routes> 
     {isModalOpen && <Modal message={modalMessage} onClose={handleCloseModal} />}
     <Footer/>
    </div>
    </ProductsProvider>
    </CartProvider>
    </BrowserRouter>
    
  );
}

export default App;
