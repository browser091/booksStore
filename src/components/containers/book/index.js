import React, { Component } from "react";
import { connect } from "react-redux";
import * as R from "ramda";
import { Link } from "react-router-dom";

import { fetchBookById, addBookToCart } from "../../actions/index";
import { getBookById } from "../../selectors";
import CartBooks from "../../cartBooks/cartBooks";
class Book extends Component {
  componentDidMount() {
    this.props.fetchBookById(this.props.match.params.id);
  }

  renderFields() {
    const { book } = this.props;
    const columnField = R.compose(
      R.toPairs,
      R.pick([
        "Год",
        "Обложка",
        "Издательства",
        "Страниц",
        "Формат",
        "EAN",
        "Изготовитель",
      ])
    )(book);

    return columnField.map(([key, value]) => (
      <div className="column" key={key}>
        <div className="ab-details-title">
          <p>{key}</p>
        </div>
        <div className="ab-details-info">{value}</div>
      </div>
    ));
  }

  renderContent() {
    const { book } = this.props;
    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-md-6">
            <img className="img-thumbnail" src={book.image} alt={book.name} />
          </div>
          <div className="col-md-6">{this.renderFields()}</div>
        </div>
        <div className="caption-full">
          <h4>{book.name}</h4>
          <p>{book.description}</p>
        </div>
      </div>
    );
  }
  renderSidebar() {
    const { book, addBookToCart } = this.props;

    return (
      <div>
        <p className="lead">Быстрые покупки</p>
        <CartBooks />
        <div className="form-group">
          <h1>{book.name}</h1>
          <h2>{book.price.toFixed(2).toString().replace(".", ",")} руб</h2>
        </div>
        <Link to="/" className="btn btn-info btn-block">
          Вернуться в магазин
        </Link>
        <button
          type="button"
          className="btn btn-warning btn-block"
          onClick={() => addBookToCart(book.id)}
        >
          Добавить в корзину
        </button>
      </div>
    );
  }
  render() {
    const { book } = this.props;
    return (
      <div className="vew-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9">{book && this.renderContent()}</div>
            <div className="col-md-3">{book && this.renderSidebar()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    book: getBookById(state, state.bookPage.id),
  };
};
const mapDispatchToProps = {
  fetchBookById,
  addBookToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Book);
