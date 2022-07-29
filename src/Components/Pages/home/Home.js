import React from "react";
import imgPar_1 from "../../../images/gblack.png";
import imgPar_2 from "../../../images/gwhite.png";
import imgPar_3 from "../../../images/sblack.png";
import imgPar_4 from "../../../images/swhite.png";
import imgPar_5 from "../../../images/mblack.png";
import imgPar_6 from "../../../images/mwhite.png";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Home.css";

Chart.register(Tooltip, Title, ArcElement, Legend);

const data = {
  datasets: [
    {
      data: [52475, 27245, 47542, 17987],
      backgroundColor: ["#f9a884", "#f8c67a", "#c38fc4", "#00deee"],
    },
  ],

  labels: [
    "عدد السكان الذكور السعوديين",
    "عدد السكان الذكور غير السعوديين",
    "عدد السكان النساء السعوديات",
    "عدد السكان النساء غير السعوديات",
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      rtl: true,
      fullSize: true,
      labels: {
        boxWidth: 15,
        boxHeight: 15,
        usePointStyle: true,
        pointStyle: "rectRounded",
        padding: 20,
      },
    },
  },
};

const Home = () => {
  //     window.addEventListener("scroll", () => {
  //         const heading = document.querySelectorAll(".heading");
  //         heading.forEach( head => {
  //           let b = head.offsetTop - 0.9 * window.innerHeight;
  //           if (window.scrollY >= b) {
  //             head.classList.remove("hide-title");
  //             setTimeout(() => {
  //               head.childNodes[0].classList.add("hide-bg");
  //             }, 300);
  //           }
  //         });
  //     });

  // const classHeading = "heading hide-title";

  return (
    <div>
      {/* start header section */}

      {/* <header>
                <div className="header-content">
                    <h2>مرصد جازان</h2>
                    <p>
                        كل ما ستريد معرفتة عن المنطقة و تاريخها و الاحصائيات السكانية بها
                    </p>
                    <button className="btn">الاحصائيات</button>
                </div>
            </header> */}

      {/* end header section */}

      {/* start statistics section */}

      {/* <section className="statistics-section">
                <div className="container">
                     className={classHeading}
                    <div className="heading">
                        <h3>احصائياتنا</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <div className="box-statistics">
                            <div className="image"></div>
                            <div className="box_title">
                            <h3>المحافظات</h3>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="box-statistics">
                            <div className="image"></div>
                            <div className="box_title">
                            <h3>البلديات</h3>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="box-statistics">
                            <div className="image"></div>
                            <div className="box_title">
                            <h3>المراكز</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>    */}

      {/* start statistics section */}

      {/* start chart section */}

      <section className="chart-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>احصائيات عشوائية</h3>
            </div>
            <div className="col-md-6">
              <div className="Circle">
                <Doughnut
                  data={data}
                  options={options}
                  height={336}
                  width={336}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* start chart section */}

      {/* start our partners section */}

      <section className="our-partners">
        <div className="container">
          <div className="heading">
            <h3>شركائنا</h3>
          </div>

          <div className="row">
            <div className="col-md-4 p-0">
              <div className="partner_card">
                <a href="#">
                  <img
                    className="brand_partner"
                    src={imgPar_1}
                    alt="img partner"
                  />
                  <img
                    className="brand_partner"
                    src={imgPar_2}
                    alt="img partner"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="partner_card">
                <a href="#">
                  <img
                    className="brand_partner"
                    src={imgPar_3}
                    alt="img partner"
                  />
                  <img
                    className="brand_partner"
                    src={imgPar_4}
                    alt="img partner"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="partner_card">
                <a href="#">
                  <img
                    className="brand_partner"
                    src={imgPar_5}
                    alt="img partner"
                  />
                  <img
                    className="brand_partner"
                    src={imgPar_6}
                    alt="img partner"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end our partners section */}
    </div>
  );
};

export default Home;
