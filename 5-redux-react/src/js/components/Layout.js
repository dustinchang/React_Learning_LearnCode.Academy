import React from "react";
import { connect } from "react-redux"
import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

//Didn't want to use @connect declaration as not officially supported in babel v6
export default class Layout extends React.Component {

  //TODO:Didn't work so had to redo work and do things other ways
  /*coomponentWillMount() {
    store.dispatch(fetchUser())
  }*/

  fetchTweets() {
    this.props.store.dispatch(fetchTweets());
  }

  render() {
    //TODO: Couldn't get the state to update was just getting the data from it.
    this.props.store.dispatch(fetchUser());
    const { user, tweets } = this.props.store.getState();
    console.log('tweets=');
    console.log(tweets.tweets);
    if (!tweets.tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>Load tweets</button>
    }
    return <h1>{user.user.name}</h1>
    /*const mappedTweets = this.props.store.getState().tweets.tweets.map(tweet => <li>tweet.text</li>)
    return <div>
      <button onClick={this.fetchTweets.bind(this)}>Load tweets</button>
      <h1>{this.props.store.getState().user.user.name}</h1>
      <ul>{mappedTweets}</ul>
    </div>*/
  }
}
