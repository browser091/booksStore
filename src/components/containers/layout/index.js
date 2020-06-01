import React from "react";

import Sidebar from "../../sidebar/sidebar";
import "./layout.scss";

const Layout = ({ children }) => (
  <div className="view-container">
    <div className="prew-store">
      <img className="prew-store img" src="/images/prew.png" alt="prew img" />
      <span className="header-prew">
        <h2>ДИВАН,</h2>
        <h2> ХОРОШАЯ КНИГА,</h2>
        <h2>И ТЫ.</h2>
      </span>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">{children}</div>
      </div>
    </div>
  </div>
);

export default Layout;
