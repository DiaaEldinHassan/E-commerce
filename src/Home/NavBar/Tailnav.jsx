import React from "react";
import Drawer from "./Drawer/Drawer";
import "./Tailnav.css";
import navigation, { about, icons } from "./arrays.js";
import menu from "../../assets/menu.svg";
import exit from "../../assets/exit.svg";
import User from "./SignedCondition/User";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [state, setState] = React.useState(false);

  function openDrawer(e) {
    setState(!state);
    // Keep focus on the button after click

  }

 

  return (
    <div className="nav">
    <div className="tailNav">
      <div className="wraper">
        <div className="navBtn">
            {
              navigation.map((i, index) => {
                return (
                  i.name==="Contact"?<a href="#footer" key={index}>{i.name}</a>:
                  <Link to={i.href} key={index}>{i.name}</Link>
                );
              })
            }
        </div>
        <button
          onClick={openDrawer}
          className="drawerBtn lg:hidden md:hidden"
        >
          {state==false? <img src={menu} loading="lazy" alt="menu" />:<img src={exit} loading="lazy" alt="close" />}
        </button>
      </div>
      <div className="brand">
        <Link to="/" style={{textDecoration: "none", color: "black"}}><h3>e-Fashion</h3></Link>
      </div>
      {props.state==false?<div className="user">
        <button ><Link to="/products" style={{textDecoration: "none", color: "black"}}><img src={icons[0].URL} loading="lazy" alt="search" /></Link></button>
      </div>:null}
      <User state={props.state}/>
    </div>
    {state==false?null:<Drawer/>}
    </div>
  );
}
