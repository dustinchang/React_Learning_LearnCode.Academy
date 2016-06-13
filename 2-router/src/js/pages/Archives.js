import React from "react";
import Article from "../components/Article";

export default class Archives extends React.Component {
  render() {
    //destructuring assignment syntax
    const { params } = this.props; //essentially var params = this.props.params
    const { article } = params; //var article = params.article
    const { query } = this.props.location;
    const { date, filter } = query;

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <Article key={i} title={title}/> );
    debugger;
    return (
      <div>
        <h1>Archives</h1>
        article: {article}, date: {date}, filter: {filter}
        <div className="row">{Articles}</div>
      </div>
    );
  }
}
