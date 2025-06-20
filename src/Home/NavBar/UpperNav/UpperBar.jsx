import React from "react";
import "./UpperBar.css";
import { about } from "../arrays";

export default function UpperBar()
{
    return(
        <div className="upperBar">
            {about.map((i,index)=>{
                return(
                    <a href={i.href} className="text-sm" key={index}>{i.name}</a>
                )
            })}
        </div>
    )
}