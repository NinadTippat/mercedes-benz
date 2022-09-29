import React from "react";
import "./Footer.css";
import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Footer = () => {
  return (
    <div className="footer">
      <div className="sub_footer">
        <div className="top_heading">
          <div
            className="single_box"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>More topics</h1>
            <div className="gray_line"></div>
            <div className="list">
              <li>
                <a href="https://www.mercedes-benz.com/en/next/">Innovation</a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/design/">Design</a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/exhibitions/">
                  Exhibitions
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/classic/">
                  Museum & History
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/sports/">Sports</a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/events/driving-events/">
                  Driving Events
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.co.in/passengercars/mercedes-benz-cars/mercedes-me.html">
                  Mercedes me Portal
                </a>
              </li>
            </div>
          </div>
          <div
            className="single_box"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            <h1>Shopping</h1>
            <div className="gray_line"></div>

            <div className="list">
              <li>
                <a href="https://www.dealers.mercedes-benz.co.in/MBIL/request-test-drive">
                  Dealer Search
                </a>
              </li>
              <li>
                <a href="https://configurator.mercedes-benz-accessories.com/en-IN?csref=_port_mbcom:en">
                  Mercedes-Benz Accessoires
                </a>
              </li>
              <li>
                <a href="https://shop.mercedes-benz.com/de-de/collection/?csref=_port_mbcom:en&_ga=2.264925647.1915683660.1642242745-1424673267.1636784903">
                  Mercedes-Benz Collection
                </a>
              </li>
              <li>
                <a href="https://shop.mercedes-benz.com/en-gb/connect/?_ga=2.264925647.1915683660.1642242745-1424673267.1636784903">
                  Mercedes me connect Store
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/vehicles/service-parts/">
                  Service & Parts
                </a>
              </li>
              <li>
                <a href="https://shop.mercedesamgf1.com/en/home/?___store=eeur">
                  Formula 1 Store
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/classic/classiccenter/">
                  Mercedes-Benz Classic Center
                </a>
              </li>
            </div>
          </div>
          <div
            className="single_box"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <h1>All about cars</h1>
            <div className="gray_line"></div>

            <div className="list">
              <li>
                <a href="https://www.mercedes-benz.co.in/passengercars.html?csref=mbcom_generic_pc&group=all&subgroup=see-all&view=BODYTYPE#modeltabs">
                  Model Overview
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.co.in/passengercars.html?csref=mbcom_generic_pc&group=all&subgroup=see-all&view=BODYTYPE#modeltabs">
                  Configurator
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/events/driving-events/">
                  Test Drive
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/vehicles/passenger-cars/mercedes-maybach/">
                  Mercedes-Maybach
                </a>
              </li>
              <li>
                <a href="https://www.daimler.com/products/services/mercedes-me/">
                  Mercedes me connect
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/driving-aids/">
                  Mercedes-Benz Ex-Factory Driving Aids
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/vehicles/wltp/">
                  WLTP
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/vehicles/rde/">RDE</a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/semiconductor/">
                  Semiconductors supply situation
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/vehicles/li-ion-un383/">
                  Li-Ion UN38.3
                </a>
              </li>
            </div>
          </div>
          <div
            className="single_box"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="750"
          >
            <h1>Discover more</h1>
            <div className="gray_line"></div>

            <div className="list">
              <li>
                <a href="https://www.daimler.com/en/">Daimler AG</a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/company/">
                  Mercedes-Benz AG
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/newsroom/">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="https://www.daimler.com/press/">Press</a>
              </li>
              <li>
                <a href="https://www.daimler.com/career/">Career</a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/vehicles/heycar/">
                  heycar
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/vehicles/share-now/">
                  SHARE NOW
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/whitehat/">
                  Vulnerability Reporting Policy
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/mercedes-benz-energy/">
                  Mercedes-Benz Energy
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz-bank.de/de.html">
                  Mercedes-Benz Bank
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/vehicles/international-corporate-sales/">
                  Fleet Sales
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/global-training/">
                  Mercedes-Benz Global Training
                </a>
              </li>
              <li>
                <a href="https://www.mercedes-benz.com/en/customer-centre-sindelfingen/">
                  Customer Centre Sindelfingen
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_ending">
        <div className="ending_heading">
          <h1>Stay Informed</h1>
        </div>
        <p>
          Follow us and use the following social media platforms to get in
          contact with us and to share your passion for the brand, products and
          services of Mercedes-Benz.
        </p>
      </div>

      <div class="main_icons">
        <div class="icon">
          <svg height="80" width="100">
            <circle
              cx="40"
              cy="40"
              r="25"
              stroke="white"
              stroke-width="4"
              fill="none"
            ></circle>
          </svg>
          <i class="fab fa-instagram fa-2x"></i>
        </div>

        <div class="icon">
          <svg height="80" width="80">
            <circle
              cx="40"
              cy="40"
              r="25"
              stroke="white"
              stroke-width="4"
              fill="none"
            ></circle>
          </svg>
          <i class="fab fa-facebook fa-2x"></i>
        </div>

        <div class="icon">
          <svg height="80" width="80">
            <circle
              cx="40"
              cy="40"
              r="25"
              stroke="white"
              stroke-width="4"
              fill="none"
            ></circle>
          </svg>
          <i class="fab fa-whatsapp fa-2x"></i>
        </div>

        <div class="icon">
          <svg height="80" width="80">
            <circle
              cx="40"
              cy="40"
              r="25"
              stroke="white"
              stroke-width="4"
              fill="none"
            ></circle>
          </svg>
          <i class="fab fa-twitter fa-2x"></i>
        </div>
      </div>

      <div className="mobile_icons">
        <li>
          <i class="fab fa-facebook-f" data-aos="fade-up"></i>
        </li>
        <li>
          <i class="fab fa-instagram" data-aos="fade-up"></i>
        </li>
        <li>
          <i class="fab fa-whatsapp" data-aos="fade-up"></i>
        </li>
        <li>
          <i class="fab fa-twitter" data-aos="fade-up"></i>
        </li>
      </div>

      <div className="three_images">
        <div className="imgs">
          <div
            className="single_image"
            data-aos-easing="ease-in-out"
            data-aos="fade-up"
          >
            <img
              src="https://www.mercedes-benz.com/content/dam/brandhub/experience-fragments/related-websites-logos/logo_amg.svg"
              alt=""
            />
          </div>
          <div
            className="single_image"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos="fade-up"
          >
            <img
              src="https://www.mercedes-benz.com/content/dam/brandhub/experience-fragments/related-websites-logos/logo_daimler.svg"
              alt=""
            />
          </div>
          <div
            className="single_image"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos="fade-up"
          >
            <img
              src="https://www.mercedes-benz.com/content/dam/brandhub/experience-fragments/related-websites-logos/logo_smart.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="last_para">
        <p data-aos="fade-up">
          This is the International website of Mercedes-Benz AG. Visitors from
          the U.S., please visit our U.S. website{" "}
          <a href="www.mbusa.com.">www.mbusa.com.</a>
        </p>
      </div>
      <div className="last_options">
        <li data-aos="fade-up">
          <a href="">Provider</a>
        </li>
        <li data-aos="fade-up">
          <a href="">Legal Notice</a>
        </li>
        <li data-aos="fade-up">
          <a href="">Cookies</a>
        </li>
        <li data-aos="fade-up">
          <a href="">Privacy Statement</a>
        </li>
        <li data-aos="fade-up">
          <a href="">Newseed (Rss) </a>
        </li>
        <li data-aos="fade-up">
          <a href="">Contact</a>
        </li>
        <li data-aos="fade-up">
          <a href="">Carrers</a>
        </li>
        <li data-aos="fade-up">
          <a href="">Investors Relations</a>
        </li>
        <li data-aos="fade-up">
          <a href="">Diamler AG</a>
        </li>
      </div>
      <div className="top_btn">
        <button className="back_top">
          <li>
            <a href="/">
              <span>Top</span>
              <i class="fas fa-arrow-up"></i>
            </a>
          </li>
        </button>
      </div>
    </div>
  );
};

export default Footer;
