import React from "react";
import { Link } from "react-router-dom";

import CartBooks from "../cartBooks/cartBooks";
import "./headerStore.scss";

const HeaderStore = () => {
  return (
    <header>
      <div className="header-store">
        <Link to="/">
          <h1>UrbanStore</h1>{" "}
        </Link>
        <CartBooks />
      </div>
    </header>
  );
};

export default HeaderStore;
