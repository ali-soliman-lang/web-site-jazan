import React from "react";
import "./Jazan-tab.css";
import Jazanimgone from "../../../images/ggen.jpg";
import Jazanimgtwo from "../../../images/gnat.jpg";
import Jazanimgthree from "../../../images/gold.jpg";
import "bootstrap/js/dist/tab";
const JazanTab = ({ arialabelledby, classess, id, role, tabindex }) => {
  return (
    <div
      className={`container ${classess}`}
      id={id}
      aria-labelledby={arialabelledby}
      role={role}
      tabIndex={tabindex}
    >
      <div className="tab_head">
        <h2>منطقة جازان</h2>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <img
            src={Jazanimgone}
            alt="الملامح الاساسية"
            className="img-fluid w-100 rounded  rounded-4 shadow img-jazan"
          />
          <p className="mb-3 mt-3 fs-5 text-center text-jazan">
            الملامح الاساسية
          </p>
        </div>
        <div className="col-12 col-md-4 ">
          <img
            src={Jazanimgtwo}
            alt="الخصائص الطبيعية"
            className="img-fluid w-100 rounded  rounded-4 shadow img-jazan"
          />
          <p className="mb-3 mt-3 fs-5 text-center text-jazan">
            الخصائص الطبيعية
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img
            src={Jazanimgthree}
            alt="المعالم التاريخية"
            className="img-fluid w-100 rounded rounded-4 shadow img-jazan"
          />
          <p className="mb-3 mt-3 fs-5 text-center text-jazan">
            المعالم التاريخية
          </p>
        </div>
      </div>
    </div>
  );
};

export default JazanTab;
