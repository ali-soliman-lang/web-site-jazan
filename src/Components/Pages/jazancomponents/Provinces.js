import React from "react";

const Provinces = () => {
  return (
    <div className="img-container">
      <div className="white-box">
        <div className={`container`}>
          <div className="tab_head-ProvincesTab">
            <h2>محافظات منطقة جازان</h2>
          </div>
          <div className="d-grid-ProvincesTab">
            <div className="d-flex flex-column">
              <span>جازان</span>
              <span> ضمد</span>
              <span>فيفا</span>
            </div>
            <div className="d-flex flex-column ">
              <span> صبياء</span>
              <span> الريث</span>
              <span>العيدابي</span>
            </div>
            <div className="d-flex flex-column ">
              <span>هروب</span>
              <span>بيش</span>
              <span> العارضه</span>
            </div>
            <div className="d-flex flex-column">
              <span> صامطه</span>
              <span> فرسان</span>
              <span>الدرب</span>
            </div>
            <div className="d-flex flex-column">
              <span> الحرث</span>
              <span>الدائر</span>
              <span>الطوال</span>
            </div>
          </div>
          <div className="d-flex justify-content-between last-span">
            <span>أحد المسارحة</span>
            <span>ابو عريش</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provinces;
