import React, { useContext } from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {
  CardContext,
  CardProvider,
  initialState,
} from "../../services/CardContext";
import Selector from "./index";
import { Card, CardState } from "../../types";

afterEach(cleanup);

const DisplaysCurrent = () => {
  const { current, show } = useContext(CardContext);
  return (
    <div>
      <div data-testid="current">{current}</div>
      <div data-testid="show">
        {show.map((subject) => (
          <div key={subject}>{subject}</div>
        ))}
      </div>
    </div>
  );
};

const renderSelector = (testState?: CardState, child?: JSX.Element) =>
  render(
    <CardProvider testState={testState}>
      <Selector />
      {child}
    </CardProvider>
  );

//there is a sidebar
it("has a sidebar", () => {
  const { getByTestId } = renderSelector();
  const sidebar = getByTestId("sidebar");
  expect(sidebar).toBeInTheDocument();
});

describe("the subject menu item", () => {
  //the sidebar has a menu item that says 'subjects'
  it("has a subjects menu item", () => {
    const { getByText } = renderSelector();
    //the first menu item in the selector says 'Subjects' on it
    //if we can find that text, we know the sidebar is showing up
    const selector = getByText(/subjects/i);
    expect(selector).toBeInTheDocument();
  });

  //clicking the 'subjects' menu item clears the selected subjects so the app will show cards from all subjects
  it("clicking the subjects menu clears show", () => {
    const showSubjects = ["First Subject", "Second Subject"];
    const showState = {
      ...initialState,
      show: showSubjects,
    };

    const { getByText, getByTestId } = renderSelector(
      showState,
      <DisplaysCurrent />
    );
    const show = getByTestId("show");
    expect(show.children).toHaveLength(2);

    const subjects = getByText(/subjects/i);
    fireEvent.click(subjects);
    expect(show.children).toHaveLength(0);
  });
});

//the sidebar has menu items in it
//a menu item appears for each subject in the array cards in CardContext
//clicking on a menu item for a subject selects that subject
//clicking on a menu item for a subject expands that subject and shows a menu item with the question for each card in that subject
//clicking on a menu item for a card question selects that card
