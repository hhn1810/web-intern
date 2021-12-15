import React from 'react'
import nikeLogo from '../assets/nike.png'
import ShopItem from './ShopItem'
const Item = ({ products }) => {
  return (
    <div className="card">
      <div className="card-top">
        <img src={nikeLogo} alt="nike logo" className="card-top-logo" />
      </div>
      <div className="card-title">Our Products</div>
      <div className="card-body">
        <ShopItem products={products} />
      </div>
    </div>
  )
}

export default Item
