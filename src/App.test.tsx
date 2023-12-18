import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

//shows the Answering scene
it("shows the Answering component", () => {
  const { getByText } = render(<App />);

  const skip = getByText(/skip/i);

  //if we find a skip button, we know answering is showing up
  expect(skip).toBeInTheDocument();
});

//snapshot
it("Matches Snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
