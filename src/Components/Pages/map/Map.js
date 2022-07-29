import React from "react";
import Pins from "./pins/Pins";
import landOne from "../../../images/land-1.png";
import landTwo from "../../../images/land-2.png";
import "./Map.css";

const Map = () => {

    let classes = [ "One", "Two" , "Three" , "Four" , "Five" , "Six" , "Seven" , "Eight" , "Nine" , "Ten" , 
    "Eleven" , "Twelve" , "Thirteen" , "Fourteen" , "Fifteen" ,"Sixteen" ];
    
    

    return(
        <>
            <div className="img-container map-section">
                <div className="land">
                    <img src={landOne} alt="land one" className="one"/>
                    <img src={landTwo} alt="land two" className="two"/>
                    {classes.map((classItem, index) => <Pins key={index} classes={classItem} />) }
                </div>
            </div>
        </>
    );
}

export default Map;