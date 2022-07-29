import React from "react";

const MunicipalitiesSidebar = () => {
  return (
    <div className="img-container">
      <div className="white-box">
        <div className="container">
          <div className="tab_head-ProvincesTab">
            <h2>بلديات منطقة جازان</h2>
          </div>
          <div className="d-grid-municipalities">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MunicipalitiesSidebar;
