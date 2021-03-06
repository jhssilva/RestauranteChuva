import React from "react";
import Logo from "resources/img/logo/logo.svg";
import Button from "react-bootstrap/Button";

const navItemList = [
  { key: 1, description: "Restaurante", hrefValue: "#about" },
  { key: 2, description: "Cardápio", hrefValue: "#menu" },
  { key: 3, description: "Eventos", hrefValue: "#events" },
  { key: 4, description: "Contactos", hrefValue: "#contact" },
];

/*%trans "Restaurante"%*/

const NavItem = (props) => {
  const { hrefValue, description } = props;
  return (
    <li className="nav-item">
      <a className="nav-link navbar-text" href={hrefValue}>
        {description}
      </a>
    </li>
  );
};

const SupportedContent = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav navbar-nav ml-auto navbar-right text-center ">
        {navItemList.map((props) => {
          const { key, description, hrefValue } = props;
          return (
            <NavItem
              key={key}
              hrefValue={hrefValue}
              description={description}
            />
          );
        })}
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top py-3">
      <div className="navbar-container">
        <div className="col-sm-3">
          <a className="navbar-brand" href="#slide-global">
            <img src={Logo} className="navbar-logo" alt="logo" />
          </a>
        </div>
        <div className="col-sm-9">
          <Button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars navbar-bars"></i>
          </Button>
          <SupportedContent />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
