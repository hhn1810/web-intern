import React from 'react'
import { useCart } from 'react-use-cart'
const ShopItem = ({ products }) => {
  const { addItem, items, inCart } = useCart()
  return (
    <div className="shop-items">
      {products.shoes.map((product) => (
        <div className="shop-item" key={product.id}>
          <div
            className="shop-item-image"
            style={{ backgroundColor: product.color }}
          >
            <img src={product.image} alt={product.name} />
          </div>
          <div className="shop-item-name">{product.name}</div>
          <div className="shop-item-description">{product.description}</div>
          <div className="shop-item-bottom">
            <div className="shop-item-price">${product.price}</div>
            {!items.find((item) => item.id === product.id) && (
              <div
                className="shop-item-button"
                onClick={() => addItem(product)}
              >
                <p>ADD TO CART</p>
              </div>
            )}
            {inCart(product.id) && (
              <div className="shop-item-button inactive">
                <div className="shop-item-button-cover">
                  <div className="shop-item-button-cover-check-icon"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShopItem
