import React, { Component } from "react";
import Question from "../Question/Question.js";
import QuestionList from "../QuestionList/QuestionList.js";
import CategoryList from "../CategoryList/CategoryList.js";
import QuestionByCategoryList from "../QuestionByCategoryList/QuestionByCategoryList.js";

export default class JeopardyApp extends Component {
  render() {
    return (
      <div>
        <Question />
        <QuestionList />
        <CategoryList />
        <QuestionByCategoryList />
      </div>
    );
  }
}
