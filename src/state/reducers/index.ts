import { combineReducers } from "redux";

import repositoriesReducer from "./repositoriesReducer";

const reducers: any = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
