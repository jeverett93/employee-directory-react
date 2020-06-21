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
    result: [],
    originalResult: [],
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
        this.setState({ result: res.data.results, originalResult: res.data.results })})
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    const newResult = this.state.originalResult.length > 0 ? this.state.originalResult.filter(employee => {
      console.log(employee)
      return employee.name.first.toLowerCase().includes(value.toLowerCase()) || employee.name.last.toLowerCase().includes(value.toLowerCase()) 
    }): []
    console.log(newResult)
    this.setState({result: newResult})
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = colName => {
    // event.preventDefault();
    // this.searchTable(this.state.search); 
    let newResult = null

    if(colName === "first") 
    { newResult = this.state.result.length > 0 ? this.state.result.sort((a, b) => a.name.first.localeCompare(b.name.first)):
    []}
    else if(colName === "email") {
      newResult = this.state.result.length > 0 ? this.state.result.sort((a, b) => a.email.localeCompare(b.email)):
    []
    }
    this.setState({result: newResult})
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
        <table style={styles.table} className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">image</th>
            <th scope="col" onClick={() => {this.handleFormSubmit("first")}}>Name</th>
            <th scope="col">Phone</th>
            <th scope="col" onClick={() => {this.handleFormSubmit("email")}}>Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {this.state.result.length > 0 ?
          this.state.result.map((employee, index) =>{
            return(<tr key={index}>
              <td><img src={employee.picture.thumbnail} alt="employee"/></td>
              <td>{employee.name.first + " " + employee.name.last}</td>
              <td>{employee.cell}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.date}</td>
            </tr>)
          }) :
          ""
          } 
        </tbody>
      </table>
      </div>
    );
  }

}
  
  export default Table;

  //   make a class component