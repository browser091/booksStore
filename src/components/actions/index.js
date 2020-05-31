import {
  FETCH_BOOKS_START,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  LOAD_MORE_BOOKS_START,
  LOAD_MORE_BOOKS_SUCCESS,
  LOAD_MORE_BOOKS_FAILURE,
  FETCH_BOOKS_BY_ID_SUCCESS,
  FETCH_BOOKS_BY_ID_START,
  FETCH_BOOKS_BY_ID_FAILURE,
  ADD_BOOK_TO_CART,
  SEARCH_BOOK,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  REMOVE_BOOK_FROM_CART,
  CLEAR_CART,
} from '../actionTypes'
import {
  fetchBooks as fetchBooksApi,
  loadMoreBooks as loadMoreBooksApi,
  fetchBookById as fetchBookByIdApi,
  fetchCategories as fetchCategoriesApi,
} from '../api/index'
import {getRenderedBooksLength} from '../selectors'

export const fetchBooks = () => async (dispatch) => {
  dispatch({type: FETCH_BOOKS_START, loading: false})

  try {
    const books = await fetchBooksApi()
    dispatch({
      type: FETCH_BOOKS_SUCCESS,
      payload: books,
    })
  } catch (err) {
    dispatch({
      type: FETCH_BOOKS_FAILURE,
      payload: err,
      error: true,
    })
  }
}

export const loadMoreBooks = () => async (dispatch, getState) => {
  const offset = getRenderedBooksLength(getState())
  dispatch({type: LOAD_MORE_BOOKS_START})

  try {
    const books = await loadMoreBooksApi(offset)
    dispatch({
      type: LOAD_MORE_BOOKS_SUCCESS,
      payload: books,
    })
  } catch (err) {
    dispatch({
      type: LOAD_MORE_BOOKS_FAILURE,
      payload: err,
      error: true,
    })
  }
}

export const fetchBookById = (id) => async (dispatch) => {
  dispatch({type: FETCH_BOOKS_BY_ID_START})
  try {
    const book = await fetchBookByIdApi(id)
    dispatch({
      type: FETCH_BOOKS_BY_ID_SUCCESS,
      payload: book,
    })
  } catch (err) {
    dispatch({
      type: FETCH_BOOKS_BY_ID_FAILURE,
      payload: err,
      error: true,
    })
  }
}

export const addBookToCart = (id) => (dispatch) => {
  dispatch({
    type: ADD_BOOK_TO_CART,
    payload: id,
  })
}

export const searchBook = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_BOOK,
    payload: text,
  })
}

export const fetchCategories = () => async (dispatch) => {
  dispatch({type: FETCH_CATEGORIES_START})

  try {
    const categories = await fetchCategoriesApi()
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categories,
    })
  } catch (err) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true,
    })
  }
}

export const removeBookFromCart = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_BOOK_FROM_CART,
    payload: id,
  })
}

export const clearCart = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART,
  })
}
