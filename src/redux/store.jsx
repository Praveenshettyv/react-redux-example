import { createStore } from "redux";
import Bikereducers from "./reducers/Bikereducers";
 const given_data=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store=createStore(Bikereducers, given_data());
export default store;