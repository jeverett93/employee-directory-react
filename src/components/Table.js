import React from "react";
import Header from './Header'
import Search from './Search'
// import Rows from "./Rows";
import API from "../utils/API";

const styles = {
  table: {
    marginTop: 30
  }
}

class Table extends React.Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchTable("");
    console.log(this.state.result)
  }

  searchTable = query => {
    API.search(query)
      .then(res => {
        console.log(res.data)
        this.setState({ result: res.data })})
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchTable(this.state.search);
  };




render() {
    return (
      <div>
      <Header/>
      <Search
      value={this.state.search}
      handleInputChange={this.handleInputChange}
      handleFormSubmit={this.handleFormSubmit}
      />
        <table style={styles.table} class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }

}
  
  export default Table;

  //   make a class component