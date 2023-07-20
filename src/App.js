import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';
import ProdutoJk from '../src/assets/img/produto1.png';
import ProdutoSg from '../src/assets/img/produto3.png';
import ProdutoHobi from '../src/assets/img/produto2.png';
import ProdutoRm from '../src/assets/img/produto4.png';
import ProdutoJin from '../src/assets/img/produto5.png';
import ProdutoJm from '../src/assets/img/produto6.png';
import ProdutoBts from '../src/assets/img/produto7.png';
import ProdutoV from '../src/assets/img/produto8.png';
import CartButton from './components/CartButton/CartButton';
import Provider from './context/Provider';


const productsData = [
  {
    id: 1,
    imagem: ProdutoJk,
    name: 'Camiseta branca Jk ',
    description: 'Descrição do Produto 1',
    price: 150.00
  },
  {
    id: 2,
    imagem: ProdutoSg,
    name: 'Camiseta preta Suga',
    description: 'Descrição do Produto 2',
    price: 125.00
  },
  {
    id: 3,
    imagem: ProdutoHobi,
    name: 'Camiseta preta J-hope',
    description: 'Descrição do Produto 3',
    price: 175.85
  },
  {
    id: 4,
    imagem: ProdutoRm,
    name: 'Camiseta branca Rm',
    description: 'Descrição do Produto 3',
    price: 169.90
  },
  {
    id: 5,
    imagem: ProdutoJin,
    name: 'Camiseta preta Jin',
    description: 'Descrição do Produto 3',
    price: 189.90
  },
  {
    id: 6,
    imagem: ProdutoJm,
    name: 'Camiseta branca Jimin',
    description: 'Descrição do Produto 3',
    price: 165.50
  },
  {
    id: 7,
    imagem: ProdutoBts,
    name: 'Camiseta preta Bangtan',
    description: 'Descrição do Produto 3',
    price: 199.90
  },
  {
    id: 8,
    imagem: ProdutoV,
    name: 'Camiseta branca V',
    description: 'Descrição do Produto 3',
    price: 165.50
  }
  
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedItems = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      };
      setCartItems([...cartItems, newItem]);
    }
  };
  

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="app">
       {/* <Header /> */}
      
      <Provider>
      <ProductList products={productsData} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
      <CartButton cart={cartItems}/>
      </Provider>

    </div>
  );
};

export default App;
