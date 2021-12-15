import React from 'react'
import nikeLogo from '../assets/nike.png'
import RemoveIcon from '../assets/trash.png'
import { useCart } from 'react-use-cart'
const AddedItem = () => {
  const { cartTotal, items, isEmpty, removeItem, updateItemQuantity } =
    useCart()

  return (
    <div className="card">
      <div className="card-top">
        <img src={nikeLogo} alt="nike logo" className="card-top-logo" />
      </div>
      <div className="card-title">
        Your cart
        <span className="card-title-amount">${cartTotal.toFixed(2)}</span>
      </div>
      <div className="card-body">
        {isEmpty && (
          <div className="cart-empty">
            <p className="cart-empty-text">Your cart is empty.</p>
          </div>
        )}
        {!isEmpty && (
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-left">
                  <div
                    className="cart-item-image"
                    style={{ backgroundColor: item.color }}
                  >
                    <div className="cart-item-image-block">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </div>
                <div className="cart-item-right">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${item.price}</div>
                  <div className="cart-item-actions">
                    <div className="cart-item-count">
                      <div
                        className="cart-item-count-button"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </div>
                      <div className="cart-item-count-number">
                        {item.quantity}
                      </div>
                      <div
                        className="cart-item-count-button"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </div>
                    </div>
                    <div
                      className="cart-item-remove"
                      onClick={() => removeItem(item.id)}
                    >
                      <img
                        src={RemoveIcon}
                        alt="remove"
                        className="cart-item-remove-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AddedItem
