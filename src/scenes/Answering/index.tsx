//import React so that we can use JSX
import React, { useState, useContext, useEffect } from "react";
//CardContext gives us access to the cards
import { CardContext } from "../../services/CardContext";
//The types of action that CardContext can handle
import { CardActionTypes } from "../../types";

import Buttons from "./components/Buttons";

//import all the components from Semantic UI React
import { Button, Container, Form, Header, TextArea } from "semantic-ui-react";

import Answer from "./components/Answer";

const Answering = () => {
  //get cards and currrent index from CardContext
  const { cards, current, dispatch } = useContext(CardContext);

  //get the question from the current card
  const { question } = cards[current];

  const [showAnswer, setShowAnswer] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    //hide the answer
    setShowAnswer(false);
    setInput("");
  }, [current, setShowAnswer, setInput]);

  return (
    <Container
      data-testid="container"
      style={{ position: "absolute", left: 200 }}
    >
      <Header data-testid="question" content={question} />
      <Button onClick={() => dispatch({ type: CardActionTypes.next })}>
        Skip
      </Button>
      <Form>
        <TextArea
          data-testid="textarea"
          value={input}
          onChange={(e: any, { value }) =>
            typeof value === "string" && setInput(value)
          }
        />
      </Form>
      <Buttons answered={showAnswer} submit={() => setShowAnswer(true)} />
      <Answer visible={showAnswer} />
    </Container>
  );
};

export default Answering;
