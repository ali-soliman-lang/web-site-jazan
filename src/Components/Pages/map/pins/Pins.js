import React from "react";
import PinImg from "../../../../images/pin.png";
import "./Pins.css";

const Pins = ({ item }) => {
  return (
    <>
      <div className={`box box-${item.id}`}>
        <div className="pins-img">
          <img src={PinImg} alt="" />
        </div>
        <div className="hanging-poles">
          <span className="bar-one"></span>
          <span className="bar-two"></span>
        </div>
        <div className="data">
          <h6>استعمالات اراضى</h6>
          <div className="box-info" data-item="one">
            <p className="rate">{item.agricultural}%</p>
            <span className="bar">
              <span
                className="side"
                style={{ width: item.agricultural }}
              ></span>
            </span>
            <p className="name">زراعى</p>
          </div>
          <div className="box-info" data-item="two">
            <p className="rate">{item.residential}%</p>
            <span className="bar">
              <span className="side" style={{ width: item.residential }}></span>
            </span>
            <p className="name">سكنى</p>
          </div>
          <div className="box-info" data-item="three">
            <p className="rate">{item.commercial}%</p>
            <span className="bar">
              <span className="side" style={{ width: item.commercial }}></span>
            </span>
            <p className="name">تجارى</p>
          </div>
          <div className="box-info" data-item="four">
            <p className="rate">{item.industrial}%</p>
            <span className="bar">
              <span className="side" style={{ width: item.industrial }}></span>
            </span>
            <p className="name">صناعى</p>
          </div>
          <div className="box-info" data-item="five">
            <p className="rate ">{item.other}%</p>
            <span className="bar">
              <span className="side" style={{ width: item.other }}></span>
            </span>
            <p className="name">اخرى</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pins;
