import React from "react";
import "./Section4.css";
import img from "../../../assets/optimized/Sec4.jpg";

export default function Section4() {
  return (
    <div className="section4" id="section4">
      <div className="sec4Text">
        <div>
        <p className="text-sm md:text-base lg:text-lg">OUR QUALITY</p>
        <h1 className="text-2xl md:text-2xl lg:text-4xl my-0">Designed to last.</h1>
        <h6 className="text-sm md:text-base lg:text-lg my-3">
          At Everlane, we're not big on trends. We want you to wear our pieces
          for years, even decades, to come. That's why we source the finest
          materials and factories for our timeless products— like our Grade-A
          cashmere sweaters, Italian shoes, and Peruvian Pima tees.
        </h6>
        </div>
      </div>
      <img src={img} loading="lazy" alt="clothes" />
    </div>
  );
}
