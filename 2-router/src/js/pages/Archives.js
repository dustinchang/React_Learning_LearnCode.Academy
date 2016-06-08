import React from "react";

export default class Archives extends React.Component {
  render() {
    //destructuring assignment syntax
    const { params } = this.props; //essentially var params = this.props.params
    const { article } = params; //var article = params.article
    const { query } = this.props.location;
    const { date, filter } = query;
    return (
      <div>
        <h1>Archives ({article})</h1>
        <h4>date: {date}, filter: {filter}</h4>

      </div>
    );
  }
}
