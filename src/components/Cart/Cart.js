import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
// import AppContext from '../../context/AppContext';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <h2>Carrinho de Compra</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <p className="total">Total: R${total.toFixed(2)}</p>
    </div>
  );
};

 export default Cart;
