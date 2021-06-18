import React, { Component } from "react";

import { Link } from "react-router-dom";
/*
shortcut to skip constructor method (line9-11):
state = {
    posts: ["post 1", "post 2", "post 3", "post 4", "post 5",]
    };
}
*/
export default class PostList extends Component {
  constructor(props) {
    super(props);
    //initialize post variable to an array
    //you can test it with hardcoded data in the array
    this.state = {
      posts: [
        { title: "post 1" },
        { title: "post 2" },
        { title: "post 3" },
        { title: "post 4" },
      ], //["post 1", "post 2", "post 3"]
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => console.log(error));
  }
  //use .map method() to iterate thru array  & add li
  render() {
    return (
      <section>
        <h2>Here are a list of posts:</h2>
        <ul>
          {this.state.posts.map((post, index) => {
            return (
              <li key={`${post.title}-${index}`}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
