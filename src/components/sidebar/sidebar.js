import React from 'react'

import CartBooks from '../cartBooks/cartBooks'
import Search from '../search/search'
import Categories from '../categories/categories'

const Sidebar = () => {
  return (
    <div>
      <CartBooks />
      <Search />
      <Categories />
    </div>
  )
}

export default Sidebar
