import * as R from 'ramda'

export const getBookById = (state, id) => R.prop(id, state.books)

export const getBooks = (state, ownProps) => {
  const activeCategoryId = getActiveCategoryId(ownProps)
  const applySearch = (item) =>
    R.contains(state.booksPage.search, R.prop('name', item))
  const applyCategory = (item) =>
    R.equals(activeCategoryId, R.prop('categoryId', item))
  const books = R.compose(
    R.filter(applySearch),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.map((id) => getBookById(state, id))
  )(state.booksPage.ids)
  return books
}

export const getRenderedBooksLength = (state) => R.length(state.booksPage.ids)

export const getTotalCartCount = (state) => R.length(state.cart)

export const getTotalCartPrice = (state) => {
  const totalPrice = R.compose(
    R.sum,
    R.pluck('price'),
    R.map((id) => getBookById(state, id))
  )(state.cart)

  return totalPrice
}

export const getCategories = (state) => R.values(state.categories)

export const getActiveCategoryId = (ownProps) =>
  R.path(['match', 'params', 'id'], ownProps)

export const getCartBooksWithCount = (state) => {
  const bookCount = (id) =>
    R.compose(
      R.length,
      R.filter((cartId) => R.equals(id, cartId))
    )(state.cart)
  const bookWithCount = (book) => R.assoc('count', bookCount(book.id), book)
  const uniqueIds = R.uniq(state.cart)
  const books = R.compose(
    R.map(bookWithCount),
    R.map((id) => getBookById(state, id))
  )(uniqueIds)

  return books
}
