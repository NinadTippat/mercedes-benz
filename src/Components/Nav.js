import { React } from "react";
import "./Nav.css";
import { Link, useHistory } from "react-router-dom";

const Nav = () => {
  const history = useHistory();
  const homepage = () => {
    history.push("/");
  };
  const vehicles = () => {
    window.open(
      "https://www.mercedes-benz.co.in/passengercars/models.html?group=all&subgroup=see-all&view=BODYTYPE"
    );
  };
  const design = () => {
    window.open("https://www.mercedes-benz.com/en/");
  };
  return (
    <>
      <nav className="navbar">
        <div onClick={homepage} className="logo">
          <img
            src="https://www.mercedes-benz.com/etc/designs/brandhub/frontend/static-assets/header/logo.svg"
            alt="mercedes logo"
          />
          <span>Mercedes Benz</span>
        </div>
        <div className="nav_icon">
          <Link to="/company">Company</Link>
          <Link onClick={vehicles}>Vehicles</Link>
          <Link onClick={design}>Design</Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
