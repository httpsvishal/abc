import { useEffect, useState } from "react";

import Categories from "../../common/categories/categories";
import NavBar from "../../common/navbar/navbar";
import { useParams } from "react-router-dom"
import { GiConsoleController } from "react-icons/gi";
// import {useLocation} from 'react-router-dom'

// const styleObj = { width: 'fit-content', margin: '20px auto', padding: '16px', border: '1px solid red' }

const ProductSearch = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [result, setResult] = useState([]);
    // const location = useLocation();
    // const searchText = location.state.searchText;
    // console.log(searchText);
    // function searchFunc(e) {
    //     setSearchText(e.target.value);
    // }
    const { searchText } = useParams();
    console.log("hey");
    console.log(searchText);
    function filterProducts() {
        console.log("filterproducts called with ", searchText,"on data",allProducts);
        const temp = allProducts.filter(({ title }) => {
            return title.toLowerCase().includes(searchText.toLowerCase());
        })
        console.log(searchText);
        console.log("\n✅ : temp:", temp)
        console.log("\n✅ : allProducts:", allProducts)
        setResult(temp);
        console.log(temp);
    }

    // useEffect(() => {
    //     filterProducts();
    // }, [searchText]);

    useEffect(() => {
        fetch('http://localhost:1400/api/products')
            .then(res => res.json())
            .then((data) => {
                setResult(data);
                setAllProducts(data);
                console.log(data);
                console.log("before filter : ", searchText);
                filterProducts();
                console.log("after filter : ", searchText);
            })
            

    }, []);


    return (
        <>
            <NavBar />
            <Categories />
            {/* <input type="text" value={searchText} placeholder='Search Here' onChange={searchFunc}/>  */}
            {/* <button onClick={searchProducts}> Search </button> */}

            <div>
                <h3 style={{ textAlign: 'center' }}>
                    Amazon Products
                </h3>

                <div className="product-body">
                    <div className="product-filters">
                        <h3>Brands</h3>
                    </div>
                    <div className="product-list">
                        {
                            result.map((data) => {
                                return (
                                    <div className="product-card" key={data.id}>
                                        <div className="product-card-img">
                                            <img src={data.thumbnail} alt={data.title} />
                                        </div>
                                        <div className="product-card-content">
                                            <h3>{data.title}</h3>
                                            <div className="product-card-price">
                                                <p>M.R.P. {data.price}</p>
                                            </div>
                                            <div className="prime">
                                                <img src="https://m.media-amazon.com/images/G/31/perc/prime-logo.svg"></img>
                                            </div>
                                            <div className="delivery">
                                                <p>FREE delivery <b>Wed, 11 Apr</b></p>
                                                <p>Service: Installation</p>
                                                <p>Or fastest delivery <b>Tomorrow, 8 Apr</b></p>
                                            </div>
                                            <div className="stock">
                                                <p>{data.stock} left in stock.</p>
                                            </div>
                                            <div className="option">
                                                <a href="#">+3 colors/patterns</a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

            </div>

        </>
    )
};

export default ProductSearch;