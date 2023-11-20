import React, { useContext } from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { reducer } from "./index";
import { CardContext, CardProvider, initialState } from "./index";
import { CardState } from "../../types";

const CardConsumer = () => {
  //get cards and the index of the current card
  const { cards, current } = useContext(CardContext);

  //get the current card
  const card = cards[current];

  //get the question, answer, and subject from the current card
  const { question, answer, subject } = card;

  //display each property in a div
  return (
    <div>
      <div data-testid="current">{current}</div>
      <div data-testid="question">{question}</div>
      <div data-testid="answer">{answer}</div>
      <div data-testid="subject">{subject}</div>
    </div>
  );
};

//renders the CardConsumer inside of CardProvider
const renderProvider = (testState?: CardState) =>
  render(
    <CardProvider testState={testState}>
      <CardConsumer />
    </CardProvider>
  );

afterEach(cleanup);

describe("CardContext reducer", () => {
  it("returns state", () => {
    const action = { type: undefined };
    expect(reducer(initialState, action)).toEqual(initialState);
  });

  it("renders without crashing", () => {
    render(<CardProvider children={[<div key="child" />]} />);
  });
});

//testing the CardConsumer using CardContext inside CardProvider
describe("CardConsumer using CardContext", () => {
  //current is 0
  it("has current value 0", () => {
    const { getByTestId } = renderProvider();
    const current = getByTestId(/current/i);
    expect(current).toHaveTextContent("0");
  });

  //question is the same as initialState.cards[0].question
  it("question is the same as current card", () => {
    //get cards, current from initialState
    const { cards, current } = initialState;

    //
  });
  //subject is the same as initialState.cards[0].subject
  //answer is the same as initialState.cards[0].answer
});

// todo: CardContext Test 5: card.question
