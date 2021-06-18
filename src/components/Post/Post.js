import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      id: "",
      body: "",
    };
  }
  componentDidMount() {
    const id = this.props.match.params.postId;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) =>
        this.setState({ title: post.title, id: post.id, body: post.body })
      );
  }

  render() {
    const { title, id, body } = this.state;

    return (
      <section>
        <h1>{title}</h1>
        <h2>This is blog post #{id}</h2>
        <p>{body}</p>
      </section>
    );
  }
}
