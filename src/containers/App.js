import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div>
    <h2>Online Shop</h2>
    <hr/>
      <div className="container">
          <div className="row">
              <div className="span12">
                  <form id="custom-search-form" className="form-search form-horizontal pull-right">
                      <div className="input-append span12">
                          <input type="text" className="search-query" placeholder="Search"></input>
                              <button type="submit" className="btn"><i className="icon-search"></i></button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
