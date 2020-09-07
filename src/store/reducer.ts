import { combineReducers } from "redux";
import { State } from "./State";
import campaign from "./campaign";
import Action from "./actionCreators/Action";

export const appReducer = combineReducers<State>({
  campaign
});

const rootReducer = (state: State | undefined, action: Action) => {
  return appReducer(state, action);
};

export const reducer = rootReducer;
