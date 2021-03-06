import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/Searchbox/Searchbox";

class App extends Component {
  state = {
    employees: [],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ employees: users }));
  }

  finder = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    const { employees, searchField } = this.state;
    // Above is equal to const monsters = this.state.monsters & const searchFiled = this.state.searchFields
    const filteredMonsters = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Bot Employess Rolodex</h1>
        <SearchBox search={this.finder} />
        <CardList employees={filteredMonsters} />
      </div>
    );
  }
}

export default App;
