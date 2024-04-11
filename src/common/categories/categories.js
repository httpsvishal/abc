import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">
            <Link to='/productSearch'>
                <div className="all-section">
                    <div className="all-icon">

                    </div>
                    <div className="all-text">
                        <b>All</b>
                    </div>
                </div>
            </Link>
            <div className="mini-tv">
                <b>Amazon miniTV</b>
            </div>
            <div className="sell-section">
                <b>Sell</b>
            </div>
            <div className="bestseller-section">
                <b>Bestseller</b>
            </div>
            <div className="mobiles-section">
                <b>Mobiles</b>
            </div>
            <div className="todaysdeals-section">
                <b>Today's Deals</b>
            </div>
            <div className="prime-section">
                <b>Prime</b>
            </div>
            <div className="customer-service-section">
                <b>Customer Service</b>
            </div>
            <div className="Electronics-section">
                <b>Electronics</b>
            </div>
            <div className="new-release-section">
                <b>New Releases</b>
            </div>
            <div className="Home-Kitchen-section">
                <b>Home & Kitchen</b>
            </div>
            <div className="Amazonpay-section">
                <b>Amazon Pay</b>
            </div>
            <div className="Fashion-section">
                <b>Fashion</b>
            </div>
            <div className="Gift-ideas-section">
                <b>Gift Ideas</b>
            </div>
            <div className="computers-section">
                <b>Computers</b>
            </div>
            <div className="books-section">
                <b>Books</b>
            </div>
            <div className="toys-section">
                <b>Toys & Games</b>
            </div>
        </div>
    )
};

export default Categories;