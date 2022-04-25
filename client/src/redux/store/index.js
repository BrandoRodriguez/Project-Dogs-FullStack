
import { applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';
import dogReducer from "../reducers/index.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(dogReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;