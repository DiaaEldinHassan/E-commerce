import React from 'react'
import Head from "../../Home/Head/Head"
import Footer from "../../Home/Footer/Footer"
import './Buy.css'
import { useParams } from 'react-router-dom';
import products from "../ProductsList/ProductsList.json"

export default function Buy() {
  const { id } = useParams();
  const [favorite,setFavorite]=React.useState([]);
  console.log(favorite);
  return (
    <div className="buy-page">
        <Head />
        <div className="buy-container">
            
            <div className='buy-left'>
                <h2>Buying Product ID: {id}</h2>
            <img src={products[id].image} alt="Clothes Image" />
            <h3>{products[id].name}</h3>
            </div>
            <div className='buy-right'>
            <p>{products[id].description}</p>
            <p style={{color: "red",fontFamily: "Edu VIC WA NT Hand Pre"}}>$ {products[id].price}</p>
            <button>Buy</button>
            <button className='favorite-button' onClick={()=>setFavorite([...favorite,id])}>Favorite</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}