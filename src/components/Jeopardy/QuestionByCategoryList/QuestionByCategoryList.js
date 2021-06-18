import React, { Component } from "react";

//Build out the QuestionByCategoryList component. URL: http://jservice.io/api/category?id=?????
export default class QuestionByCategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Get Random Trivia Questions By Category",
      categoryId: undefined,
      questions: [],
    };
  }

  handleChange = (event) => {
    this.setState({ categoryId: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { categoryId } = this.state;
    fetch(`http://jservice.io/api/category?id=${categoryId}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          heading: `${data.title} Trivia Questions`,
          questions: data.clues,
        })
      )
      .catch(console.log);
  };

  render() {
    const { heading, categoryId, questions } = this.state;
    const questionListItems = questions.map((clue, index) => {
      const { question } = clue;

      return (
        <li key={`${question}-${index}`}>{`Question ${
          index + 1
        }: ${question}`}</li>
      );
    });

    return (
      <section>
        <h2>{heading}</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="categoryId">
            Enter category ID:
            <input
              type="text"
              id="categoryId"
              name="categoryId"
              onChange={this.handleChange}
              value={categoryId}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>{questionListItems}</ul>
      </section>
    );
  }
}
