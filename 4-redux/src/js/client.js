import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import promise from "redux-promise-middleware";

//These Reducers aren't used in tut5
/*
const userReducer = (state={}, action) => {
    switch (action.type) {
        case "CHANGE_NAME": {
            state = {...state, name: action.payload}
            break;
        }
        case "CHANGE_AGE": {
            state = {...state, age: action.payload}
            break;
        }
    }
    return state;
};
const postsReducer = (state=[], action) => {
    return state;
};
const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer
});
*/

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_USERS_ERROR": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "RECIEVE_USERS": {
      return {...state, fetching: false, fetched: true, users: action.payload}
      break;
    }
    case "FETCH_USERS_PENDING": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_USERS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "FETCH_USERS_FULFILLED": {
      return {...state, fetching: false, fetched: true, users: action.payload}
      break;
    }
  }
  return state;
}

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware); //later move 1 to reducer

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})

  // dispatch({type: "FETCH_USERS_START"})
  // axios.get("http://rest.learncode.academy/api/wstern/users")
  //   .then((response) => {
  //     dispatch({type: "RECIEVE_USERS", payload: response.data})
  //   })
  //   .catch((err) => {
  //     dispatch({type: "FETCH_USERS_ERROR", payload: err})
  //   })
