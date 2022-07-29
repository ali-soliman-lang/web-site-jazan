import React from "react";
import PinImg from "../../../../images/pin.png";
import './Pins.css';


const Pins = (props) => {

    return (
        <>
            <div className={`box ${props.classes}`}>
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
                        <p className="rate">25%</p>
                        <span className="bar"><span className="side" style={{width : "25%"}}></span></span>
                        <p className="name">زراعى</p>
                    </div>
                    <div className="box-info" data-item="two">
                        <p className="rate">30%</p>
                        <span className="bar"><span className="side" style={{width: "30%"}}></span></span>
                        <p className="name">سكنى</p>
                    </div>
                    <div className="box-info" data-item="three">
                        <p className="rate">50%</p>
                        <span className="bar"><span className="side" style={{width: "50%"}}></span></span>
                        <p className="name">تجارى</p>
                    </div>
                    <div className="box-info" data-item="four">
                        <p className="rate">25%</p>
                        <span className="bar"><span className="side" style={{width: "25%"}}></span></span>
                        <p className="name">صناعى</p>
                    </div>
                    <div className="box-info" data-item="five">
                        <p className="rate ">45%</p>
                        <span className="bar"><span className="side" style={{width: "45%"}}></span></span>
                        <p className="name">اخرى</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pins;