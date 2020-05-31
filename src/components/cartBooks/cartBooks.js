import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getTotalCartCount, getTotalCartPrice} from '../selectors'

const CartBooks = ({getTotalCartCount, totalPrice}) => {
  return (
    <div className="cart">
      <div className="dropdown">
        <Link
          to="/cart"
          id="dLabel"
          className="btn btn-inverse btn-block btn-lg"
        >
          <i className="fa fa-fa-shopping-cart"></i>
          <span>
            {getTotalCartCount} книг(и) -{' '}
            {totalPrice.toFixed(2).toString().replace('.', ',')} руб
          </span>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    getTotalCartCount: getTotalCartCount(state),
    totalPrice: getTotalCartPrice(state),
  }
}

export default connect(mapStateToProps, null)(CartBooks)
