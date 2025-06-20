import React from "react";
import "./User.css";
import { icons } from "../arrays";
import { Link } from "react-router-dom";

export default function User(props)
{
    const [state,setState]=React.useState(props.state);
    return(
        state ? (
            <div className="user">
                {icons.map((i, index) => {
                    return (
                        <Link to={i.href} key={index} style={{textDecoration: "none", color: "black"}}>
                            <button key={index}>
                                <img key={index} src={i.URL} loading="lazy" alt={i.name} />
                            </button>
                        </Link>
                    );
                })}
            </div>
        ) : null
    )
}