import React, { useContext, useState, useEffect } from "react";
import { CartContext } from '../context/CarritoContext'; 
import { useParams } from 'react-router-dom';
import axios from "axios";
import { ProductContext } from "../context/ProductContext";


const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);
  const { productId } = useParams();
  const [ProductoMostrar, setProductoMostrar] = useState({});
  const [productosRelacionados, setProductosRelacionados] = useState([]);

  const {productsFilter: AllProducts} = useContext(ProductContext); // Obtén el contexto de productos

  useEffect(() => {
   cargarProducto();
    }, []);

    let cargarProducto = () => {
      const productosCategoriaIgual = [];
      axios
        .get("https://dummyjson.com/products/" + productId)
        .then((result) => {
          console.log("traigo el axios: " + result.data);
          setProductoMostrar(result.data);
          AllProducts.forEach((product) => {
            if (product.category === result.data.category) {
              productosCategoriaIgual.push(product); // Cambié += a push para agregar productos coincidentes
            }
          });
          console.log(productosCategoriaIgual);
          setProductosRelacionados(productosCategoriaIgual); // Mueve esta línea dentro del bloque `.then`
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const handleAgregarCarrito = (item) => {
      console.log(item)
      addToCart(item);
    }


  return (
    <div>
      {/* BREADCRUMB */}
      <div id="breadcrumb" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumb-tree">
                <li><a href="#">Home</a></li>
                <li><a href="#">All Categories</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Headphones</a></li>
                <li className="active"> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /BREADCRUMB */}

      {/* SECTION */}
      <div className="section">
        <div className="container">
          <div className="row">
            {/* Product main img */}
            <div className="col-md-5 col-md-push-2">
              <div id="product-main-img">
                <div className="product-preview">
                  <img src={ProductoMostrar.thumbnail} alt="" />
                </div>
                {/* Add more product-preview divs with different images */}
              </div>
            </div>
                        {/* /Product main img */}

                        <div className="col-md-2 col-md-pull-5">
              <div id="product-imgs">
                {ProductoMostrar.images != null &&
                  ProductoMostrar.images.map((image, index) => (
                    <div className="product-preview" key={index}>
                      <img src={image} alt="" />
                    </div>
                  ))}
              </div>
            </div>
            {/* /Product thumb imgs */}

            {/* Product details */}
            <div className="col-md-5">
              <div className="product-details">
                <h2 className="product-name">{ProductoMostrar.title}</h2>
                <div>
                  <div className="product-rating">
                  {(() => {
                  const stars = [];
                  for (let i = 0.5; i < ProductoMostrar.rating; i++) {
                    stars.push(<i key={i} className="fa fa-star"></i>);
                  }
                    return stars;
                  })()}
                  </div>
                  <a className="review-link" href="#">10 Review(s) | Add your review</a>
                </div>
                <div>
                  <h3 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h3>
                  <span className="product-available">In Stock</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <div className="product-options">
                  <label>
                    Size
                    <select className="input-select">
                      <option value="0">X</option>
                    </select>
                  </label>
                  <label>
                    Color
                    <select className="input-select">
                      <option value="0">Red</option>
                    </select>
                  </label>
                </div>

                <div className="add-to-cart">
                  <div className="qty-label">
                    Qty
                    <div className="input-number">
                      <input type="number" />
                      <span className="qty-up">+</span>
                      <span className="qty-down">-</span>
                    </div>
                  </div>
                  <button className="add-to-cart-btn" onClick={() => handleAgregarCarrito(ProductoMostrar)}><i className="fa fa-shopping-cart"></i> add to cart</button>
                </div>

                <ul className="product-btns">
                  <li><a href="#"><i className="fa fa-heart-o"></i> add to wishlist</a></li>
                  <li><a href="#"><i className="fa fa-exchange"></i> add to compare</a></li>
                </ul>

                <ul className="product-links">
                  <li>Category:</li>
                  <li><a href="#">Headphones</a></li>
                  <li><a href="#">Accessories</a></li>
                </ul>

                <ul className="product-links">
                  <li>Share:</li>
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                </ul>
              </div>
            </div>
            {/* /Product details */}

            {/* Product tab */}
            <div className="col-md-12">
              <div id="product-tab">
                {/* product tab nav */}
                <ul className="tab-nav">
                  <li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
                  <li><a data-toggle="tab" href="#tab2">Details</a></li>
                  <li><a data-toggle="tab" href="#tab3">Reviews (3)</a></li>
                </ul>
                {/* /product tab nav */}

                {/* product tab content */}
                <div className="tab-content">
                  {/* tab1  */}
                  <div id="tab1" className="tab-pane fade in active">
                    <div className="row">
                      <div className="col-md-12">
                        <p>{ProductoMostrar.description}</p>
                      </div>
                    </div>
                  </div>
                  {/* /tab1  */}

                  {/* tab2  */}
                  <div id="tab2" className="tab-pane fade in">
                    <div className="row">
                      <div className="col-md-12">
                        <p> </p>
                    </div>
                  </div>
                  {/* /tab2  */}

                  {/* tab3  */}
                  <div id="tab3" className="tab-pane fade in">
                    <div className="row">
                      {/* Rating */}
                      <div className="col-md-3">
                        <div id="rating">
                          <div className="rating-avg">
                            <span>4.5</span>
                            <div className="rating-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                          <ul className="rating">
                            <li>
                              <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </div>
                              <div className="rating-progress">
                                <div style={{ width: "80%" }}></div>
                              </div>
                              <span className="sum">3</span>
                            </li>
                            {/* Add more rating li elements */}
                          </ul>
                        </div>
                      </div>
                      {/* /Rating */}

                      {/* Reviews */}
                      <div className="col-md-6">
                        <div id="reviews">
                          <ul className="reviews">
                            <li>
                              <div className="review-heading">
                                <h5 className="name">John</h5>
                                <p className="date">27 DEC 2018, 8:0 PM</p>
                                <div className="review-rating">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-o empty"></i>
                                </div>
                              </div>
                              <div className="review-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                              </div>
                            </li>
                            {/* Add more review li elements */}
                          </ul>
                          <ul className="reviews-pagination">
                            <li className="active">1</li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      {/* /Reviews */}

                      {/* Review Form */}
                      <div className="col-md-3">
                        <div id="review-form">
                          <form className="review-form">
                            <input className="input" type="text" placeholder="Your Name" />
                            <input className="input" type="email" placeholder="Your Email" />
                            <textarea className="input" placeholder="Your Review"></textarea>
                            <div className="input-rating">
                              <span>Your Rating: </span>
                              <div className="stars">
                                <input id="star5" name="rating" value="5" type="radio" /><label htmlFor="star5"></label>
                                {/* Add more star inputs */}
                              </div>
                            </div>
                            <button className="primary-btn">Submit</button>
                          </form>
                        </div>
                      </div>
                      {/* /Review Form */}
                    </div>
                  </div>
                  {/* /tab3  */}
                </div>
                {/* /product tab content  */}
              </div>
            </div>
            {/* /product tab */}
          </div>
        </div>
      </div>
      {/* /SECTION */}

     {/* Related Products */}
        <div className="section">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="section-title text-center">
                <h3 className="title">Related Products</h3>
                </div>
            </div>

            {productosRelacionados.map((product) =>

              <div className="col-md-3 col-xs-6">
              <div className="product">
              <div className="product-img">
                  <img src={product.thumbnail} alt="" />
                  <div className="product-label">
                  <span className="sale">-30%</span>
                  </div>
              </div>
              <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name">
                  <a href="#">{product.title}</a>
                  </h3>
                  <h4 className="product-price">
                  {product.price} $ <del className="product-old-price"></del>
                  </h4>
                  <div className="product-rating"></div>
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
          </div>
              )}
            
      

      {/* Related Products */}
    </div>
    </div>
    </div>
    </div>
    </div>
    
    



  );
};

export default ProductDetail;