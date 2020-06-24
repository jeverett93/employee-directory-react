// importing necessary dependency and style file
import React from "react";
import "../styles/search.css";

// adding margin to search bar
const styles = {
  search: {
    margin: 30,
  }
}

// search bar component with props passed from parent component
function Search(props) {
  return (
    <form>
      <div style={styles.search} className="form-group">
        {/* props passed to allow search bar to handle and process input changes */}
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />
      </div>
    </form>
  );
}

// exporting search bar component to be used in other parts of the application
export default Search;

