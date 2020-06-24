// importing required dependencies and child components as well as API and style files
import React from "react";
import Header from './Header';
import Search from './Search';
import API from "../utils/API";
import moment from "moment"
import "../styles/table.css";

// adding margin to table
const styles = {
  table: {
    margin: 30
  }
}

// class component establishing state 
class Table extends React.Component {
  state = {
    result: [],
    originalResult: [],
    search: ""
  };

  // When this component mounts, search for user input
  componentDidMount() {
    this.searchTable("");
  }

  // API query to return results
  searchTable = query => {
    API.search(query)
      .then(res => {
        this.setState({ result: res.data.results, originalResult: res.data.results })
      })
      .catch(err => console.log(err));
  };

  // listening to changes to input and recording them in state
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });

    // functionality to make name, email, phone, and date of birth searchable
    const newResult = this.state.originalResult.length > 0 ? this.state.originalResult.filter(employee => {
      console.log(employee)
      return employee.name.first.toLowerCase().includes(value.toLowerCase()) || employee.name.last.toLowerCase().includes(value.toLowerCase()) || employee.email.toLowerCase().includes(value.toLowerCase()) || employee.cell.includes(value) || moment(employee.dob.date).format("MM/DD/YYYY").includes(value)
    }) : []
    this.setState({ result: newResult })
  };

  // When the form is submitted, searches the  RandomUser API for the value of `this.state.search`
  handleFormSubmit = colName => {
    // initial value of search result or if value isn't found 
    let newResult = null

    // functionality to sort directory by first name, email, and date of birth
    if (colName === "first") {
      newResult = this.state.result.length > 0 ? this.state.result.sort((a, b) => a.name.first.localeCompare(b.name.first)) :
        []
    }
    else if (colName === "email") {
      newResult = this.state.result.length > 0 ? this.state.result.sort((a, b) => a.email.localeCompare(b.email)) :
        []
    }
    else if (colName === "dob") {
      newResult = this.state.result.length > 0 ? this.state.result.sort((a, b) => a.dob.date.localeCompare(b.dob.date)) :
        []
    }
    this.setState({ result: newResult })
  };

  // Rendering child and parent components
  render() {
    return (
      <div>
        <Header/>
        {/* recording input changes and searching for value of input */}
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <table style={styles.table} className="table">
          <thead className="thead-dark">
            <tr>
              {/* click events to sort categories */}
              <th scope="col">image</th>
              <th scope="col" onClick={() => { this.handleFormSubmit("first") }}>Name</th>
              <th scope="col">Phone</th>
              <th scope="col" onClick={() => { this.handleFormSubmit("email") }}>Email</th>
              <th scope="col" onClick={() => { this.handleFormSubmit("dob") }}>DOB</th>
            </tr>
          </thead>
          <tbody>
            {/* returning users for table on page load */}
            {this.state.result.length > 0 ?
              this.state.result.map((employee, index) => {
                return (<tr key={index}>
                  <td><img src={employee.picture.thumbnail} alt="employee" /></td>
                  <td>{employee.name.first + " " + employee.name.last}</td>
                  <td>{employee.cell}</td>
                  <td>{employee.email}</td>
                  <td>{moment(employee.dob.date).format("MM/DD/YYYY")}</td>
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

// exporting table to be used in other parts of the application
export default Table;

