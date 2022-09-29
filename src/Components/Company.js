import React from "react";
import "./Company.css";
import Nav from "./Nav";
import Mercedes80 from "../assets/Mercedes80.jpg";

const Company = () => {
  return (
    <>
      <Nav />
      <div className="company">
        <img className="comp_banner" src={Mercedes80} alt="" />
      </div>
      <div className="head_content">
        <h2>The Mercedes-Benz AG at a glance.</h2>
        <div className="sub_content1">
          <div className="box__one">
            Mercedes-Benz AG is responsible for the global business of
            Mercedes-Benz Cars and Mercedes-Benz Vans, with over 170,000
            employees worldwide. Ola Källenius is Chairman of the Board of
            Management of Mercedes-Benz AG. The company focuses on the
            development, production and sales of passenger cars, vans and
            vehicle-related services. Furthermore, the company aspires to be the
            leader in the fields of electric mobility and vehicle software. The
            product portfolio comprises the Mercedes-Benz brand with the
            sub-brands of Mercedes-AMG, Mercedes-Maybach, Mercedes-EQ, G-Class
            and the smart brand.
          </div>
          <div className="box__one">
            Mercedes-Benz AG is one of the world's largest manufacturers of
            luxury passenger cars. In 2020, it sold around 2.1 million passenger
            cars and nearly 375,000 vans. In its two business segments,
            Mercedes-Benz AG is continually expanding its worldwide production
            network with around 35 production sites on four continents, while
            gearing itself to meet the requirements of electric mobility. At the
            same time, the company is constructing and extending its global
            battery production network on three continents.
          </div>
          <div className="box__one">
            As sustainability is the guiding principle of the Mercedes-Benz
            strategy and for the company itself, this means creating lasting
            value for all stakeholders: for customers, employees, investors,
            business partners and society as a whole. The basis for this is
            Daimlers sustainable business strategy. The company thus takes
            responsibility for the economic, ecological and social effects of
            its business activities and looks at the entire value chain.
          </div>
        </div>
      </div>
      <div className="next_heading">
        <h2>Our business divisions.</h2>
        <img
          src="https://www.mercedes-benz.com/en/company/_jcr_content/root/slider_copy/sliderchilditems/slideritem_580318367/image/MQ7-0-image-20191025150340/06-mercedes-benz-ag-company-mercedes-amg-gt-4-door-coupe-x290-3400x1440.jpeg"
          alt=""
        />
        <div className="sub_content">
          <div className="box__one">
            <h2>Mercedes-Benz Cars.</h2>
          </div>
          <div className="box__one">
            The Mercedes-Benz Cars range covers every passenger car segment:
            from the urban microcar by smart, to the exclusive product range by
            Mercedes-Benz and Mercedes-Maybach, to the performance and sports
            cars by Mercedes-AMG. With Mercedes-EQ, Mercedes-Benz Cars is
            driving forward the systematic development of alternative drives:
            the aim is to electrify the entire portfolio by 2022. The company
            will offer a range of electrified models in each segment, including
            48-volt models, a wide choice of plug-in hybrids, and all-electric
            vehicles with battery. In this way, the Cars division of
            Mercedes-Benz AG ensures individual mobility for a vast spectrum of
            customer needs. The company aims to build the world's most desirable
            cars.
          </div>
          <div className="box__one">
            In 2020, Mercedes-Benz Cars delivered 2,087,200 vehicles, achieving
            the fifth consecutive year with a wholesale level above two million
            passenger cars. Since 2016, Mercedes-Benz has maintained its leading
            global position in terms of sales compared with its core competitors
            every year.
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
