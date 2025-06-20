import React from "react";
import Section2 from "./Section2/section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import Section7 from "./Section7/Section7";
import "./about.css";

export default function About() {
  return (
    <div className="sections">
    <div className="section1">
      <p>
        At Everlane, we want the right choice to be as easy as putting on a
        great T-shirt. That's why we partner with the best, ethical factories
        around the world. Source only the finest materials. And share those
        stories with you—down to the true cost of every product we make. It's a
        new way of doing things. We call it Radical Transparency.
      </p>
    </div>
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    </div>
  );
}
