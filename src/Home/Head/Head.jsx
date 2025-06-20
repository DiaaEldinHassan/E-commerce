import React from "react";
import "./Head.css";
import Navbar from "../NavBar/Tailnav";
import SignBar from "../NavBar/SignUpBar/SignBar";
import UpperBar from "../NavBar/UpperNav/UpperBar";


export default function Head(props)
{ 
    return(
        <div className="head">
            {props.logged===false?<SignBar/>:null}
            <Navbar state={props.logged}/>
            <UpperBar/>
        </div>
    )
}