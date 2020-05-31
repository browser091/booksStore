import * as R from 'ramda'

import categories from './mockCategories'
import books from './mockBooks'

export const fetchBooks = async () => {
  return new Promise((resolve) => {
    resolve(books)
  })
}
export const loadMoreBooks = async ({offset}) => {
  return new Promise((resolve) => {
    resolve(books)
  })
}

export const fetchBookById = async (id) => {
  return new Promise((resolve) => {
    const book = R.find(R.propEq('id', id), books)
    resolve(book)
  })
}

export const fetchCategories = async () => {
  return new Promise((resolve) => {
    resolve(categories)
  })
}
