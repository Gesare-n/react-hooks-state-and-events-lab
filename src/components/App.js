import React, { useState } from "react";
import ShoppingList from "./ShoppingList"; // Importing the ShoppingList component
import itemData from "../data/items"; // Importing the itemData

function App() {
  // State variable to track the dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    // Toggle the value of isDarkMode
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Determine the class name based on the dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      {/* Header section */}
      <header>
        <h2>Shopster</h2>
        {/* Button to toggle dark mode */}
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      {/* Render the ShoppingList component and pass itemData as props */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
