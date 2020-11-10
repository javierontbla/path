import { combineReducers } from "redux";

import { global_reducer } from "./global_reducer";

const root = combineReducers({ global_reducer });

export default root;
