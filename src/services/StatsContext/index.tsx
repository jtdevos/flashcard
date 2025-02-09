import React, { createContext, useEffect, useReducer } from "react";
import { Stats, StatsAction, StatsState } from "../../types";
import { loadStats, saveStats } from "../Save";

//a Stats object
//use as the basis for tracking stats for a new question
export const blankStats = {
  right: 0,
  wrong: 0,
  skip: 0,
} as Stats;

//the reducer handles actions
export const reducer = (state: StatsState, action: StatsAction) => {
  //switch statement looks at the action type
  //if there is a case that matches the type it will run that code
  //otherwise it will run the default case
  switch (action.type) {
    case "right": {
      //get the question from the action
      const { question } = action;

      //if the question is already in state, use those for the stats
      //otherwise, use blankStats object
      const prevStats = state[question] ? state[question] : blankStats;

      //create newStats from the prevStats
      const newStats = {
        ...prevStats,
        //right increases by 1
        right: prevStats.right + 1,
      };

      //assign newStats to question
      const newState = {
        ...state,
        [question]: newStats,
      };

      return newState;
    }
    //user skipped a card
    case "skip": {
      //get the question from the action
      const { question } = action;

      //if the question is already in state, use those for the stats
      //otherwise, use blankStats object
      const prevStats = state[question] ? state[question] : blankStats;

      //create newStats from the prevStats
      const newStats = {
        ...prevStats,
        //skip increases by 1
        skip: prevStats.skip + 1,
      };

      //assign newStats to question
      const newState = {
        ...state,
        [question]: newStats,
      };

      return newState;
    }
    //user got a question wrong
    case "wrong": {
      //get the question from the action
      const { question } = action;

      //if the question is already in state, use those for the stats
      //otherwise, use blankStats object
      const prevStats = state[question] ? state[question] : blankStats;

      //create newStats from the prevStats
      const newStats = {
        ...prevStats,
        //wrong increases by 1
        wrong: prevStats.wrong + 1,
      };

      //assign newStats to question
      const newState = {
        ...state,
        [question]: newStats,
      };

      return newState;
    }
    //default case returns the previous state without changing it
    default:
      return state;
  }
};

export const getInitialState = () =>
  ({
    ...loadStats(),
    dispatch: (action: StatsAction) => undefined,
  } as StatsState);

//the object that we use to make the first Context
export const initialState = getInitialState();

const StatsContext = createContext(initialState);

//the Props that the StatsProvider will accept
type StatsProviderProps = {
  //You can put react components inside of the Provider component
  children: React.ReactNode;

  //We might want to pass a state into the StatsProvider for testing purposes
  testState?: StatsState;
};

const StatsProvider = ({ children, testState }: StatsProviderProps) => {
  const [state, dispatch] = useReducer(
    reducer,
    testState ? testState : initialState
  );

  useEffect(() => {
    saveStats(state);
  }, [state]);

  const value = { ...state, dispatch } as StatsState;

  return (
    <StatsContext.Provider value={value}>{children}</StatsContext.Provider>
  );
};

export { StatsContext, StatsProvider };
