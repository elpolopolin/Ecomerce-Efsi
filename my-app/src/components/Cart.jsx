
import { CartContext } from '../context/CarritoContext'; 
import React, { useContext, useState, useEffect } from "react";

const Cart = () => {
    const { cart } = useContext(CartContext);

    useEffect(() => {
        console.log("carrito: ", cart);
    }, []);

    return (
        <div className="container">
       
            <h3 className='text-center font-bold  ' style={{marginTop: "10px"}}>CARRITO:</h3>

            <div className="row">
            {Object.values(cart).map((product) => (

        <div className="col-md-3 col-xs-6 mb-4" key={product.id} style={{ marginBottom: "20px" }}>
              <div className="product" style={{width: "300px", height: "auto"}}>
              <div className="product-img">
                  <img src={product.thumbnail} alt="" style={{ height: "200px"}}/>
                  <div className="product-label">
                  </div>
              </div>
              <div className="product-body">
                  <p className="product-category">Category: {product.category}</p>
                  <h3 className="product-name">
                  <a href="#">{product.title} </a>
                  <b className='text-primary text-center'>X{product.quantity}</b>
                  </h3>
                  <h4 className="product-price">
                  {product.price} $ <del className="product-old-price"></del>
                  </h4>
                  <div className="product-rating"></div>
                  <div className="product-btns">
                  
                  <button className="remove">
                      <i className="fa fa-remove text-danger"></i>
                      <span className="tooltipp">Remove</span>
                  </button>
               
                  </div>
              </div>
              </div>
            </div>     
                ))}
                </div>
                <br></br>
                
                <div className="text-center">
                <button className="btn btn-secondary btn-lg" style={{ marginTop: "20px" }}>Comprar</button>
            </div>
        </div>
    );
};

export default Cart;