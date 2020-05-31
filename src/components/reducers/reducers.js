import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import books from './books'
import booksPage from './booksPage'
import bookPage from './bookPage'
import cart from './cart'
import categories from './categories'

export default (history) =>
  combineReducers({
    books,
    booksPage,
    bookPage,
    cart,
    categories,
    router: connectRouter(history),
  })
