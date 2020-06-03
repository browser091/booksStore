import React from "react";

import Prew from "../prew/prew";
import Sidebar from "../../sidebar/sidebar";

const Layout = ({ children }) => (
  <div className="view-container">
    <Prew />
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
