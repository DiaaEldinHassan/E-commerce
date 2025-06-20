import React from "react";
import "./Section7.css";
import img from "../../../assets/optimized/explore1.jpg";
import img2 from "../../../assets/optimized/explore2.jpg";
import img3 from "../../../assets/optimized/explore3.jpg";
import { Link } from "react-router-dom";

export default function Section7() {
  const explore = [
    {
      img: img,
      title: "Our Products",
      link: "/products"
    },
    {
      img: img2,
      title: "Our Stores",
      link: "/stores"
    },
    {
      img: img3,
      title: "Career",
      link: "/aboutUs"
    },
  ];
  return (
    <div className="section7">
      <h3 className="text-2xl md:text-2xl font-normal lg:text-4xl my-5">More to explore</h3>
      <div className="explore">
        {explore.map((item, index) => (
        <div className="explore-item" key={index}>
            <div className="explore-img">
              <img src={item.img} loading="lazy" alt={item.title} />
              <Link to={item.link} className="explore-btn">{item.title}</Link>
            </div>
           <p className="text-sm md:text-base lg:text-lg my-3">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
