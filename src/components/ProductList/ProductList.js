import React from 'react';
import Product from '../Product/Product';


const ProductList = ({ products, addToCart }) => {
  return (
    <section className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </section>
  );
};

export default ProductList;
