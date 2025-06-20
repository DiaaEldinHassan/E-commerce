import React from "react"
import "./NewArrivals.css"
import new1 from "../../../assets/Clothes/NWomen.jpg"
import new2 from "../../../assets/Clothes/NMen.jpg"
import new3 from "../../../assets/Clothes/NKids.jpg"
import { Link } from "react-router-dom";

export default function NewArrivals()
{
    const newArrivals = [
        {
            id: 1,
            image: new1,
            name: "New Women's Collection"
        },
        {
            id: 2,
            image: new2,
            name: "New Men's Collection"
        },
        {
            id: 3,
            image: new3,
            name: "New Kids' Collection"
        }
    ]
    return (
        <div className="new-arrivals-container">
            <h1 className="my-8 mx-8">New Arrivals</h1>
            <div className="new-arrivals-items">
                   {
                    newArrivals.map((item) => (
                        <div className="new-arrivals-item" key={item.id}>
                            <div className="new-arrivals-image-wrapper">
                                <div className="new-arrivals-overlay">
                                    {item.name}
                                    <button><Link to="/products" style={{textDecoration: "none", color: "white"}}>Shop Now</Link></button>
                                </div>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <h3 className="new-arrivals-caption">{item.name}</h3>
                        </div>
                    ))
                   }
    
            </div>
        </div>
    )
}