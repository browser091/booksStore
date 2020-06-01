import React, { Component } from "react";
import { connect } from "react-redux";
import * as R from "ramda";
import { Link } from "react-router-dom";

import {
  fetchBooks,
  loadMoreBooks,
  addBookToCart,
  fetchCategories,
} from "../../actions/index";
import { getBooks } from "../../selectors";
import Layout from "../layout/index";
import "./books.scss";

class Books extends Component {
  componentDidMount() {
    this.props.fetchBooks();
    this.props.fetchCategories();
  }

  renderBook(book, index) {
    const { addBookToCart } = this.props;
    const shortDescription = `${R.take(60, book.description)}...`;
    return (
      <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
        <div className="thumbnail">
          <img className="img-thumbnail" src={book.image} alt={book.name} />
          <div className="caption">
            <h5>
              <Link to={`/books/${book.id}`}>{book.name}</Link>
            </h5>
            <h5 className="pull-right">
              {book.price.toFixed(2).toString().replace(".", ",")} руб
            </h5>
            <p>{shortDescription}</p>
            <p className="itemButton">
              <button
                className="btn btn-warning"
                onClick={() => addBookToCart(book.id)}
              >
                В корзину
              </button>
              <Link className="btn btn-light" to={`/books/${book.id}`}>
                О книге
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { books, loadMoreBooks } = this.props;

    return (
      <Layout>
        <div className="books row">
          {books.map((book, index) => this.renderBook(book, index))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              className="pull-right btn btn-light"
              onClick={loadMoreBooks}
            >
              Показать еще
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps, loading) => ({
  books: getBooks(state, ownProps, loading),
});

const mapDispatchToProps = {
  fetchBooks,
  loadMoreBooks,
  addBookToCart,
  fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
