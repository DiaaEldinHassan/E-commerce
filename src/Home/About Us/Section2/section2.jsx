import React from "react";
import "./section2.css";
import img from "../../../assets/optimized/Sec2.jpg"

export default function Section2() {
  return (
    <div className="section2" id="section2">
      <img src={img} loading="lazy" alt="Woman working" />
      <div className="sec2Text">
        <div>
        <p className="text-sm md:text-base lg:text-lg">OUR FACTORIES</p>
        <h1 className="text-2xl md:text-2xl lg:text-4xl my-0">Our ethical approach</h1>
      <h6 className="text-sm md:text-base lg:text-lg my-3">
        We spend months finding the best factories around the world—the same
        ones that produce your favorite designer labels. We visit them often and
        build strong personal relationships with the owners. Each factory is
        given a compliance audit to evaluate factors like fair wages, reasonable
        hours, and environment. Our goal? A score of 90 or above for every
        factory.
      </h6></div></div>
    </div>
  );
}
