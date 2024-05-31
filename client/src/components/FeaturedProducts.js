import React from 'react';
import '../../src/App.css';
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';
import product4 from '../assets/images/product4.jpg';

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        <div className="product-card">
          <img src={product1} alt="Product 1" />
          <h3>Product 1</h3>
          <p>$99.99</p>
        </div>
        <div className="product-card">
          <img src={product2} alt="Product 2" />
          <h3>Product 2</h3>
          <p>$89.99</p>
        </div>
        <div className="product-card">
          <img src={product3} alt="Product 3" />
          <h3>Product 3</h3>
          <p>$79.99</p>
        </div>
        <div className="product-card">
          <img src={product4} alt="Product 4" />
          <h3>Product 4</h3>
          <p>$69.99</p>
        </div>
        <div className="product-card">
          <img src={product4} alt="Product 4" />
          <h3>Product 4</h3>
          <p>$69.99</p>
        </div>
        <div className="product-card">
          <img src={product4} alt="Product 4" />
          <h3>Product 4</h3>
          <p>$69.99</p>
        </div>
        <div className="product-card">
          <img src={product4} alt="Product 4" />
          <h3>Product 4</h3>
          <p>$69.99</p>
        </div>
        <div className="product-card">
          <img src={product4} alt="Product 4" />
          <h3>Product 4</h3>
          <p>$69.99</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;