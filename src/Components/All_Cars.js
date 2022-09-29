import React from "react";
import "./All_Cars.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const All_Cars = () => {
  return (
    <div className="main-content">
      <div className="main" data-aos="fade-right" data-aos-duration="1600">
        <div className="page">
          <h3>A-Class</h3>
          <img
            src="https://cdn.bigboytoyz.com/newcar/files/upload/brandmodel/1616654815399-2019_mercedes-benz_a-class_sedan_20_1600x1200.jpg"
            alt=""
          />
          <h6>Subcompact luxury hatchbacks and sedans</h6>
        </div>
        <div className="page">
          <h3>C-Class</h3>
          <img
            src="https://images.caricos.com/m/mercedes-benz/2015_mercedes-benz_c-class/images/1920x1080/2015_mercedes-benz_c-class_2_1920x1080.jpg"
            alt=""
          />
          <h6>Compact coupes and convertibles</h6>
        </div>
        <div className="page">
          <h3>E-Class</h3>
          <img
            src="https://www.autobest.co.in/uploads/car/454486831723.jpg"
            alt=""
          />
          <h6>Executive sedans, coupes and convertibles</h6>
        </div>
        <div className="page">
          <h3>G-Class</h3>
          <img
            src="https://cdn.bigboytoyz.com/newcar/files/upload/brandmodel/1597411848195-photos.jpg"
            alt=""
          />
          <h6>Mid-size luxury SUVs</h6>
        </div>
        <div className="page">
          <h3>S-Class</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0MEDaBZ0k4hwLZW2qCydvYyYxV60NvP1Og&usqp=CAU"
            alt=""
          />
          <h6>Full-size luxury sedans, coupes and convertibles</h6>
        </div>
        <div className="page">
          <h3>AMG GT</h3>
          <img
            src="https://imgcdn.zigwheels.ae/medium/gallery/exterior/26/780/mercedes-benz-amg-gt-full-front-view-652654.jpg"
            alt=""
          />
          <h6>Sports sedans</h6>
        </div>
        <div className="page">
          <h3>X-Class</h3>
          <img
            src="https://media.istockphoto.com/photos/mercedesbenz-gclass-gelandewagen-4x4-car-picture-id980285726?s=612x612"
            alt=""
          />
          <h6>Luxury pickup trucks</h6>
        </div>
      </div>
      {/* Mobile */}
      <div className="media">
        <div className="main_mobile">
          <div className="mobile" data-aos="fade-up" data-aos-duration="1000">
            <h3>A-Class</h3>
            <img
              src="https://cdn.bigboytoyz.com/newcar/files/upload/brandmodel/1616654815399-2019_mercedes-benz_a-class_sedan_20_1600x1200.jpg"
              alt=""
            />
            <h6>Subcompact luxury hatchbacks and sedans</h6>
          </div>
          <div className="mobile" data-aos="fade-up" data-aos-duration="1000">
            <h3>C-Class</h3>
            <img
              src="https://www.mercedes-benz.co.in/passengercars/mercedes-benz-cars/models/c-class/saloon-w205/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery_bfe4/par/contentgallerytile_b/image.MQ6.8.20200512120246.jpeg"
              alt=""
            />
            <h6>Compact coupes and convertibles</h6>
          </div>
          <div className="mobile" data-aos="fade-up" data-aos-duration="1000">
            <h3>E-Class</h3>
            <img
              src="https://www.autobest.co.in/uploads/car/454486831723.jpg"
              alt=""
            />
            <h6>Executive sedans, coupes and convertibles</h6>
          </div>
          <div className="mobile" data-aos="fade-up" data-aos-duration="1000">
            <h3>G-Class</h3>
            <img
              src="https://cdn.bigboytoyz.com/newcar/files/upload/brandmodel/1597411848195-photos.jpg"
              alt=""
            />
            <h6>Mid-size luxury SUVs</h6>
          </div>
          <div className="mobile" data-aos="fade-up" data-aos-duration="1000">
            <h3>S-Class</h3>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0MEDaBZ0k4hwLZW2qCydvYyYxV60NvP1Og&usqp=CAU"
              alt=""
            />
            <h6>Full-size luxury sedans, coupes and convertibles</h6>
          </div>
          <div className="mobile" data-aos="fade-up" data-aos-duration="1000">
            <h3>AMG GT</h3>
            <img
              src="https://imgcdn.zigwheels.ae/medium/gallery/exterior/26/780/mercedes-benz-amg-gt-full-front-view-652654.jpg"
              alt=""
            />
            <h6>Sports sedans</h6>
          </div>
          <div className="mobile" data-aos="fade-up" data-aos-duration="1000">
            <h3>X-Class</h3>
            <img
              src="https://www.tuningblog.eu/wp-content/uploads/2018/10/EXY-6x6-by-PICKUP-DESIGN-Mercdes-X-Klasse-5.jpg"
              alt=""
            />
            <h6>Luxury pickup trucks</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All_Cars;
