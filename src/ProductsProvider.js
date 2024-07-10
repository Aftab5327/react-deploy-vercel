// ProductsContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ProductsContext = createContext();

export const useProducts = () => {
    return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dropdownProducts,setDropdownProducts] = useState([]);
    // console.log('encodeName is',encodedName)
    const fetchCategories = async () => {
        try {
            const response = await axios.get('https://sasecombackend02-git-main-nileshs-projects-68bb2634.vercel.app/categories');
            setCategories(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);
   

        const fetchProducts = async () =>{
            if (!categories) return;
            try {
                const productRequests = categories.map((category) => {
                    const encodeName = encodeURIComponent(category.name);
                    // console.log('encode Name is:', encodeName);
                    return axios.get(`https://sasecombackend02-git-main-nileshs-projects-68bb2634.vercel.app/categories/products/${encodeName}`);
                });
        
                const responses = await Promise.all(productRequests);
                const allProducts = responses.map(response => response.data);
                setDropdownProducts(allProducts); // Flatten the array if necessary
        
                // console.log('dropdown products is', allProducts);
            } catch (err) {
                console.log('Error in dropdown products is', err);
            }
        }
        useEffect(()=>{
            fetchProducts();
        },[categories])
    return (
        <ProductsContext.Provider value={{ categories, loading,dropdownProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};
