import React from "react";
import "./Jazan-tab.css";
const Municipalities = ({ arialabelledby, classess, id, role, tabindex }) => {
  return (
    <div
      className={`container ${classess}`}
      id={id}
      aria-labelledby={arialabelledby}
      role={role}
      tabIndex={tabindex}
    >
      <div className="tab_head-Municipalities">
        <h2>بلديات منطقة جازان</h2>
      </div>
      {/* <div className="d-grid-municipalities">
        <div>
          <div className="d-flex justify-content-between">
            <span className="px-5">جيزان</span>
            <span className="px-5"> صبياء</span>
          </div>
          <div className="d-flex" style={{ flexGrow: 2 }}>
            <span className="w-100  text-center"> ابوعريش</span>
          </div>
          <div className="d-flex justify-align-content-between">
            <span className="items-grid"> صامطة</span>
            <span className="items-grid ms-1"> القفل</span>
            <span className="items-grid ms-1"> السهي</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="px-5"> بيش</span>
            <span className="px-5"> الحقو</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="px-5">احدالمسارحة</span>
            <span className="px-5"> الحكامية</span>
          </div>
          <div className="d-flex justify-align-content-between">
            <span className="items-grid"> الدرب</span>
            <span className="items-grid ms-1"> الشقيق</span>
            <span className="items-grid ms-1"> الطوال</span>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <span className="px-5">العالية</span>
            <span className="px-5"> قوزالجعافرة</span>
          </div>

          <div className="d-flex" style={{ flexGrow: 2 }}>
            <span className=" w-100 text-center"> وادي جازان</span>
          </div>
          <div className="d-flex justify-align-content-between">
            <span className="items-grid"> الحرث</span>
            <span className="items-grid ms-1"> ضمد</span>
            <span className="items-grid ms-1"> الريث</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="px-5"> فرسان</span>
            <span className="px-5"> الدائر</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="px-5"> العيدابي</span>
            <span className="px-5"> العارضه</span>
          </div>
          <div className="d-flex justify-align-content-between">
            <span className="items-grid">الموسم</span>
            <span className="items-grid ms-1"> هروب</span>
            <span className="items-grid ms-1"> فيفا</span>
          </div>
        </div>
      </div> */}
      <div className="d-grid tab-grid">
        <span className="py-2 text-center">جيزان</span>
        <span className="py-2 text-center"> صبياء</span>
        <span className="py-2 text-center"> ابوعريش</span>
        <span className="py-2 text-center"> صامطة</span>
        <span className="py-2 text-center"> القفل</span>
        <span className="py-2 text-center"> السهي</span>
        <span className="py-2 text-center"> بيش</span>
        <span className="py-2 text-center"> الحقو</span>
        <span className="py-2 text-center">احدالمسارحة</span>
        <span className="py-2 text-center"> الحكامية</span>
        <span className="py-2 text-center"> الدرب</span>
        <span className="py-2 text-center"> الشقيق</span>
        <span className="py-2 text-center"> الطوال</span>
        <span className="py-2 text-center">العالية</span>
        <span className="py-2 text-center"> قوزالجعافرة</span>
        <span className=" py-2 text-center"> وادي جازان</span>
        <span className="py-2 text-center"> الحرث</span>
        <span className="py-2 text-center"> ضمد</span>
        <span className="py-2 text-center"> الريث</span>
        <span className="py-2 text-center"> فرسان</span>
        <span className="py-2 text-center"> الدائر</span>
        <span className="py-2 text-center"> العيدابي</span>
        <span className="py-2 text-center"> العارضه</span>
        <span className="py-2 text-center">الموسم</span>
        <span className="py-2 text-center"> هروب</span>
        <span className="py-2 text-center"> فيفا</span>
      </div>
    </div>
  );
};

export default Municipalities;
