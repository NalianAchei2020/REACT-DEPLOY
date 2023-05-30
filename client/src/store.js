import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "thunk";
import rootReducer from "./reducers";

export default () => {
 const Store = createStore((state = {counter:0 }) =>{
     return state;
 });
 return Store;
}