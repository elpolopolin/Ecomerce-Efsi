import React, { useContext, useState, useEffect } from "react";

import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";


const AllProducts = () => {
    const { categoria } = useParams();

    const {products} = useContext(ProductContext); // Obtén el contexto de productos

    const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const handleSearch = products.filter((product) => {
    const NameProductMatches = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const CategoriaMatches = product.category.includes(searchCategory);

    return NameProductMatches && CategoriaMatches;
  });



    return (
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

    )
}

function ProductWidget({ product }) {
    return (
      <Link to={`ProductDetail/${product.id}`} key={product.id} className="cursor-pointer">
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
      </Link>
    );
  }

  export default AllProducts;