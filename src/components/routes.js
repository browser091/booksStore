import React from "react";
import { Switch, Route } from "react-router";

import Books from "./containers/books/index";
import Book from "./containers/book/index";
import Cart from "./containers/cart/cart";
import HeaderBook from "./headerStore/index";
import FooterStore from "./footerStore";
import PaymentForm from "./containers/creditCards/creditCards";

export default (
  <main>
    <HeaderBook />
    <Switch>
      <Route path="/credit_card" component={PaymentForm} exact />
      <Route path="/" component={Books} exact />
      <Route path="/cart" component={Cart} />
      <Route path="/categories/:id" component={Books} />
      <Route path="/books/:id" component={Book} />
    </Switch>
    <FooterStore />
  </main>
);
