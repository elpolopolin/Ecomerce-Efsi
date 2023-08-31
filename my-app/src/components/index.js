import React, { useContext, useState, useEffect } from "react";
import { UsuarioContext } from '../context/UserContext';
import { ProductContext } from '../App.js'

const Index = () => {

  const usuario = useContext(UsuarioContext);
  const products = useContext(ProductContext)
  const [selectedCategory, setSelectedCategory] = useState("smartphones"); // Estado para la categoría seleccionada

  // Filtrar productos basados en la categoría seleccionada
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  useEffect(() => {
   
  }, []); 


  return (
    <div>
{/* SECTION 1*/}
      <div className="section">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row">
          {/* shop */}
          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src="./img/shop01.png" alt="" />
              </div>
              <div className="shop-body">
                <h3>
                  Laptop
                  <br />
                  Collection
                </h3>
                <a href="#" className="cta-btn">
                  Shop now <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* /shop */}

          {/* shop */}
          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src="./img/shop03.png" alt="" />
              </div>
              <div className="shop-body">
                <h3>
                  Accessories
                  <br />
                  Collection
                </h3>
                <a href="#" className="cta-btn">
                  Shop now <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* /shop */}

          {/* shop */}
          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src="./img/shop02.png" alt="" />
              </div>
              <div className="shop-body">
                <h3>
                  Cameras
                  <br />
                  Collection
                </h3>
                <a href="#" className="cta-btn">
                  Shop now <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* /shop */}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </div>
{/* /SECTION 1 FIN*/}

{/* section new products */}
<div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">New Products</h3>
                <div className="section-nav">
                    <ul className="section-tab-nav tab-nav">
                      <li
                        className={selectedCategory === "laptops" ? "active" : ""}
                        onClick={() => setSelectedCategory("laptops")}
                      >
                        <a data-toggle="tab">
                          Laptops
                        </a>
                      </li>
                      <li
                        className={selectedCategory === "smartphones" ? "active" : ""}
                        onClick={() => setSelectedCategory("smartphones")}
                      >
                        <a data-toggle="tab">
                        smartphones
                        </a>
                      </li>
                      <li
                        className={selectedCategory === "fragrances" ? "active" : ""}
                        onClick={() => setSelectedCategory("fragrances")}
                      >
                        <a data-toggle="tab">
                        Perfumes
                        </a>
                      </li>
                      <li
                        className={selectedCategory === "home-decoration" ? "active" : ""}
                        onClick={() => setSelectedCategory("home-decoration")}
                      >
                        <a data-toggle="tab">
                        Home decoration
                        </a>
                      </li>
                      
                    </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row" >
                <div className="products-tabs" >
                  <div id="tab1" className="tab-pane active">
                    <div
                      className="products-slick "
                      data-nav="#slick-nav-1"
                      style={{ display: "flex", overflowX: "auto" }}
                    >
                      {filteredProducts.map((product) => (
                        <div
                          className="product"
                          key={product.id}
                          style={{
                            flex: "0 0 auto",
                            padding: "0 10px",
                            width: "300px", // Ajustar el ancho de la tarjeta
                            
                          }}
                        >
                          <div className="product-img">
                            <img
                              src={product.images[1]} // Asegúrate de que la imagen esté en product.images[1]
                              alt={product.name}
                              style={{ width: "100%", height: "200px" }}
                            />
                            <div className="product-label">
                              {product.sale && (
                                <span className="sale">{product.sale}</span>
                              )}
                              {product.isNew && (
                                <span className="new">NEW</span>
                              )}
                            </div>
                          </div>
                          <div className="product-body">
                            <p className="product-category">{product.category}</p>
                            <h3 className="product-name">
                              <a href="#">{product.title}</a>
                            </h3>
                            <h4 className="product-price">
                              ${product.price}{" "}
                              {product.oldPrice && (
                                <del className="product-old-price">
                                  ${product.oldPrice}
                                </del>
                              )}
                            </h4>
                            <div className="product-rating">
                              {Array.from({ length: product.rating }, (_, index) => (
                                <i key={index} className="fa fa-star"></i>
                              ))}
                              {Array.from({ length: 5 - product.rating }, (_, index) => (
                                <i key={index} className="fa fa-star-o"></i>
                              ))}
                            </div>
                            <div className="product-btns">
                              <button className="add-to-wishlist">
                                <i className="fa fa-heart-o"></i>
                                <span className="tooltipp">add to wishlist</span>
                              </button>
                              <button className="add-to-compare">
                                <i className="fa fa-exchange"></i>
                                <span className="tooltipp">add to compare</span>
                              </button>
                              <button className="quick-view">
                                <i className="fa fa-eye"></i>
                                <span className="tooltipp">quick view</span>
                              </button>
                            </div>
                          </div>
                          <div className="add-to-cart">
                            <button className="add-to-cart-btn">
                              <i className="fa fa-shopping-cart"></i> add to cart
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div id="slick-nav-1" className="products-slick-nav"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
{/*fin section new products */}





  {/* Todos los productos section */}
  <div className="section">
        <div className="container ">
          <div className="row">
            {products.map(product => (
              <div className="col-md-4 col-xs-6 .bg-light" key={product.id} >
                <div className="section-title ">
                
                  <div className="section-nav">
                    <div className="products-slick-nav" id={`slick-nav-${product.id}`}></div>
                  </div>
                </div>
                <div className="products-widget-slick" data-nav={`#slick-nav-${product.id}`}>
                  <ProductWidget product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    {/* Products section final */}
    </div>
  );
};

function ProductWidget({ product }) {
  return (
    <div className="product-widget">
      <div className="product-img">
        <img src={product.images[1]} alt={product.name} />
      </div>
      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name"><a href="#">{product.title}</a></h3>
        <h4 className="product-price">${product.price} <del className="product-old-price">${product.oldPrice}</del></h4>
      </div>
    </div>
  );
}

export default Index;