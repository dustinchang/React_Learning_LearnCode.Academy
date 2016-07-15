import { applyMiddleware, createStore } from "redux";

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

const reducer = (initialState=0, action) => {
  if (action.type === "INC") {
     return initialState + 1;
   } else if (action.type === "DEC") {
     return initialState - 1;
   } else if (action.type === "E") {
     throw new Error('AAAAA!!!!!');
   }
   return initialState;
}

const logger = (store) => (next) => (action) => {
  console.log('action fired,', action);
  //action.type = 'DEC'; //modifying action type
  next(action);
}

const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log('AHHHHH!!!', e);
  }
}

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 1, middleware); //later move 1 to reducer

store.subscribe(() => {
  console.log('store changed', store.getState());
})

store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'DEC'})
store.dispatch({type: 'DEC'})
store.dispatch({type: 'DEC'})
store.dispatch({type: 'E'})
