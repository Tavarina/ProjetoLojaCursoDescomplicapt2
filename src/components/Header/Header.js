import React from 'react';
// import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import CartButton from '../CartButton/CartButton';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <p>Purple Store</p>
        <p>A loja</p>
        <p>Produtos</p>
        <p>Time</p>
        {/* <SearchBar /> */}
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
