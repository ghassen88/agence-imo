import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer-style">
      <div className="cell-top">
        <form className="row">
          <div className="col-md-7">
            Recevez nos dernières offres, tendances et actualités directement
            dans votre boîte de réception.
          </div>
          <div className="input-group col-md-5 mb-3">
            <div className="input-group-prepend"></div>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <span className="input-group-text" id="basic-addon1">
              <i class="fa fa-envelope icon"></i>
            </span>
          </div>
        </form>
        <div className="row d-flex">
          <div className="col-md-3">
            <ul>
              <li>
                <a
                  target="_blank"
                  class="sm-fb"
                  href="https://www.facebook.com/JohnTaylor.Luxury.Real.Estate"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
              <a
                  target="_blank"
                  class="sm-fb"
                  href="https://www.instagram.com"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
