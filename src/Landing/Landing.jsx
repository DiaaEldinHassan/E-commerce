import React, { useState } from "react";
import Head from "../Home/Head/Head"
import "./Landing.css";
import Footer from "../Home/Footer/Footer";
import LandingContent from "./LandingContent/LandingContent";

export default function Landing(props) {
    const [logged, setLogged] = useState(props.logged);
    return (
        <div className="landing-container">
            <Head logged={logged}/>
            <LandingContent />
            <Footer />
        </div>
    );
}