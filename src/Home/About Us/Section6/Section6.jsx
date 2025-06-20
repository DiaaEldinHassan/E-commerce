import React from "react";
import "./Section6.css";
import img from "../../../assets/optimized/Sec6.jpg";

export default function Section6() {
  return (
    <div className="section6" id="section6">
      <img src={img} loading="lazy" alt="Section 6" />
      <div className="sec6Text">
        <div>
        <p className="text-sm md:text-base lg:text-lg">OUR MISSION</p>
        <h1 className="text-2xl md:text-2xl lg:text-4xl my-0">Our mission is to create a better world.</h1>
        <h6 className="text-sm md:text-base lg:text-lg my-3">
          We believe in creating a better world through our products and our actions. We are committed to sustainability, ethical manufacturing, and transparency in everything we do.
        </h6>
        </div>
      </div>
    </div>
  );
}
