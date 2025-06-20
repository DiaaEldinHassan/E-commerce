import React from 'react';
import "./Store.css";
import Navbar from '../Home/NavBar/Tailnav';
import Footer from '../Home/Footer/Footer';
import Stores from './Stores/Stores.jsx';
import SignBar from '../Home/NavBar/SignUpBar/SignBar';
import UpperBar from '../Home/NavBar/UpperNav/UpperBar';
import Head from '../Home/Head/Head';

export default function Store(props) {
    return (
        <div>
            <Head logged={props.logged}/>
            <Stores />
            <Footer />
        </div>
    )
}