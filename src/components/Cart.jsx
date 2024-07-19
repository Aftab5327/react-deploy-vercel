import React, { useState } from 'react';
import '../styles/Cart.css';
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import { MdDelete } from "react-icons/md";
import { Modal } from './Modal';

export const Cart = ({handleContactClick}) => {
    const { cartItems, clearCart, incrementFromCart, decrementFromCart, removeFromCart } = useCart();
    const navigate = useNavigate();
    console.log("cartItems is:",cartItems)
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleShopNowClick = () => {
        navigate('/');
    };

    const handleContactButtonClick = () => {
        const descriptions = cartItems.map(item => item.description);
        handleContactClick(descriptions);
      };

    const handleCloseModal = () => {
        setModalOpen(!isModalOpen);
    };
    return (
        <div className='cartContainer1'>
            
            {cartItems.length > 0 ? (
                <div>
                     <div className='infoContainer'>
            <p><b>SAS Engineering</b></p>
            <p><b>Toll Free: 9850418036 | Email: <a href ="#">marketing@sasengineering.in</a> | GST Number: 27AATCS4445F1ZY</b></p>
        </div>
                    <div className="cartHeading1">
                        <h1>Cart</h1>
                        <div className='infoButtonDiv'><button onClick={clearCart}><MdDelete/> Clear Cart </button>
                        <button onClick={handleContactButtonClick}>Get Quote</button>
                        </div>
                    </div>
                    {cartItems.map((product, index) => (
                        <div className='cardContainerCart' key={product.id}>
                            <div className='content1'>
                                <div className="image1">
                                    <img src={`https://ecombackend1-git-main-nileshs-projects-68bb2634.vercel.app/uploads/${product.image_path}`} />
                                </div>
                            </div>
                            <div className="categoryContainer">
                                <p style={{ textAlign: 'center' }}><b>{product.product_name}</b></p>
                                <p>{product.category}</p>
                                <p>{product.description}</p>
                            </div>
                            <div className="priceContainer">
                                <p><b>₹ {product.price}</b></p>
                                <div className='cartButton'>
                                    <button onClick={() => decrementFromCart(product.id)}  disabled ={product.count<=1}>-</button>
                                    <div className='displayCounter'>{product.count}</div>
                                    <button onClick={() => incrementFromCart(product.id)}>+</button>
                                    <button onClick={() => removeFromCart(product.id)} style={{backgroundColor:'red'}}><MdDelete /></button>
                                </div>
                            </div>
                           
                        </div>
                        
                    ))}
                     
                </div>
            ) : (
                <div className='basketContainer'>
                    <PiShoppingCartSimpleBold size={150} color={'red'} />
                    <p><b>You have no items in your cart</b></p>
                    <button onClick={handleShopNowClick}>Shop Now</button>
                </div>
            )}
            {/* <Footer /> */}
            {isModalOpen && <Modal message={modalMessage} onClose={handleCloseModal} />}
        </div>
    );
};
