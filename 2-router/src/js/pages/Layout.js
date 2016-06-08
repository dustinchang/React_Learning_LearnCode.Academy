import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component {
  navigate() {
    this.context.router.replace('/'); // was this.props.history.pushState(null, '/'), but props.history and pushState are being deprecated so solution to this was use contextTypes and use push, same for replaceState to use replace instead
  }
  render() {
    const { history } = this.props;
    console.log(history.isActive("archives"));
    return (
      <div>
        <h1>KillerNews.net!</h1>
        {this.props.children}
        <Link to="archives" activeClassName="test" className="btn btn-danger">archives</Link>
        <Link to="settings"><button className="btn btn-success">settings</button></Link>
        <button onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }
}
//Used for deprecated history
Layout.contextTypes = {
  router: React.PropTypes.object.isRequired
};
