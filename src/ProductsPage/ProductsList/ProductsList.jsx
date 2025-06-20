import React from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";

export default function ProductsList(props) {
  return (
    <div className="products-list">
      <h1>Products List</h1>
      <div className="products-list-container">
        {props.products.map((product) => (
          <div className="product-card" key={product.id}>
            <img loading="lazy" src={product.image} alt={product.name} />
            <div className="product-card-info">
              <h3>{product.name}</h3>
              <p>$ {product.price}</p>
              {props.logged == false ? (
                <button>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                    className="text-xl"
                  >
                    Login first
                  </Link>
                </button>
              ) : (
                <>
                  {" "}
                  <button>
                   <Link to={`/buy/${product.id}`} style={{textDecoration: "none", color: "white"}} className="text-xl">Add to Cart</Link>
                  </button>
                  <button className="favorite-button">Favorite</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
