import React from "react";
import "./footer.css";
import { account, company, social, help } from "./Footer Data";
import arrow from "../../assets/arrow.svg";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="col-wraper">
        <div className="footer-col">
          <h3 className="my-2">Account</h3>
          <ul >
            {account.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="my-2">Company</h3>
          <ul>
            {company.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="my-2">Help</h3>
          <ul>
            {help.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="my-2">Connect</h3>
          <ul>
            {social.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="email-input">
        <input type="email" className="text-lg " placeholder="Enter your email" />
        <button><img src={arrow} loading="lazy" alt="arrow" /></button>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",alignSelf: "center",margin: "1rem 0" }}>
      <p className="text-center text-sm " style={{color: "var(--BG)"}}>© 2025 E-Fashion. All rights reserved.</p>
      <p className="text-center text-sm ">Code by <a style={{color: "var(--BG)",textDecoration: "none"}} href="https://github.com/DiaaEldinHassan/E-commerce.git" target="_blank" rel="noopener noreferrer">DiaaEldinHassan</a></p></div>
    </div>
  );
}
