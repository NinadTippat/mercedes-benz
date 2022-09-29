import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Mercedes from "../assets/Mercedes.jpg";
import Mercedes10 from "../assets/Mercedes10.jpg";
import Mercedes20 from "../assets/Mercedes20.jpg";
import Mercedes30 from "../assets/Mercedes30.png";
import Mercedes40 from "../assets/Mercedes40.jpg";
import Mercedes50 from "../assets/Mercedes50.jpg";
import Mercedes60 from "../assets/Mercedes60.jpg";
import Mercedes70 from "../assets/Mercedes70.jpg";
import Mercedes80 from "../assets/Mercedes80.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel fade>
        <Carousel.Item>
          <img className="banner d-block w-100" src={Mercedes} />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" banner d-block w-100" src={Mercedes70} />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner d-block w-100"
            src={Mercedes30}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" banner d-block w-100" src={Mercedes40} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner d-block w-100" src={Mercedes50} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner d-block w-100" src={Mercedes60} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
