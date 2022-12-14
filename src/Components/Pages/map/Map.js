import React, { useEffect, useState } from "react";
import Pins from "./pins/Pins";
import landOne from "../../../images/land-1.png";
import landTwo from "../../../images/land-2.png";
import "./Map.css";

const Map = () => {
  const [data, setData] = useState([]);
  let classes = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
  ];

  useEffect(() => {
    fetch("https://marsad.almofawter.net/api/MapCities")
      .then((res) => res.json())
      .then((data) => {});
  }, []);

  return (
    <>
      <div className="img-container map-section">
        <div className="land">
          <img src={landOne} alt="land one" className="one" />
          <img src={landTwo} alt="land two" className="two" />
          {data.map((item, index) => (
            <Pins key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Map;
