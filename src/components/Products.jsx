import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../styles/Products.css';
import { Subcategory } from './Subcategory';

export const Products = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        try {
            const response = await axios.get('https://ecombackend03-git-main-nileshs-projects-68bb2634.vercel.app/categories');
            setProducts(response.data);
            setLoading(false);
            console.log("response data is ++++++------------ ",response.data);
        } catch (error) {
            console.log("Error is --------", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
         <h4 style={{textAlign:'center',marginTop:'1vh'}}><b>Categories</b></h4>
             <div className="container1" >
            
  {products && products.map((product) => {
    const encodedName = encodeURIComponent(product.name);
    const category = product.name;
    // console.log("category image is=====>",product.image_path)
    // console.log(encodedName);
    return (
      products && (
        < div className='productContainer'>
        <Link to={`/subcategory/${encodedName}`} className='cardContainer'>
          <div className='content'> 
            <p>{product.description}</p>
            <div className="image">
              <img 
                src={`https://ecombackend03-git-main-nileshs-projects-68bb2634.vercel.app/uploads/${product.image_path}`} 
                alt={product.id}
                onError={(e) => { e.target.src = '/assets/defaultImage.jpg' }}
              />
            </div> 
          </div>      
        </Link> 
        <p><b>{category}</b></p>
        </div>
                  )  
    );
  }
  )}
</div>

            </>
    );
};
