import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Header />
        <Footer />
      </div>
    );
  }
}
