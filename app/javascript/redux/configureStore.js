import { applyMiddleware, legacy_createStore as createStore } from 'redux';

import thunk from 'redux-thunk';

const initialState = {
  greeting: [
    {
      message: 'Hello from React in Rails!'
    }
  ],
};

function rootReducer(state, action) {
  switch (action.type) {
    case 'GET_GREETINGS_SUCCESS':
      return { greeting: action.json.greetings }
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}