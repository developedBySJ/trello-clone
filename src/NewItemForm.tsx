import React from "react";
import { NewItemButtton, NewItemFormContainer, NewItemInput } from "./styles";
import { useFocus } from "./utils/useFocus";

interface NewItemFormProps {
  onAdd(text: string): void;
}

export const NewItemForm: React.FC<NewItemFormProps> = ({ onAdd }) => {
  const [text, setText] = React.useState("");
  const inputRef = useFocus();
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <NewItemButtton onClick={() => onAdd(text)}>Create</NewItemButtton>
    </NewItemFormContainer>
  );
};
