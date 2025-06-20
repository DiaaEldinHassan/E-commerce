import React from "react";
import "./productsBody.css";
import ProductsList from "../ProductsList/ProductsList.jsx";
import productsList from "../ProductsList/ProductsList.json";

export default function ProductsBody(props) {
    const [products, setProducts] = React.useState(productsList);
    const [search, setSearch] = React.useState("");
    const [category, setCategory] = React.useState("All");

    function handleSearchInput(e) {
        const value = e.target.value;
        setSearch(value);
        filterProducts(value, category);
    }

    function handleCategory(e) {
        const value = e.target.value;
        setCategory(value);
        filterProducts(search, value);
    }

    function filterProducts(searchValue, categoryValue) {
        let filtered = productsList;
        if (categoryValue !== "All") {
            filtered = filtered.filter(product => product.category === categoryValue);
        }
        if (searchValue.trim() !== "") {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchValue.toLowerCase())
            );
        }
        setProducts(filtered);
    }

    return (
        <div className="products-body">
            <div className="searchProducts">
                <input
                    type="search"
                    name="search"
                    id="search"
                    className="search-input"
                    placeholder="Search"
                    value={search}
                    onChange={handleSearchInput}
                />
                <div className="products-body-filter">
                    <button onClick={handleCategory} value="All">All</button>
                    <button onClick={handleCategory} value="Men">Men</button>
                    <button onClick={handleCategory} value="Women">Women</button>
                    <button onClick={handleCategory} value="Kids">Kids</button>
                </div>
                <ProductsList products={products} logged={props.logged} />
            </div>
        </div>
    );
}