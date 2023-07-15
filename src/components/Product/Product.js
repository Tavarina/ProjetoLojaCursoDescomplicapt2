import React from 'react';
import './Product.css';
import { BsFillCartPlusFill } from 'react-icons/bs';

const Product = ({ product, addToCart }) => {
  const { id, imagem, name, description, price } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <section className="product-card">
      <img src={imagem} alt="" className='card-image'/>
      <div className='card__infos'>
      <h3 className='card__title'>{name}</h3>
      <p>{description}</p>
      <p className='card__price'>Preço: R${price}</p>
      </div>
      <button onClick={handleAddToCart} className="button__add-cart"> <BsFillCartPlusFill /></button>
    </section>
  );
};

export default Product;
