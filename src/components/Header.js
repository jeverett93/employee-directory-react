// importing necessary dependency and style file
import React from "react";
import "../styles/Header.css";

// Header component
function Header() {
  return (
    <header className="header">
      <h1>Employee Directory</h1>
      <p>Filter by heading or use search bar to narrow results.</p>
    </header>
  );
}

// exporting component to be used in other parts of the application
export default Header;
