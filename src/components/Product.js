import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title , image}) => (
  <div>
      <img src={image} alt="Girl in a jacket" width="100" height="200"></img>{title} - £{price}{quantity ? ` x ${quantity}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
    image:PropTypes.string
}

export default Product
