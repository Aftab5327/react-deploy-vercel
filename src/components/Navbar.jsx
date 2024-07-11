import React,{useState} from 'react'
import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import { useProducts } from '../ProductsProvider';
import { IoIosArrowForward } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import axios from 'axios';

export const Navbar = ({handleContactClick}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [dropdownProducts, setDropdownProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();
  const { cartItems, getTotalItemCount } = useCart();
  const { categories } = useProducts();
  const totalItemCount = getTotalItemCount();

  const handleContactButtonClick = () => {
    const descriptions = cartItems.map(item => item.description);
    handleContactClick(descriptions);
  };

  const fetchProducts = async (categoryName) => {
    try {
      const response = await axios.get(`https://sasecombackend02-git-main-nileshs-projects-68bb2634.vercel.app/products/${encodeURIComponent(categoryName)}`);
      setDropdownProducts(response.data);
      console.log("response is", response.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    if (categoryName) {
      navigate(`/subcategory/${encodeURIComponent(categoryName)}`);
    } else {
      navigate('/');
    }
  };

  const handleDropdownChange = (event) => {
    const categoryName = event.target.value;
    setSelectedCategory(categoryName);
    setShowCategories(true);
    if (categoryName) {
      fetchProducts(categoryName);
    } else {
      setDropdownProducts([]);
    }
  };

  return (
    <div className='navContainer'>
      <div className="navContainer1">
      <div className="imageContainer1">
      <img src="/assets/sas.png" alt="logo" />
      </div>
      <div className="inputBox">
      <div id="categoryDiv">
            <select onChange={handleCategoryChange} id="selectTag" defaultValue="">
              <option value="">All Categories</option>
              {categories && categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <input type="text" placeholder='Search product, category or brand' />
          <div className='iconDiv'>
            <IoSearchSharp id='searchIcon1' size={20}/>
          </div>
      </div>
      <div className="cartContainer">
      <Link to='/cart'>
            <FaShoppingCart size={30} color={'black'} className='cartIcon' />
            {totalItemCount > 0 && <span className='cartTotal'>{totalItemCount}</span>}
          </Link>
          <div> <button onClick={handleContactButtonClick} id='quoteButton'>Get Quote</button><br/>
          {/* <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
            </div> */}
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div id="bar"></div>
            <div id="bar"></div>
            <div id="bar"></div>
          </div>
      </div>
      </div>
      
      <div className="menuContainer">  
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
      {menuOpen && 
      <div className="cartIconDiv1">
        <Link to='/cart'>
      <FaShoppingCart size={30} color={'black'} id='cartIcon1' />
      {totalItemCount > 0 && <span id='cartTotal1'>{totalItemCount}</span>}
    </Link>
      </div>
      
      }
          <ul>
          {menuOpen && <li  onClick={handleContactButtonClick}><a href="#new">Get Quote</a></li>}
            <li><a href="/">Home</a></li>
            <li><a href="/aboutUs">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="/contacts">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
