import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title}); //{title} here is same as {title: title}, cause of ES6
  }
  
  render() {
    return (
      <div>
        <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)} />
        <Footer />
      </div>
    );
  }
}
