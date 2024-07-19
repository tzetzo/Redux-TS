import { combineReducers } from "redux";

import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// as per react-redux documentation!
// Creates a type that describes the type of data in our redux store
export type RootState = ReturnType<typeof reducers>;
