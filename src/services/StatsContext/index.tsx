import { Stats, StatsAction, StatsState } from "../../types";

//the reducer handles actions
export const reducer = (state: StatsState, action: StatsAction) => {
  //switch statement looks at the action type
  //if there isa case that matches the type it will run that code
  //otherwise it will run the default case
  switch (action.type) {
    //default case returns the previous state with no modifications
    default:
      return state;
  }
};

//a Stats object
//use as the basis for tracking stats for a new question
export const blankStats: Stats = {
  right: 0,
  wrong: 0,
  skip: 0,
};

//the object that we use to create the initial context
export const initialState = {
  dispatch: (action: StatsAction) => undefined,
} as StatsState;

//todo: https://dev.to/jacobwicks/statscontext-246c#test-2-raw-reducer-endraw-adds-a-new-raw-stats-endraw-object-when-it-receives-a-new-question
