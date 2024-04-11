import "./App.css";
import Homepage from "./pages/homepage/homepage.jsx";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Productpage from './pages/productpage/index';
import ProductSearch from "./pages/productsearch/index.js";
import Navbar from "./common/navbar/navbar.js";

const App = () => {
    return (
        <div>

            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="productSearch/:searchText" element={<ProductSearch />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;