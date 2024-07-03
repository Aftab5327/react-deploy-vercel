import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import '../styles/Subcategory.css';
import { Footer } from './Footer';
import { useCart } from '../CartContext';
import {useProducts} from '../ProductsProvider';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export const Subcategory = ({ toggleModal}) => {
    const { categories } = useProducts();
    // const category = categories.find(p => p.name === decodeURIComponent(p.name));
    // console.log("category is ===",category);
    // console.log("categories is:",categories)
    const { encodedName } = useParams();
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const { addToCart} = useCart();
    const navigate = useNavigate();
    const renderItem = products && products.map((product) => (
        
        <div className='cardContainer2' key={product.id}>
            
            <div className='content1'>
                <div className="image1">
                    <img src={`https://ecombackend03-git-main-nileshs-projects-68bb2634.vercel.app/uploads/${product.image_path}`} />
                </div>
            </div>
            <div className="categoryContainer">
                <p style={{textAlign:'center'}}><b>{product.product_name}</b></p>
                {/* <p>{product.category}</p> */}
                <p>{product.description}</p>
            </div>
            <div className="priceContainer">
                <p><b>₹ {product.price}</b></p>
                <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    ));

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://ecombackend03-git-main-nileshs-projects-68bb2634.vercel.app/products/${encodedName.toString()}`);
            setProducts(response.data);
            setLoading(false);
            // console.log("products =====>", response.data);
        } catch (error) {
            console.log("Error is", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [encodedName]);

    if (loading) {
        return null; 
    }

    return (
        <div className='mainContainer'>
           
    {/* <h1>{product.product_name}</h1> */}
             <div className='infoContainer'>
            <p><b>SAS Engineering</b></p>
            <p><b>Toll Free: 9850418036 | Email: <a href ="#">marketing@sasengineering.in</a> | GST Number: 27AATCS4445F1ZY</b></p>
        </div>
            <div className="container2">
            <div className="categoriesContainer">
                <h5>Browse Categories</h5>
                {
                    categories.map((item)=>(
                        <ul>
                            <li> <Link to={`/subcategory/${encodeURIComponent(item.name)}`}>
                                {item.name}
                            </Link>
                            </li>
                        </ul>
                    ))
                }
            </div>
            <div className="productsContainer2">
            {renderItem}
            </div>   
            </div>
            {/* <div className='footerContainer'>
                <Footer />
            </div> */}
        </div>
    );
}
