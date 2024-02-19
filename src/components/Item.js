import React, { useState } from "react";

// Functional component Item with props {name, category}
function Item({ name, category }) {
  // State variable to track whether the item is in the cart or not
  const [isInCart, setIsInCart] = useState(false);

  // Function to toggle the isInCart state
  const handleToggleCart = () => {
    // Toggle the value of isInCart
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };

  return (
    // Render an <li> element with conditional class based on isInCart state
    <li className={isInCart ? "in-cart" : ""}>
      {/* Display item name */}
      <span>{name}</span>
      {/* Display item category */}
      <span className="category">{category}</span>
      {/* Button to add/remove item from cart */}
      <button className="add" onClick={handleToggleCart}>
        {/* Conditional text based on isInCart state */}
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
