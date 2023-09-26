
import { CartContext } from '../context/CarritoContext'; 
import React, { useContext, useState, useEffect } from "react";

const Cart = () => {
    const { cart } = useContext(CartContext);

    useEffect(() => {
        console.log("carrito: ", cart);
    }, []);

    return (
        <div className="">
            <div className="section">
                <h3>Carrito:</h3>
                {Object.values(cart).map((product) => (
                    <div key={product.id}>
                        <b>{product.title} </b>
                        <b className='text-primary'>Cantidad: {product.quantity}</b>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;