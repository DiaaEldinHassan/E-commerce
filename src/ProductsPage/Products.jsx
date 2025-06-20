import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import Head from "../Home/Head/Head.jsx";
import ProductsBody from "./Products/ProductsBody.jsx";
import Footer from "../Home/Footer/Footer.jsx";

export default function Products(props) {
   
    return (
        <div className="products-page">
            <Head logged={props.logged} />
            <ProductsBody logged={props.logged}/>
            <Footer />
        </div>
    )
}