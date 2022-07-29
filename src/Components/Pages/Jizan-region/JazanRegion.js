import React from "react";
import { Fragment } from "react";
import ImgForCity from "../../../images/ggen.jpg";
import DataTable from "../data-table/DataTable";
import Home from "../home/Home";
import JazanInformation from "./JazanInformation/JazanInformation";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./JazanRegion.css";

Chart.register(Tooltip, Title, ArcElement, Legend);

const data = {
  datasets: [
    {
      data: [52475, 27245, 47542, 17987],
      backgroundColor: ["#fae7b4", "#a9ddb5", "#b3aafd", "#e5e5e5"],
    },
  ],

  labels: [
    "الذكور السعوديين",
    "النساء السعوديات",
    "الذكور غير السعوديين",
    "النساء غير السعوديات",
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "right",
      rtl: true,
      fullSize: true,
      labels: {
        boxWidth: 40,
        boxHeight: 15,
        pointStyle: "rect",
        padding: 20,
      },
    },
  },
};

const JazanRegion = () => {
  return (
    <Fragment>
      <div className="img-container">
        <div className="white-box">
          <JazanInformation />
          <div className="city-info">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="city-details">
                    <div className="img-city">
                      <img src={ImgForCity} alt="jazan" />
                    </div>
                    <div className="text-city">
                      <h6>جيزان</h6>
                      <p>مساحة المحافظة : 479.5كم2</p>
                      <p>عدد التجمعات السكانية : 17</p>
                      <p>البلديات التابعة : جيزان</p>
                      <p>المراكز التابعة : جيزان - مركز الفطيحة</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="people-details">
                    <h4>احصائيات التجمعات السكانية</h4>
                    <div className="Circle-two">
                      <Pie
                        data={data}
                        options={options}
                        height={300}
                        width={300}
                      />
                    </div>
                    <div className="table-numbers">
                      <table>
                        <thead>
                          <tr>
                            <th className="name-head">البيان</th>
                            <th className="number-head">العدد</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-column="text-table">
                              إجمالي السكان الذكور (سعودين وغير سعوديين)
                            </td>
                            <td data-column="number-table">80835</td>
                          </tr>
                          <tr>
                            <td data-column="text-table">
                              إجمالي السكان الإناث (سعوديات وغير سعوديات)
                            </td>
                            <td data-column="number-table">53929</td>
                          </tr>
                          <tr>
                            <td data-column="text-table">
                              جملة السكان بالمحافظة
                            </td>
                            <td data-column="number-table">134764</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DataTable />
          <Home />
        </div>
      </div>
    </Fragment>
  );
};

export default JazanRegion;
