import React from "react";
import { connect } from "react-redux";
import * as R from "ramda";
import { Link } from "react-router-dom";

import PaymentForm from "../creditCards/creditCards";
import { getCartBooksWithCount, getTotalCartPrice } from "../../selectors";
import { removeBookFromCart, clearCart } from "../../actions";
import "./cart.scss";

const Cart = ({ books, totalPrice, removeBookFromCart, clearCart }) => {
  const isCartEmpty = R.isEmpty(books);
  const renderContent = () => {
    return (
      <div>
        {isCartEmpty && <div>Ваша корзина пуста </div>}

        <div className="table-responsive">
          <table className="table-bordered table-striped table-condensed cf">
            <tbody>
              {books.map((book, index) => (
                <tr key={index} className="item-checout">
                  <td className="first-column-checkout">
                    <img
                      className="img-thumbnail"
                      src={book.image}
                      alt={book.name}
                    />
                  </td>
                  <td>{book.name}</td>
                  <td>
                    {book.price.toFixed(2).toString().replace(".", ",")} руб
                  </td>
                  <td>{book.count}</td>
                  <td>
                    <button
                      onClick={() => removeBookFromCart(book.id)}
                      className="btn btn-danger"
                    >
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {R.not(isCartEmpty) && (
          <div className="row">
            <div className="pull-right total-user-checkout">
              <b>Итоговая сумма: </b>
              {totalPrice.toFixed(2).toString().replace(".", ",")} руб
            </div>
            <Link to="/credit_card" className="btn btn-outline-dark">
              Oформить заказ
            </Link>
          </div>
        )}
      </div>
    );
  };
  const renderSidebar = () => (
    <div>
      <Link to="/" className="btn btn-outline-info btn-lg btn-block">
        <span>Продолжить покупки</span>
      </Link>
      {R.not(isCartEmpty) && (
        <div className="clear-all-button">
          <button
            onClick={clearCart}
            className="btn btn-outline-danger btn-lg btn-block"
          >
            Очистить корзину
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-10">{renderContent()}</div>
          <div className="col-md-">{renderSidebar()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: getCartBooksWithCount(state),
    totalPrice: getTotalCartPrice(state),
  };
};

const mapDispatchToProps = {
  removeBookFromCart,
  clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
