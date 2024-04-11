import React from "react";
import AmazonLogo from "../amazon-logo/amazon-logo.js";
import { Link , useNavigate} from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import "./navbar.css";
import { useState,useEffect } from "react";
import "react-router-dom";



const Navbar = () => {
    const [searchText, setSearchText] = useState('');
    // const [shouldNavigate, setShouldNavigate] = useState(false);
    const navigate = useNavigate();
    const handleChange = (event) => {
          setSearchText(event.target.value);
          console.log(searchText);
    };
    // useEffect(()=>{
    //     if (searchText !== '') {
    //         navigate('/products', { state: { searchText: searchText } });
    //     }
    // }, [searchText]);
    
    const handleSubmit = (event) => {
            event.preventDefault();
            navigate(`/productSearch/${searchText}` );
    };
    // useEffect(() => {
    //     if (shouldNavigate) {
            
    //         setShouldNavigate(false); // reset to false after navigation
    //     }
    // }, [shouldNavigate, searchText]);
    
    
    return (
        <div className="navbar">
            <Link to="/">
                <div className="logo-container">
                    {AmazonLogo}<span>.in</span>
                </div>
            </Link>
            <div className="location-container">
                <div className="location-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height={18} width={15} viewBox="0 0 384 512"> <path fill="#ffffff" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                </div>
                <div className="location-text">
                    <div className="location">Delivering to Dehradun 248197</div>
                    <div className="update-location">Update location</div>
                </div>
            </div>
            <div className="searchbar">
                <form onSubmit={handleSubmit}>
                    <div className="search-drop-box">
                        <select>
                            <option selected="">All</option>
                        </select>
                    </div>
                    <input 
                    type="text"
                    value = {searchText} 
                    placeholder="Search Amazon.in" 
                    onChange={handleChange} 
                    />
                    <button type="submit">
                        <IoMdSearch />
                    </button>
                </form>
                    
                
                
            </div>
            <div className="select-language">

            </div>
            <div className="account-section">
                Hello, sign in
                <br />
                <b> Account & Lists</b>
            </div>
            <div className="order-section">
                Returns
                <b>&orders</b>
            </div>
            <div className="cart-section">
                <div className="cart-count">

                </div>
                <div className="cart-icon">

                </div>
                <div className="cart-text">
                    <b>Cart</b>
                </div>
            </div>
        </div>

    )
};
export default Navbar;
