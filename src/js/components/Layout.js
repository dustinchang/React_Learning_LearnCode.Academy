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
  render() {
    setTimeout(() => {
      this.setState({title: "WELCOME Dustin!"});
    }, 2000);
    
    return (
      <div>
        <Header title={this.state.title} />
        <Header title="Other Title!" />
        <Footer />
      </div>
    );
  }
}
