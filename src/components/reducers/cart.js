import * as R from 'ramda'

import {
  ADD_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  CLEAR_CART,
} from '../actionTypes'

const initialState = []

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_BOOK_TO_CART:
      return R.append(payload, state)
    case REMOVE_BOOK_FROM_CART:
      return R.without([payload], state)

    case CLEAR_CART:
      return initialState
    default:
      return state
  }
}
