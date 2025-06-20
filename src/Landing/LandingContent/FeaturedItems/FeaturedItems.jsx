import React from "react";
import "./FeaturedItems.css";
import img1 from "../../../assets/optimized/Women.jpg";
import img2 from "../../../assets/optimized/Men.jpg";
import img3 from "../../../assets/optimized/Kids.jpg";
import { Link } from "react-router-dom";

export default function FeaturedItems() {
    const images=[{image:img1,text:"Women's Wear"},{image:img2,text:"Men's Wear"},{image:img3,text:"Kids' Wear"}];
    return (
        <div className="featured-items">
            <h1 className="text-4xl font-bold my-0 mx-8">Featured Items</h1>
            <div className="featured-images">
              {images.map((i, index)=>{
                return <div className="images" key={index}>
                    <div className="image-container">
                        <img src={i.image} loading="lazy" alt="Featured Item" />
                        <div className="image-overlay">
                            <p className="overlay-text">{i.text}</p>
                            <button className="overlay-button"><Link to="/products" style={{textDecoration: "none", color: "white"}}>Shop Now</Link></button>
                        </div>
                    </div>
                    <p className="text-lg font-bold image-text">{i.text}</p>
                </div>
              })}  
            </div>
        </div>
    );
}