
import { rootRedcer } from "./reducers";
import {createStore,applyMiddleware} from "redux";
import {thunk} from 'redux-thunk';


const store = createStore(rootRedcer, applyMiddleware(thunk));
export default store