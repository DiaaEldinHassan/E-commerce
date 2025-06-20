import React from "react";
import "./LandingContent.css";
import FeaturedItems from "./FeaturedItems/FeaturedItems";
import NewArrivals from "./NewArrivals/NewArrivals";
import Section7 from "../../Home/About Us/Section7/Section7";
import { Link } from "react-router-dom";

export default function LandingContent() {
  return (
    <div className="landing-content">
        <div className="landing-content-head my-10">
            <div className="landing-content-head-text md:w-1/2 sm:w-full">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold my-0">Elevate Your Style</h1>
            <p className="text-lg">Discover the latest trends and styles in fashion</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md"><Link to="/products" style={{textDecoration: "none", color: "white"}}>Shop Now</Link></button>
            </div>
        </div>
        <FeaturedItems />
        <NewArrivals />
        <Section7 />
    </div>
  );
}
