import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { saveCards } from "./index";
import { initialState } from "../CardContext";

afterEach(cleanup);

describe("Saving and Loading Cards", () => {
  let originalLocalStorage: Storage;

  beforeEach(() => {
    originalLocalStorage = window.localStorage;
  });

  afterEach(() => {
    (window as any).loacalStorage = originalLocalStorage;
  });

  const { cards } = initialState;
  const stringCards = JSON.stringify(cards);

  //saving cards saves cards
  it("saving cards saves cards", () => {
    const setItem = jest.spyOn(window.localStorage.__proto__, "setItem");

    saveCards(cards);

    expect(setItem).toHaveBeenCalledWith("cards", stringCards);
  });
  //loading cards retrieves saved cards
  //loading cards returns undefined if nothing found
});

//saving stats saves stats
//loading stats retrieves saved stats
//loading stats returns epty object if nothing found
