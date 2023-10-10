import { Link, Outlet } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import axios from "axios";
import { CategoriasContext } from "../context/CategoriasContext";
import { CartContext } from '../context/CarritoContext'; 

const Layout = () => {

  const { filterBySearch } = useContext(ProductContext);
  const { categories } = useContext(CategoriasContext);
  const { cart } = useContext(CartContext);
  const [cartCount, setCartCount] = useState(0);

  const filterProducts = () => {
    const categoria = document.querySelector("#categoriaInput").value;
    const texto = document.querySelector("#inputText").value;
    filterBySearch(categoria, texto); // Replace with actual category    
  };

  useEffect(() => {
    // Calcular la cantidad total de productos en el carrito
    const totalCount = Object.values(cart).reduce((total, item) => total + (item.quantity || 0), 0);
    setCartCount(totalCount);
  }, [cart]);

  return (
    <>
     {/* HEADER */}
     <header>
        <div id="top-header">
          <div className="container">
            <ul className="header-links pull-left">
              <li>
                <a href="#">
                  <i className="fa fa-phone"></i> 11 2293 2039
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope-o"></i> polopolin@email.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-map-marker"></i> Guardia Vieja y Medrano
                </a>
              </li>
            </ul>
            <ul className="header-links pull-right">
              <li>
                <a href="#">
                  <i className="fa fa-dollar"></i> USD
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-user-o"></i> My Account
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* MAIN HEADER */}
        <div id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="header-logo">
                    <Link to="/" className="nav-link">
                    <img src="./img/logo.png" alt="" />
                    </Link>
                </div>
              </div>
              {/* MAIN HEADER fin */}
              {/* Logo */}
              {/* Logo */}
              {/* searchBar */}
              <div className="col-md-6">
                <div className="header-search">
                  <form onSubmit={(e)=>e.preventDefault()}>
                    <select id="categoriaInput" className="input-select">
                      <option value="">All Categories</option>
                      {categories.map(categoria=>(
                        <option key={categoria} value={categoria}>{categoria}</option>
                      ))}
                      
                    </select>
                    <input id="inputText" className="input" placeholder="Search here" />
                    <button className="search-btn" onClick={filterProducts}>Search</button>
                  </form>
                </div>
              </div>
              {/* /searchBar */}
              <div className="col-md-3 clearfix">
                <div className="header-ctn">
                  <div>
                    <a href="#">
                      <i className="fa fa-heart-o"></i>
                      <span>Your Wishlist</span>
                      <div className="qty">2</div>
                    </a>
                  </div>
                 
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                       
                      <i className="fa fa-shopping-cart">
                      </i>
                      <Link to="/cart" className="text-white" style={{color: "white"}}>
                    
                      <span>Your Cart</span>
                      
                      </Link>
                      <div className="qty">{cartCount}</div>

                    </a>
                    
                    <div className="cart-dropdown">
                      <div className="cart-list">
                        <div className="product-widget">
                          <div className="product-img">
                            <img src="./img/product01.png" alt="" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name">
                              <a href="#">product name goes here</a>
                            </h3>
                            <h4 className="product-price">
                              <span className="qty">1x</span>$980.00
                            </h4>
                          </div>
                          <button className="delete">
                            <i className="fa fa-close"></i>
                          </button>
                        </div>
                        

                        <div className="product-widget">
                          <div className="product-img">
                            <img src="./img/product02.png" alt="" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name">
                              <a href="#">product name goes here</a>
                            </h3>
                            <h4 className="product-price">
                              <span className="qty">3x</span>$980.00
                            </h4>
                          </div>
                          <button className="delete">
                            <i className="fa fa-close"></i>
                          </button>
                        </div>
                      </div>
                      <div className="cart-summary">
                        <small>3 Item(s) selected</small>
                        <h5>SUBTOTAL: $2940.00</h5>
                      </div>
                      <div className="cart-btns">
                        <a href="#">View Cart</a>
                        <a href="#">
                          Checkout <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-toggle">
                    <a href="#">
                      <i className="fa fa-bars"></i>
                      <span>Menu</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav id="navigation">
      {/* container */}
      <div className="container">
        {/* responsive-nav */}
        <div id="responsive-nav">
          {/* NAV */}
          <ul className="main-nav nav navbar-nav">
            <li className="nav-item">
            <Link to="/" className="nav-link">
                Home
            </Link>
            </li>

            <li className="nav-item ">
            <Link to="/allProducts/todos" className="nav-link">
                Products
            </Link>
            </li>
            
            <li className="nav-item">
            <Link to="/aboutus" className="nav-link">
              <a href="#" className="nav-link">
                About us
              </a>
              </Link>
            </li>
            
          </ul>
          {/* /NAV */}
        </div>
        {/* /responsive-nav */}
      </div>
      {/* /container */}
    </nav>
      {/* /NAVIGATION Fin*/}

    
       
 
      <Outlet />
    </>
  );
};

export default Layout;