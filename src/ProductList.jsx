import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const ProductList = ({ plants, onHomeClick }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Check if a plant is already in the cart
  const isInCart = (plantName) => {
    return cart.some((item) => item.name === plantName);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-grid">
      {/* Home button */}
      <div className="home-btn-container">
        <button className="home-button" onClick={onHomeClick}>
          Home
        </button>
      </div>

      {/* Plants container */}
      <div className="plants-container">
        {plants.map((plant) => (
          <div className="plant-card" key={plant.name}>
            <img src={plant.image} alt={plant.name} className="plant-image" />
            <div className="plant-name">{plant.name}</div>
            <div className="plant-description">{plant.description}</div>
            <div className="plant-cost">{plant.cost}</div>
            <button
              className={`add-to-cart-btn ${isInCart(plant.name) ? "added" : ""}`}
              onClick={() => handleAddToCart(plant)}
              disabled={isInCart(plant.name)}
            >
              {isInCart(plant.name) ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
