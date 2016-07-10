import { combineReducers, createStore } from "redux";

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

const store = createStore(reducers);

store.subscribe(() => {
  console.log('store changed', store.getState());
})

store.dispatch({type: 'CHANGE_NAME', payload: "Dustin"})
store.dispatch({type: 'CHANGE_AGE', payload: 24})
store.dispatch({type: 'CHANGE_AGE', payload: 25})
