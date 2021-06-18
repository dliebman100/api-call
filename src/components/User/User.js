import React, { Component } from "react";

export default class User extends Component {
  state = {
    name: "Hou",
    id: "1",
    email: "asdf@gmail.com",
    phone: "1231231234",
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`https://jsonplaceholder.typicode.com/users ${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data", data);
        this.setState({
          name: data.name,
          id: data.id,
          email: data.email,
          phone: data.phone,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <section>
        <h1>{this.state.name}'s Contact Page</h1>
        <h2>This is user #{this.state.id}</h2>
        <p>Email:{this.state.email}'</p>
        <p>Phone: {this.state.phone}</p>
      </section>
    );
  }
}
