import { Action } from "../actions";
import { ActionType } from "../action-types";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  // Type Guard (equivalent to `if(action.type === "search_repositories") etc`)
  switch (action.type) {
    // We are 100% certain that action is of type SearchRepositoriesAction:
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    // We are 100% certain that action is of type SearchRepositoriesSuccessAction:
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    // We are 100% certain that action is of type SearchRepositoriesErrorAction:
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
