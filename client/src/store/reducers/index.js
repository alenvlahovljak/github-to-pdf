import { combineReducers } from "redux";

import account from "./account";
import info from "./info";

const rootReducer = combineReducers({
	info,
	account
});

export default rootReducer;
