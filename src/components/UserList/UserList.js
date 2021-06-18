import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data", data);
        this.setState({
          users: data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const userListItems = this.state.users.map((user, index) => {
      return (
        <li key={`${user.name}-${index}`}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      );
    });

    return (
      <section>
        <h2>Welcome to the directory of users:</h2>
        <ul>{userListItems}</ul>
      </section>
    );
  }
}
