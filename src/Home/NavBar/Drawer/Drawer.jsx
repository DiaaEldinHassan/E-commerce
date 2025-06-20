import React from "react";
import "./Drawer.css";
import navigation from "../arrays";
import { Link } from "react-router-dom";

export default function Drawer()
{
    return(
        <div className="drawer">
            {navigation.map((i,index)=>{
                return(
                    <Link to={i.href} key={index}>{i.name}</Link>
                )
            })}
        </div>
    )
}