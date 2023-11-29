import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { CardActionTypes } from "../../../../types";
import { CardContext } from "../../../../services/CardContext";

const Buttons = ({
  answered,
  submit,
}: {
  answered: boolean;
  submit: () => void;
}) => {
  const { dispatch } = useContext(CardContext);

  if (answered) {
    return (
      <Button.Group>
        <Button
          content="Right"
          positive
          onClick={() => dispatch({ type: CardActionTypes.next })}
        />
        <Button.Or />
        <Button
          content="Wrong"
          negative
          onClick={() => dispatch({ type: CardActionTypes.next })}
        />
      </Button.Group>
    );
  } else {
    return <Button content="Submit" />;
  }
};

export default Buttons;

//todo: Pass Test 6: Clicking Submit shows Right and Wrong Buttons
//https://dev.to/jacobwicks/right-and-wrong-answer-buttons-1b45#pass-test-6-clicking-raw-submit-endraw-shows-raw-right-endraw-and-raw-wrong-endraw-buttons
