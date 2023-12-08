import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { reducer } from "./index";

afterEach(cleanup);

describe("StatsContext reducer", () => {
  it("returns state", () => {
    const state = {};
    const action = { type: undefined };
    expect(reducer(state, action)).toEqual(state);
  });
});

//reducer
//returns state
//adds new stats object when it receives a new question
//reducer handles right action, updates stats correctly
//reducer handles skip action, updates stats correctly
//reducer handles wrong action, updates stats correctly
//StatsContext provides an object with Stats for questions
