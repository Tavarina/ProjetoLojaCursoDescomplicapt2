import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { BsCartDashFill } from 'react-icons/bs';


const CartItem = ({ item }) => {
  const { name, quantity, price } = item;

  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Quantidade: {quantity}</p>
      <p>Preço: R${price}</p>
    </div>
  );
};

export default CartItem;
