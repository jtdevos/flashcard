import React, { useContext } from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {
  CardProvider,
  CardContext,
  initialState,
} from "../../services/CardContext";
import { CardState } from "../../types";
import Writing from "./index";

afterEach(cleanup);

//there's an input where the user can enter the subject of the card
//There's a textarea where the user can enter the question prompt of the card
//there's a textarea where the user can enter the answer to the question
//there's a button to save the card
//when you enter a subject, question, and answer and click the save button a new card is created
//there's a button to create a new card
//when you click the new button the writing component clears its inputs
//there's a button to delete the current card
//when you click the delete button the card matching the question in the question textarea is deleted from the array cards

//displays last card in the cards array
const LastCard = () => {
  const { cards } = useContext(CardContext);
  //gets the question from the last card in the array
  const lastCard = cards[cards.length - 1].question;

  return <div data-testid="lastCard">{lastCard}</div>;
};

//renders writing inside CardContext
const renderWriting = (testState?: CardState, child?: JSX.Element) =>
  render(
    <CardProvider testState={testState}>
      <Writing />
      {child}
    </CardProvider>
  );

it("is a placeholder", () => {
  return;
});
