import React from "react";
import "./UpperBar.css";
import { about } from "../arrays";
import { Link } from "react-router-dom";

export default function UpperBar()
{
    return(
        <div className="upperBar">
            {about.map((i,index)=>{
                return(
                    <Link to={i.href} className="text-sm" key={index}>{i.name}</Link>
                )
            })}
        </div>
    )
}