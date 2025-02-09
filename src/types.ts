//Types & interfaces used by the project

//defines the flashcard objects that the app stores and displays
export interface Card {
  //the answer to the question
  answer: string;

  //the question prompt
  question: string;

  //the subject of the question and answer
  subject: string;
}

//the shape of the state that CardContext returns
export interface CardState {
  //the array of Card objects
  cards: Card[];

  //the index of the currently displayed card object
  current: number;

  //the dispatch function that accepts actions
  //actions are handled by the reducer in CardContext
  dispatch: (action: any) => void;

  //the array of subjects currently displayed
  show: string[];
}

//the types of action that the reducer in CardContext will handle
export enum CardActionTypes {
  delete = "delete",
  new = "new",
  next = "next",
  save = "save",
  select = "select",
  showAdd = "showAdd",
  showAll = "showAll",
  showRemove = "showRemove",
}

export type CardAction =
  //deletes the card with matching question
  | { type: CardActionTypes.delete; question: string }

  //clears the writing component
  | { type: CardActionTypes.new }

  //moves to the next card
  | { type: CardActionTypes.next }

  //saves a card
  | {
      type: CardActionTypes.save;
      answer: string;
      question: string;
      subject: string;
    }

  //selects a card
  | { type: CardActionTypes.select; question: string }

  //adds a subject to the array of subjects to show
  | { type: CardActionTypes.showAdd; subject: string }

  //shows all subjects
  | { type: CardActionTypes.showAll }

  //removes a subject from the array of subjects to show
  | { type: CardActionTypes.showRemove; subject: string };

//The stats for a single question
export interface Stats {
  //number of times user has gotten it right
  right: number;

  //number of times user has gotten it wrong
  wrong: number;

  //number of times user has seen the question but skipped it instead of answering it
  skip: number;
}
// an interface with string index
// each string is expected to return an object that fits the Stats
// the string that we will use for a signature is the question from a Card object
export interface StatsType {
  [key: string]: Stats;
}

//The StatsDispatch function
interface StatsDispatch {
  dispatch: (action: StatsAction) => void;
}

//a union type. The stats state will have a Stats object for any given key
//except dispatch will return the StatsDispatch function
export type StatsState = StatsType & StatsDispatch;

//an enum listing the three types of StatsAction
//A user can get a question right, wrong, or skip it
export enum StatsActionType {
  right = "right",
  skip = "skip",
  wrong = "wrong",
}

//Stats Action
//takes the question from a card
export type StatsAction = {
  type: StatsActionType;
  question: string;
};

//defines the scenes that the user can navigate to
export enum SceneTypes {
  //where the user answers questions
  answering = "answering",

  //where the user writes questions
  writing = "writing",
}
