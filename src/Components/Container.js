import React from "react";
import "./Container.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Container = () => {
  return (
    <div className="box_main">
      <div className="box" data-aos="fade-up">
        <h1>Welcome to the Mercedes-Benz international website.</h1>
        <p>
          Exclusive reports and current films: experience a broad range of
          topics from the fascinating world of Mercedes-Benz. To find out about
          offers in your location, please go to the local Mercedes-Benz website.
        </p>
        <p>
          This is the International website of Mercedes-Benz AG. Visitors from
          the U.S., please visit our U.S. website{" "}
          <a href=" www.mbusa.com">www.mbusa.com.</a>
        </p>
        <button className="btn_container">Bring me to my local website</button>
      </div>
      <div className="three_boxes">
        <div
          className="box_one"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos="fade-up"
        >
          <img
            src="https://www.mercedes-benz.com/en/_jcr_content/root/channeltiles_copy_co/parsys/channeltilesitem_1240785833/image/MQ6-12-image-20190123184747/museum-channel-tile.jpeg"
            alt=""
          />
        </div>
        <div
          className="box_one"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-delay="250"
          data-aos="fade-up"
        >
          <img
            src="https://www.mercedes-benz.com/en/_jcr_content/root/channeltiles_copy_co/parsys/channeltilesitem_1850677750/image/MQ6-12-image-20210225164610/me-channel-tile_new.jpeg"
            alt=""
          />
        </div>
        <div
          className="box_one"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
          data-aos="fade-up"
        >
          <img
            src="https://www.mercedes-benz.com/en/_jcr_content/root/channeltiles_copy_co/parsys/channeltilesitem_164191792/image/MQ6-12-image-20191216112113/she-channel-tile.jpeg"
            alt=""
          />
        </div>
      </div>

      <div
        className="ending"
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <h1>Models</h1>
        <img
          src="https://www.mercedes-benz.com/en/design/_jcr_content/image/MQ6-8-image-20190128130849/00-mercedes-benz-design-uebersicht-2560x1440-2560x1440.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Container;
